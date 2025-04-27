import "./Chatbot.css";
import ChatbotIcon from "./Components/ChatbotIcon";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./Components/ChatForm";
import { useState } from "react";
import ChatMessage from "./Components/ChatMessage";
function ChatBot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const generateBotResponse = async (history) => {
    // Format chat history for API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Make the API call to get the bot's response
      const response = await fetch(
        process.env.REACT_APP_GEMINI_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   // Make the API call to get the bot's response
    //   const response = await fetch(
    //     process.env.REACT_APP_GEMINI_API_URL,
    //     requestOptions
    //   );
    //   const data = await response.json();
    //   if (!response.ok)
    //     throw new Error(data.error?.message || "Something went wrong!");
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  function handleShowChatbot() {
    setShowChatbot((chat) => !chat);
  }
  return (
    // <div className="chatbot-container">
    //   <div className="chatbot-guide">
    //     <ChatbotIcon />
    //     <div className="ask-me-logo">
    //       <h1>Ask Me</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut
    //         nesciunt nisi corporis, maxime odio necessitatibus impedit in eum
    //         aliquid, minima reprehenderit ea sit corrupti, dignissimos culpa nam
    //         reiciendis explicabo!
    //       </p>
    //     </div>
    //   </div>
    <div className="chatbot-container">
      {showChatbot ? (
        <div className="chatbot-popup">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button onClick={handleShowChatbot} className="chat-button-down">
              <MdKeyboardArrowDown />
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hey there 👋
                <br /> How can I help you today?
              </p>
            </div>
            {/* Render the chat history dynamically */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>
          {/* Chat Footer */}
          <div className="chat-footer">
            <ChatForm
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
              chatHistory={chatHistory}
            />
          </div>
        </div>
      ) : (
        <button className="chatbot-widget-icon" onClick={handleShowChatbot}>
          <ChatbotIcon />
        </button>
      )}
    </div>
    // </div>
  );
}

export default ChatBot;
