import { useEffect, useState } from 'react';

interface Props {
  videoId: string;
  timestamp: number; // in seconds
  duration?: number; // how long to stay visible
  x: string; // e.g., '45%'
  y: string; // e.g., '60%'
  text: string;
}

export default function InteractiveButtons({
  videoId,
  timestamp,
  duration = 5,
  x,
  y,
  text,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement;

    const onTimeUpdate = () => {
      const time = video.currentTime;
      if (time >= timestamp && time <= timestamp + duration) {
        setVisible(true);
      } else {
        setVisible(false);
        setShowText(false); // auto-hide the box if video leaves
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, [timestamp, duration, videoId]);

  if (!visible) return null;

  return (
    <>
      <button
        onClick={() => setShowText(!showText)}
        style={{
          position: 'absolute',
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, #a64bf4, #6f42c1)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        +
      </button>
      {showText && (
        <div
          style={{
            position: 'absolute',
            top: `calc(${y} - 60px)`,
            left: x,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff3b0',
            border: '2px solid #f0c36d',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </div>
      )}
    </>
  );
}