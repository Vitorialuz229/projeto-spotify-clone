import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLocation } from 'react-router-dom';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaRandom, FaRedo } from 'react-icons/fa';

const Song: React.FC = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const song = location.state;

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  if (!song) {
    return (
      <h2 className="text-center text-red-500">Música não encontrada!</h2>
    );
  }

  const { audio, image, name, artist } = song;

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      className={`flex flex-col items-center overflow-hidden mx-3 p-6 md:mx-8 xl:mx-5 first:rounded-t-lg last:rounded-b-lg
        ${isDarkMode ? "text-white bg-neutral-900" : "text-black bg-neutral-200"}`}
    >
      <img
        src={image}
        alt={name}
        className="w-64 h-64 object-cover rounded-lg mx-auto shadow-2xl"
      />
      <h2 className="text-2xl font-extrabold mt-4">{name}</h2>
      <h3 className="text-lg text-gray-500">{artist}</h3>

      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={() => setIsShuffled(!isShuffled)}
          className={`p-2 rounded-full ${isShuffled ? 'text-green-500' : 'text-gray-500'}`}
        >
          <FaRandom size={20} />
        </button>

        <button
          onClick={togglePlayPause}
          className="bg-green-500 p-4 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            <FaPause size={20} className="text-white" />
          ) : (
            <FaPlay size={20} className="text-white" />
          )}
        </button>

        <button
          onClick={() => setIsLooping(!isLooping)}
          className={`p-2 rounded-full ${isLooping ? 'text-green-500' : 'text-gray-500'}`}
        >
          <FaRedo size={20} />
        </button>
      </div>

      <div className="w-full mt-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(audioRef.current ? audioRef.current.duration : 0)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={audioRef.current ? audioRef.current.duration : 0}
          value={currentTime}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = parseFloat(e.target.value);
            }
          }}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <FaVolumeMute
          size={20}
          className={`${isDarkMode ? "text-white" : "text-black"}`}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <FaVolumeUp
          size={20}
          className={`${isDarkMode ? "text-white" : "text-black"}`}
        />
      </div>

      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={handleTimeUpdate}
        className="hidden"
        controls
      />
    </div>
  );
};

export default Song;