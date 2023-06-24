import { useRef } from "react";
import {useNavigate} from "react-router-dom"
const data = [];
let stream;

export default function ScreenRecord() {
  const screenRef = useRef();
  const navigate=useNavigate()

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
          navigate("/sample")
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
      <button onClick={shareScreen} className="border p-2 hover:bg-[#0f172a] hover:text-[#fff] mr-8 cursor-pointer">Screen Share</button>
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
        className="border p-2 hover:bg-[#0f172a] hover:text-[#fff] cursor-pointer"
      >Screen Pause</button>

      <header>
        <iframe width={'20%'} height={'20%'} ref={screenRef} className="border" title="Screen Recording" allowFullScreen allow="autoplay" />
      </header>
    </div>
  );
}