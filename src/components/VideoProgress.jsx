import React, { useMemo } from 'react';

const VideoProgress = ({ played, duration }) => {
  const progress = useMemo(() => {
    return Math.ceil((played / duration) * 100 || 0);
  }, [played, duration]);

  return (
    <div className='absolute top-0 left-0 h-0.5 md:h-1 w-full bg-black'>
      <div
        className='h-full bg-pink-400'
        style={{
          width: progress + '%',
        }}
      ></div>
    </div>
  );
};

export default VideoProgress;
