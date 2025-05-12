import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ isPlay, setIsplay }) => {
  const playerWrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        playerWrapperRef.current &&
        !playerWrapperRef.current.contains(event.target)
      ) {
        setIsplay(false);
      }
    };

    if (isPlay) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isPlay, setIsplay]);

  return (
    <>
    {isPlay && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div
            ref={playerWrapperRef}
            className="w-[90%] max-w-4xl aspect-video"
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=c5XtCXsvPZY"
              playing={false}
              controls
              muted
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: {
                    rel: 0,        // ⛔ No related videos at the end
                    modestbranding: 1, // ✅ Less YouTube branding
                    autoplay: 0,   // ✅ Autoplay enabled
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}





export default VideoModal

