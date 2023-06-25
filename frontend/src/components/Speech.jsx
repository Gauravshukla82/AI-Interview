import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPlay,
  faStop,
  faEraser,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Speech = ({ addMessage }) => {
  const [textToCopy, setTextToCopy] = useState("hello");
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const sendChatToBackend = async () => {
    addMessage(transcript);
    resetTranscript();
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="relative bottom-14 h-48 flex items-center justify-center bg-gradient-to-t from-aiChatColor">
      <br />

      <div
        className="w-2/4 h-10 px-4 text-[#fff]  bg-aiChatColor rounded-lg "
        onClick={() => setTextToCopy(transcript)}
      >
        {transcript}
      </div>

      {transcript ? (
        <button
          className="ml-2 px-4 py-2 rounded-md bg-[#19C37D]"
          onClick={sendChatToBackend}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      ) : (
        <button className="ml-2 px-4 py-2 ">
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white" }} />
        </button>
      )}
      <button onClick={startListening} className="ml-2 px-4 py-2">
        <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
      </button>
      <button
        onClick={SpeechRecognition.stopListening}
        className="ml-2 px-4 py-2"
      >
        <FontAwesomeIcon icon={faStop} style={{ color: "white" }} />
      </button>
      <button onClick={resetTranscript} className="ml-2 px-4 py-2">
        <FontAwesomeIcon icon={faEraser} style={{ color: "white" }} />
      </button>

      <p className="ml-2 px-4 py-2">
        {listening ? (
          <FontAwesomeIcon
            icon={faMicrophone}
            beatFade
            style={{ color: "#d80b0b" }}
          />
        ) : null}
      </p>
    </div>
  );
};

export default Speech;
