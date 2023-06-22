import SpeechRecognition, {
    useSpeechRecognition
  } from "react-speech-recognition";
  import useClipboard from "react-use-clipboard";
  import { useState } from "react";
  
  const Speech = () => {
    const [textToCopy, setTextToCopy] = useState("");
    const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration: 1000
    });
  
    const startListening = () =>
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  
    const {
      transcript,
      browserSupportsSpeechRecognition,
      listening,
      resetTranscript
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
  
    console.log(textToCopy);
    return (
      <>
        <div className="container">
          <br />
  
          <div
            className="main-content"
            style={{ height: "100px", border: "1px solid" }}
            onClick={() => setTextToCopy(transcript)}
          >
            {transcript}
          </div>
  
          <div className="btn-style">
            <button onClick={setCopied}>{isCopied ? "Copied!" : "Copy"}</button>
            <button onClick={startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
          </div>
          <p>Microphone: {listening ? "on" : "off"}</p>
        </div>
      </>
    );
  };
  
  export default Speech;
  