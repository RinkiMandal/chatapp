import React from "react";

const ChatHeader = ({ user, onBack }) => {
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
      <div className="flex items-center md:gap-4 gap-3">
        <button
          onClick={onBack}
          className="md:hidden text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <i className="ri-arrow-left-line"></i>
        </button>

        <img
          src={user.avatar}
          className="md:w-10 md:h-10 w-9 h-9 rounded-full"
          alt={user.name}
        />
        <div>
          <h2 className="md:text-lg text-sm font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h2>
          <p className="md:text-sm text-xs text-gray-500 dark:text-gray-400">
            {isOnline ? (
              <span className="text-green-500">Online</span>
            ) : (
              formatLastSeen(user.lastSeen)
            )}
          </p>
        </div>
      </div>

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
