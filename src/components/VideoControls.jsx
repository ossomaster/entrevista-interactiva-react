import classNames from 'classnames';
import React from 'react';

import { FaPlay, FaPause, FaBackward, FaQuestion } from 'react-icons/fa';

const ButtonControl = ({ children, ...props }) => {
  const classes = classNames(
    'bg-black text-pink-400 transition-colors hover:bg-gray-800',
    'text-xs px-2 py-2',
    'md:text-base md:px-4 md:py-3'
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const VideoControls = ({ playing, onTogglePlay, onBackward, onSkip }) => {
  return (
    <div className='absolute top-0.5 md:top-1 left-0 z-10'>
      <ButtonControl onClick={onTogglePlay}>
        {playing ? <FaPause /> : <FaPlay />}
      </ButtonControl>
      <ButtonControl onClick={onBackward}>
        <FaBackward />
      </ButtonControl>
      <ButtonControl onClick={onSkip}>
        <FaQuestion />
      </ButtonControl>
    </div>
  );
};

export default VideoControls;
