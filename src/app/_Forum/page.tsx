'use client'

import { useState, FormEvent } from "react";

interface Message {
  username: string;
  text: string;
}

export default function Chatroom() {
  const [username, setUsername] = useState<string>("");  // Store the username
  const [message, setMessage] = useState<string>("");    // Store the current message
  const [messages, setMessages] = useState<Message[]>([]);  // Store the list of messages with correct type

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim() && message.trim()) {
      // Add the new message to the messages array
      setMessages([...messages, { username, text: message }]);
      setMessage("");  // Clear the message input after sending
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-xl font-semibold">Chatroom</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Display all the messages */}
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="text-sm">
              <p className="font-semibold">{msg.username} - <span className="font-normal">{msg.text}</span></p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 p-4 flex flex-col items-start space-y-4">
        {/* Username input */}
        <div className="w-full">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message input */}
        <div className="w-full flex items-center space-x-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!username.trim()} // Disable if no username is provided
          />

          {/* Add Image Button */}
          <button
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-200"
            title="Add Image"
          >
            📷
          </button>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            disabled={!username.trim() || !message.trim()} // Disable if username or message is empty
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
