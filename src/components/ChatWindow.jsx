import React from 'react';
import ChatHeader from './ChatHeader';
import MessageItem from './MessageItem';
import ChatInput from './ChatInput';

const ChatWindow = ({ user, messages }) => {
  return (
    <div className="flex flex-col h-full mx-5 rounded-md ">
    {/* className="bg-green-600 rounded overflow-y-auto max-h-[calc(100vh-200px)] dark:bg-gray-800 custom-scrollbar */}
      <ChatHeader user={user} />
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








