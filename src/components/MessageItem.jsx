// import React from "react";

// const MessageItem = ({ message }) => {
//   if (!message || !message.sender) return null;

//   const isMe = message.sender === "me";

//   return (
//     <div className={`flex ${isMe ? "justify-end" : "justify-start"} px-4 py-1`}>
//       <div className="flex flex-col items-end max-w-[75%]">
//         <div
//           className={`px-4 py-2 rounded-lg shadow text-sm leading-relaxed break-words ${
//             isMe
//               ? "bg-[#2DCACF] text-white rounded-br-none"
//               : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
//           }`}
//         >
//           {message.text}
//         </div>
//         <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//           {message.timestamp}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default MessageItem;








import React from "react";

const MessageItem = ({ message }) => {
  if (!message || !message.sender) return null;

  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} px-4 py-1`}>
      <div className="flex flex-col items-end max-w-[75%]">
        <div
          className={`px-4 py-2 rounded-lg shadow text-sm leading-relaxed break-words ${
            isMe
              ? "bg-[#2DCACF] text-white rounded-br-none"
              : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
          }`}
        >
          {message.text}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
