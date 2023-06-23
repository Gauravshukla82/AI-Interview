import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlay, faStop,faPause } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
  const [pause,setPause] = useState(false)
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-sideBarColor">
        <h1 className="text-5xl text-white font-signature">Chat</h1>
      </div>
      <div className="w-4/5 h-screen bg-userChatColor">
        <div className="h-5/6">
          {/* chats */}
        </div>
        <div className="relative bottom-10 m-auto h-52 bg-aiChatColor flex items-center justify-center">
          <input
            type="text"
            placeholder="Send a message"
            className="w-2/4 h-14 px-4 shadow-2xl bg-userChatColor rounded-md border-solid"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md" onClick={()=>setPause(!pause)}>
            {pause?<FontAwesomeIcon icon={faPause} />:<FontAwesomeIcon icon={faPlay} />}
          </button>
          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md">
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
