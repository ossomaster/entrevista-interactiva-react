import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Welcome = () => {
  const { start } = useContext(AppContext);

  return (
    <div className='absolute bg-pink-300 h-full w-full flex items-center justify-center py-4 px-3'>
      <div className='text-center max-w-md'>
        <a href='https://youtu.be/rncosqY881Y'>
          <img
            className='block mx-auto mb-4 rounded'
            src='https://yt3.ggpht.com/E_msTEwJdJPmS_a1qGZvlc_dsgWwkBQx4Auv9JDX24EFJP2Q2eVt4rBYdOKcy7crlIrt_2Mwmw=s88-c-k-c0x00ffffff-no-rj'
            alt='Gentleman Programming'
          />
        </a>
        <h1 className='font-bold text-lg mb-4'>Entrevista Interactiva React</h1>
        <button
          className='font-bold block bg-black text-pink-400 w-full rounded py-2 px-3 transition-colors hover:bg-gray-800'
          onClick={() => start()}
        >
          Comenzar
        </button>
        <p className='mt-3 text-sm opacity-80'>
          Hola, soy{' '}
          <a className='font-bold underline' href='https://twitter.com/ossodev'>
            osso
          </a>{' '}
          e hice esta pequeña app para poner en práctica mis habilidades, los
          videos y la iniciativa son del canal{' '}
          <a
            className='font-bold underline'
            href='https://www.youtube.com/channel/UCbx_d228PdYwgB4Jz202SIQ'
          >
            Gentleman Programming
          </a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
