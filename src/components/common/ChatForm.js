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
        { role: "user", text: userMessage },
      ]);
    }, 600);

    setUserMessage("");
  }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Message..."
        className="message-input"
        required
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value.trim())}
      />
      <button>
        <FaArrowUp />
      </button>
    </form>
  );
}
export default ChatForm;
