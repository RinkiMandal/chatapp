import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { users } from "../data/mockData";

const Sidebar = ({ activeChatId, onSelectChat, darkMode, setDarkMode }) => {
  return (
    <div className="w-full md:w-96   dark:bg-[#1e1f23] border-r border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div className="flex justify-between  items-center">
        <div className="px-4 py-4 font-semibold text-lg md:text-gray-800 text-white dark:text-white">
          Chats
        </div>
        <i class="ri-more-2-fill text-2xl font-bold text-white md:hidden block"></i>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:justify-evenly justify-center md:gap-4 md:items-start items-center cursor-pointer md:mx-1">
        <div
          className={`md:w-14 shadow-xl  w-full md:rounded-lg  flex md:flex-col flex-row items-center md:justify-normal justify-between px-2 md:py-3 h-full ${
            darkMode
              ? "md:bg-black  dark:bg-[#1e1f23]"
              : "bg-[#2DCACF] text-white"
          } relative`}
        >
          <img
            className="rounded-full md:block hidden object-cover"
            src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
          />
          <i className="ri-home-4-line md:mt-7 text-3xl md:block hidden"></i>
          <i className="ri-wechat-2-line md:mt-4 text-3xl"></i>
          <i className="ri-notification-3-line md:mt-4 text-3xl"></i>
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-2xl" />
              ) : (
                <FaMoon className="text-white text-2xl" />
              )}
            </button>
          </div>

          <i className="ri-settings-2-fill md:block hidden absolute bottom-0 text-2xl"></i>
        </div>

        <div className="flex-col w-full">
          <div className="relative max-w-sm md:mt-0 mt-3 md:mx-auto mx-3 pb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 outline-none py-2.5 pl-10 pr-4 rounded-xl bg-white shadow-md dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none  transition-all"
            />
            <i className="ri-search-line absolute left-3 mt-5 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 text-xl"></i>
          </div>

          <div className="px-4 pb-5 flex gap-5 md:hidden ">
            {users
              .filter((user) => user.isOnline)
              .map((user) => (
                <div
                  key={user.id}
                  onClick={() => onSelectChat(user.id)}
                  className="flex items-center gap-3 py-2 cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    {user.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="bg-white rounded-t-3xl md:rounded overflow-y-auto  max-h-[calc(100vh-200px)] dark:bg-gray-800 custom-scrollbar">
            <p className="font-semibold pt-5 text-lg px-4">People</p>
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => onSelectChat(user.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 
      ${
        activeChatId === user.id
          ? "bg-[#E7F9F9] dark:bg-[#2DCACF]"
          : "hover:bg-gray-100 dark:hover:bg-gray-700"
      }
      border-b ${darkMode ? "border-gray-900" : "border-gray-200"}`}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  {user.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate flex items-center gap-2">
                    {user.isMessageRead ? (
                      <i className="ri-check-double-line text-green-500 text-xs"></i>
                    ) : (
                      <i className="ri-check-line text-gray-500 text-xs"></i>
                    )}
                    {user.lastMessage}
                  </div>
                </div>

                <div className="text-xs flex flex-col text-gray-400">
                  {user.lastMessageTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
