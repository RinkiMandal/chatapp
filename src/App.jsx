import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { users, messagesData } from "./data/mockData";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const selectedUser = users.find((user) => user.id === selectedUserId);
  const messages = messagesData[selectedUserId] || [];

  const handleBack = () => setSelectedUserId(null);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen md:bg-[#E7F9F9] bg-[#2DCACF]  dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition">
        <div
          className={`${selectedUserId ? "hidden md:block" : "block w-full"}  `}
        >
          <Sidebar
            activeChatId={selectedUserId}
            onSelectChat={setSelectedUserId}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        <div
          className={`flex-1 h-screen overflow-hidden ${
            selectedUserId ? "block" : "hidden"
          } md:block`}
        >
          {selectedUser ? (
            <ChatWindow
              user={selectedUser}
              messages={messages}
              onBack={handleBack}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
              👈 Select a conversation to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
