import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleVideoPlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef?.current?.pause();
    } else {
      videoRef?.current?.play();
    }
  };

  return (
    <div className="h-screen relative">
      <video
        src="/assets/meal.mp4"
        loop
        muted
        controls={false}
        ref={videoRef}
        className="w-full h-full object-cover"
      />
      <div
        onClick={handleVideoPlay}
        className="absolute inset-0 bg-[rgba(0,0,0,0.65)] flex-center"
      >
        <div className="w-[100px] h-[100px] rounded-full cursor-pointer border border-solid border-golden flex-center">
          {isPlaying ? (
            <BsPauseFill color="#ffffff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#ffffff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
