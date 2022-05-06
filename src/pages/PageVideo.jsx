import React, { useContext } from 'react';
import Farewell from '../components/Farewell';
import Video from '../components/Video';
import Welcome from '../components/Welcome';
import AppContext from '../contexts/AppContext';
import { FaSpinner } from 'react-icons/fa';

const PageVideo = () => {
  const {
    state: { isStarted, isFinished },
  } = useContext(AppContext);

  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      {isFinished ? (
        <Farewell></Farewell>
      ) : isStarted ? (
        <div className='w-full aspect-video relative overflow-hidden max-w-screen-2xl'>
          {/* TODO: mejorar transiciones entre videos */}
          <div className='h-full w-full flex items-center justify-center text-white text-xl'>
            <FaSpinner size={32} className='animate-spin'></FaSpinner>
          </div>
          <Video></Video>
        </div>
      ) : (
        <Welcome></Welcome>
      )}
    </div>
  );
};

export default PageVideo;
