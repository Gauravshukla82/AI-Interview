import React, { useState } from 'react';
import Speech from './Speech';
import axios from 'axios';
import Cookies from 'js-cookie';

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [tech, setTech] = useState("");
  const [question, setQuestion] = useState(null); // Initialize question state as null
  const [arr,setArr] = useState([]);
  const addMessage = async (answer) => {
    setChatMessages([...chatMessages, { content: answer, isUserMessage: true }]);
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        "https://giddy-shirt-eel.cyclic.app/interview/feedback",
        {
          question: question,
          answer: answer,
          token: token
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token
          }
        }
      );
      const chatResponse = response.data.response;
      console.log("Response from /interview/feedback:", response.data);
  
      setChatMessages([
        ...chatMessages,
        { content: answer, isUserMessage: true },
        { content: chatResponse, isUserMessage: false },
      ]);
    } catch (error) {
      console.log("Error getting chat response from backend:", error);
    }
  };
  
  

  const changeTech = (e) => {
    setTech(e.target.value);
  };

  const handleNextQuestion = () => {
    const token = Cookies.get("token");
    try {
      axios
        .post("https://giddy-shirt-eel.cyclic.app/interview/questions/", { tech }, {
          headers: {
            "Content-Type": "application/json",
            token: token
          }
        })
        .then((res) => {
          setQuestion(res.data.bot);
          console.log(res.data.bot);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-sideBarColor">
        <h1 className="text-3xl text-[#fff] ml-20 mt-5 font-signature">Dashboard</h1>
        <div>
          <select name="" id="" onChange={changeTech} className='bg-[#999] ml-10 rounded-md'>
            <option value="">Select Your Tech Stacks</option>
            <option value="HTML">HTML</option>
            <option value="React">React</option>
            <option value="Node JS">Node JS</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <button onClick={handleNextQuestion} className="text-[#ffff] ml-20 rounded-md">Next Question</button>
      </div>
     
      {/* Chat Window */}
      <div className="w-4/5 h-screen bg-userChatColor">
        <div className="h-5/6 text-[#fff] overflow-y-auto chat-messages">
          {question && (
            <div className="flex items-center m-10">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" // Replace with the path to your user logo image
                alt="Ai Logo"
                className="w-8 h-8 mr-2"
              />
              <div className={`py-2 px-4 rounded-lg text-[#fff]`}>{question}</div>
              
            </div>
          )}
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
