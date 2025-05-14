import React, { useState } from "react";
import { FiPaperclip, FiSmile, FiMic } from "react-icons/fi"; // You can install react-icons for these

const ChatInput = () => {
  const [message, setMessage] = useState("");

  // Function to handle message input change
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle sending the message
  const handleSend = () => {
    if (message.trim()) {
      // Send the message logic here
      console.log("Message Sent: ", message);
      setMessage(""); // Clear message input
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1f23]">
      <div className="flex items-center gap-2">
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
