import { useRef } from "react";
import { BsFillRecordBtnFill } from "react-icons/bs";
import { AiTwotoneStop } from "react-icons/ai";

const data = [];
let stream;

export default function ScreenRecord() {
  const screenRef = useRef();

  const shareScreen = async () => {
    try {
      if (navigator.mediaDevices.getDisplayMedia) {
        stream = await navigator.mediaDevices.getDisplayMedia({
          audio: true,
          video: {
            cursor: "always"
          }
        });

        const mr = new MediaRecorder(stream);

        mr.ondataavailable = (chnk) => {
          console.log(chnk.data);
          data.push(chnk.data);
        };

        mr.start(1000);

        mr.onstop = (c) => {
          console.log('cEvent', c);
          const videoUrl = URL.createObjectURL(new Blob(data, { type: 'video/mp4' }));
          alert(videoUrl);
          screenRef.current.src = videoUrl;
        };

        console.log('stream', stream);
      }
    } catch (error) {
      alert("Your screen is not recording");
    }
  };

  return (
    <div>
      
      <header>
        <iframe width={'100%'} height={'20%'} ref={screenRef}  title="Screen Recording" allowFullScreen allow="autoplay" />
      </header>

      <div className='border-b-4 '></div>
      <div className="flex justify-between mt-2 mb-2 p-1">
        <h1 className="text-[#fff]">Wanted to Record</h1>
        <h1 className="text-[red]">new</h1>
      </div>

      <button onClick={shareScreen} className=" p-2 text-[blue] cursor-pointer">
         <BsFillRecordBtnFill />
         </button>
      <button onClick={async () => {
        try {
          let tracks = stream.getTracks();
          tracks.forEach((t) => t.stop());
          screenRef.current.src = "";
          
          console.log(tracks);
        } catch (error) {
          alert("Nothing to record");
        }
      }}
        className="text-[red] p-2 cursor-pointer"
      >
        <AiTwotoneStop />

      </button>
    </div>
  );
}