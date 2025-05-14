import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { users, messagesData } from "./data/mockData";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const selectedUser = users.find((user) => user.id === selectedUserId);
  const messages = messagesData[selectedUserId] || [];

  const handleBack = () => setSelectedUserId(null); // Back from chat on mobile

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-[#E7F9F9] dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition">
        {/* Sidebar: hide on mobile if chat selected */}
        <div
          className={`w-full md:w-[300px] ${
            selectedUserId ? "hidden md:block" : "block"
          }`}
        >
          <Sidebar
            activeChatId={selectedUserId}
            onSelectChat={setSelectedUserId}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* ChatWindow: hide on mobile if no user selected */}
        <div
          className={`flex-1 ${selectedUserId ? "block" : "hidden"} md:block`}
        >
          {selectedUser ? (
            <ChatWindow
              user={selectedUser}
              messages={messages}
              onBack={handleBack} // Passing the handleBack function
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
