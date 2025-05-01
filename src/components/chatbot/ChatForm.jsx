import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ChatForm({ setChatHistory, generateBotResponse, chatHistory }) {
  const [userMessage, setUserMessage] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!userMessage) return;
    // update chat history with user's message
    setChatHistory((chatHistory) => [
      ...chatHistory,
      { role: "user", text: userMessage },
    ]);
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((chatHistory) => [
        ...chatHistory,
        { role: "model", text: "Thinking..." },
      ]);
      // call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above, please address this query if it is about the details if not answer from ur info: ${userMessage} `,
        },
      ]);
    }, 600);

    setUserMessage("");
  }
  return (
    <form
      action="#"
      onSubmit={handleFormSubmit}
      className="flex items-center bg-white outline outline-1 outline-[#cccce5] rounded-lg shadow-sm focus-within:outline-2 focus-within:outline-[var(--secondary)] px-3 py-2 w-full"
    >
      <input
        type="text"
        placeholder="Message..."
        className="flex-grow h-[47px] px-4 text-[0.95rem] bg-transparent border-none outline-none"
        required
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button className="flex justify-center items-center h-[35px] w-[35px] text-white text-[1.15rem] bg-[var(--secondary)] hover:bg-[#1d9d66] rounded-full ml-2 flex-shrink-0 transition-colors">
        <FaArrowUp />
      </button>
    </form>
  );
}
export default ChatForm;
