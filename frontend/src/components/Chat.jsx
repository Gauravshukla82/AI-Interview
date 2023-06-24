import React, { useState } from 'react';
import Speech from './Speech';
import axios from 'axios';
import ScreenRecord from './ScreenRecord';
import Mid from './Mid';

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const addMessage = async (message) => {
    setChatMessages([...chatMessages, { content: message, isUserMessage: true }]);
    try {
      // Send a POST request to the backend to get the chat response
      const response = await axios.post("/backendEndpoint", { message });
      const chatResponse = response.data.response;
      // Add the user message and the chat response to the messages
      setChatMessages([
        ...chatMessages,
        { content: message, isUserMessage: true },
        { content: chatResponse, isUserMessage: false },
      ]);
    } catch (error) {
      console.log("Error getting chat response from backend:", error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-sideBarColor flex flex-col">
        <h1 className="text-3xl text-[#fff] ml-20 mt-5 font-signature">Dashboard</h1>
        <div className="mt-auto">
      <Mid/>
        </div>

        <div className="mt-auto" >
          <ScreenRecord/>
        </div>


      </div>

      {/* Chat Window */}
      <div className="w-4/5 h-screen bg-userChatColor">
        <div className="h-5/6 text-[#fff] overflow-y-auto chat-messages">
          {chatMessages.map((message, index) => (
            <div key={index} className="flex items-center m-10">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" // Replace with the path to your user logo image
                alt="User Logo"
                className="w-8 h-8 mr-2"
              />
              <div
                className={`bg-${message.isUserMessage ? 'aiChat' : 'userChat'}Color py-2 px-4 rounded-lg text-white`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <Speech addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Chat;
