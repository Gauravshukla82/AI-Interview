import React, { useState, useEffect } from "react";
import Speech from "./Speech";
import axios from "axios";
import Cookies from "js-cookie";
import ScreenRecord from "./ScreenRecord";
import Mid from "./Mid";

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [tech, setTech] = useState("");
  const [question, setQuestion] = useState(null);
  const [questionHistory, setQuestionHistory] = useState([]);

  useEffect(() => {
    if (questionHistory.length > 0) {
      const timer = setTimeout(() => {
        const lastQuestion = questionHistory[questionHistory.length - 1];
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { content: lastQuestion, isUserMessage: false },
        ]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [questionHistory]);

  const addMessage = async (answer) => {
    const userMessage = { content: answer, isUserMessage: true };
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        "https://giddy-shirt-eel.cyclic.app/interview/feedback",
        {
          question: question,
          answer: answer,
          token: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );
      const botResponse = response.data.bot;

      setChatMessages((prevMessages) => [...prevMessages, userMessage]);

      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { content: botResponse, isUserMessage: false },
        ]);
      }, 2000);
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
        .post(
          "https://giddy-shirt-eel.cyclic.app/interview/questions/",
          { tech },
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        )
        .then((res) => {
          const newQuestion = res.data.bot;
          setQuestion(newQuestion);
          setQuestionHistory((prevQuestions) => [
            ...prevQuestions,
            newQuestion,
          ]);
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
      <div className="w-1/5 h-screen bg-sideBarColor flex flex-col">
        <h1 className="text-3xl text-[#fff] ml-20 mt-5 font-signature">
          Dashboard
        </h1>
        <div>
          <select
            name=""
            id=""
            onChange={changeTech}
            className="bg-[#999] ml-12 rounded-md"
          >
            <option value="">Select Your Tech Stacks</option>
            <option value="HTML">HTML</option>
            <option value="React">React</option>
            <option value="Node JS">Node JS</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <button
          onClick={handleNextQuestion}
          className="text-[#ffff] mt-3 border-2 rounded-md"
        >
          Next Question
        </button>
        <div className="mt-auto">
          <Mid />
        </div>
        <div className="mt-auto">
          <ScreenRecord />
        </div>
      </div>
      <div className="w-4/5 h-screen bg-userChatColor">
        <div className="h-5/6 text-[#fff] overflow-y-auto chat-messages">
          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={`flex items-center m-10 ${
                message.isUserMessage ? "justify-end" : "justify-start"
              }`}
            >
              {message.isUserMessage ? (
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png"
                  alt="User Logo"
                  className="w-8 h-8 mr-2"
                />
              ) : (
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-adobe-flash-logo-icon-illustratoradobeflashadobe-flashaiillustratoradobe-iconicontiffadobe-logologologo-icon-231519333649wevqh.png"
                  alt="AI Logo"
                  className="w-8 h-8 mr-2"
                />
              )}
              <div
                className={`py-2 px-4 rounded-lg text-white ${
                  message.isUserMessage ? "bg-[#443030]" : "bg-aiChatColor"
                }`}
                style={{ fontSize: "14px" }}
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
