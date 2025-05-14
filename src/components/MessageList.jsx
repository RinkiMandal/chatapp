import React from "react";

import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => (
  <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50 dark:bg-gray-900">
    {messages.map((msg, i) => (
      <MessageItem key={i} message={msg} />
    ))}
  </div>
);

export default MessageList;
