import { useState } from "react";
import { FiPaperclip, FiSmile, FiMic } from "react-icons/fi";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message Sent: ", message);
      setMessage("");
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1f23]">
      {isTyping && (
        <div className="text-sm text-gray-500 px-4 pt-2">You are typing...</div>
      )}

      <div className="p-4 flex items-center gap-2">
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
          <FiPaperclip size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
          <FiSmile size={20} />
        </button>

        <textarea
          rows={1}
          value={message}
          onChange={handleChange}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          placeholder="Type a message"
          className="flex-1 resize-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-md focus:outline-none overflow-hidden scrollbar-thin"
        />

        {message ? (
          <button
            onClick={handleSend}
            className="bg-[#2DCACF] hover:bg-[#559c9f] text-white px-4 py-2 rounded-md transition"
          >
            Send
          </button>
        ) : (
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <FiMic size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
