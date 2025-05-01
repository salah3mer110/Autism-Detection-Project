import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./ChatForm";
import { useEffect, useRef, useState } from "react"; // Add useRef
import ChatMessage from "./ChatMessage";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { websiteInfo } from "./websiteInfo";

function ChatBot() {
  const bottomRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  const generateBotResponse = async (history) => {
    const historyWithContext = [
      {
        role: "user",
        parts: [
          {
            text: `Use this background info for context, if he asked for somthing outside this answer from your info, but don't show it unless asked:\n${websiteInfo}`,
          },
        ],
      },
      ...history.map(({ role, text }) => ({
        role,
        parts: [{ text }],
      })),
    ];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: historyWithContext }),
    };
    try {
      const response = await fetch(
        process.env.REACT_APP_GEMINI_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      if (text) {
        setChatHistory((prev) => {
          const updated = [...prev];
          const thinkingIndex = updated.findIndex(
            (msg) => msg.text === "Thinking..."
          );
          if (thinkingIndex !== -1) {
            updated[thinkingIndex] = { role: "model", text }; // Replace the placeholder
          } else {
            updated.push({ role: "model", text });
          }
          return updated;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleShowChatbot() {
    setShowChatbot((chat) => !chat);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="relative">
      {showChatbot ? (
        <div className="fixed w-[420px] bg-white rounded-l shadow-[0_0_128px_0_rgba(0,0,0,0.1),0_32px_64px_-48px_rgba(0,0,0,0.5)] right-0 bottom-0 z-[1000] overflow-hidden">
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 bg-[var(--secondary)]">
            <div className="flex items-center gap-2.5">
              <TbMessageChatbotFilled className="h-9 w-9 bg-white rounded-full fill-[var(--secondary)] p-1.5 flex-shrink-0" />
              <h2 className="text-white font-semibold text-xl">Chatbot</h2>
            </div>
            <button
              onClick={handleShowChatbot}
              className="flex justify-center items-center h-10 w-10 border-none outline-none cursor-pointer text-white bg-transparent rounded-full text-3xl hover:bg-green-600 transition ease-in-out duration-200"
            >
              <MdKeyboardArrowDown />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex flex-col gap-5 h-[460px] overflow-y-auto p-6 mb-20 scrollbar-thin scrollbar-thumb-pink-100">
            <div className="flex items-end gap-3 bot-message">
              <TbMessageChatbotFilled className="h-9 w-9 bg-[var(--secondary)] rounded-full fill-white p-1.5 flex-shrink-0 mb-0.5" />
              <p className="p-3 max-w-[75%] bg-green-50 rounded-[13px_13px_13px_3px] text-sm">
                Hey there 👋
                <br /> How can I help you today?
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Chat Footer */}
          <div className="absolute bottom-0 w-full bg-white p-4 pb-5">
            <ChatForm
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
              chatHistory={chatHistory}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={handleShowChatbot}
          className="fixed right-5 bottom-5 z-[1000] rounded-full border-none outline-none bg-[var(--fifth)] cursor-pointer shadow-[0_0_128px_0_rgba(0,0,0,0.1)] p-3"
        >
          <TbMessageChatbotFilled className="h-12 w-12 rounded-full fill-[var(--secondary)] bg-[var(--fifth)]" />
        </button>
      )}
    </div>
  );
}

export default ChatBot;
