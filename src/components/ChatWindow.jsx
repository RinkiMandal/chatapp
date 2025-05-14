import React from "react";
import ChatHeader from "./ChatHeader";
import MessageItem from "./MessageItem";
import ChatInput from "./ChatInput";

const ChatWindow = ({ user, messages, onBack }) => {
  return (
    <div className="flex flex-col h-full md:mx-5 rounded-md">
      <ChatHeader user={user} onBack={onBack} />
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white dark:bg-[#18191A]">
        {messages.map((msg, index) => (
          <MessageItem key={index} message={msg} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
