import React, { useState } from "react";

const Card = ({ src, thumb, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <a href="#" className="w-full">
          {!isPlaying ? (
            <>
              <img
                src={thumb}
                alt="Video Thumbnail"
                className="w-96 h-auto"
                onClick={handleVideoClick}
              />
              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <p className="text-gray-100 text-sm font-semibold">{name}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <video
                src={src}
                className="w-96 h-auto"
                onClick={handleVideoClick}
                controls
                autoPlay
              />
              <div className="flex flex-row mt-2 gap-2">
                <div className="flex flex-col">
                  <p className="text-gray-100 text-sm font-semibold">{name}</p>
                </div>
              </div>
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default Card;
