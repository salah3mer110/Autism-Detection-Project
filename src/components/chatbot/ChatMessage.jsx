import { TbMessageChatbotFilled } from "react-icons/tb";

function ChatMessage({ chat }) {
  return (
    <div
      className={`flex gap-3 ${
        chat.role === "model"
          ? "bot-message items-end"
          : "user-message flex-col items-end"
      }`}
    >
      {chat.role === "model" && (
        <TbMessageChatbotFilled className="h-9 w-9 bg-[var(--secondary)] rounded-full fill-white p-1.5 flex-shrink-0 mb-0.5" />
      )}
      <p
        className={`p-3 max-w-[75%] text-sm ${
          chat.role === "model"
            ? "bg-green-50 rounded-[13px_13px_13px_3px]"
            : "bg-[var(--secondary)] text-white rounded-[13px_13px_3px_13px] break-words whitespace-pre-line"
        }`}
      >
        {chat.text}
      </p>
    </div>
  );
}

export default ChatMessage;
