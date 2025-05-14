// import React from "react";

// const ChatHeader = ({ user }) => {
//   const isOnline = user.isOnline;

//   const formatLastSeen = (lastSeen) => {
//     const date = new Date(lastSeen);
//     return `last seen at ${date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     })}`;
//   };

//   return (
//     <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1f1f22] border-b border-gray-200 dark:border-gray-700 shadow-sm">
//       {/* Left side: Avatar, Name, Status */}
//       <div className="flex items-center gap-4">
//         <img
//           src={user.avatar}
//           className="w-10 h-10 rounded-full"
//           alt={user.name}
//         />
//         <div>
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
//             {user.name}
//           </h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             {isOnline ? (
//               <span className="text-green-500">Online</span>
//             ) : (
//               formatLastSeen(user.lastSeen)
//             )}
//           </p>
//         </div>
//       </div>

//       {/* Right side: Call, Video Call, Menu */}
//       <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-xl">
//         <button className="hover:text-green-500 transition">
//           <i className="ri-phone-line"></i>
//         </button>
//         <button className="hover:text-blue-500 transition">
//           <i className="ri-video-add-line"></i>
//         </button>

//         <button className="hover:text-gray-800 dark:hover:text-white transition">
//           <i className="ri-more-2-fill"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatHeader;

import { useNavigate } from "react-router-dom";

const ChatHeader = ({ user }) => {
  const navigate = useNavigate(); // ✅ initialize

  const isOnline = user.isOnline;

  const formatLastSeen = (lastSeen) => {
    const date = new Date(lastSeen);
    return `last seen at ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1f1f22] border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-xl text-gray-600 dark:text-gray-300 mr-1"
          onClick={() => navigate(-1)} // ✅ GO BACK
        >
          <i className="ri-arrow-left-line"></i>
        </button>

        <img src={user.avatar} className="w-10 h-10 rounded-full" alt={user.name} />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isOnline ? (
              <span className="text-green-500">Online</span>
            ) : (
              formatLastSeen(user.lastSeen)
            )}
          </p>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-xl">
        <button className="hover:text-green-500 transition">
          <i className="ri-phone-line"></i>
        </button>
        <button className="hover:text-blue-500 transition">
          <i className="ri-video-add-line"></i>
        </button>
        <button className="hover:text-gray-800 dark:hover:text-white transition">
          <i className="ri-more-2-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
