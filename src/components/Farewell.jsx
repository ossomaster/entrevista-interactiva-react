import React from 'react';

const Farewell = () => {
  const handleOnAgain = () => {
    window.location.reload();
  };

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
        <h1 className='font-bold text-lg mb-4'>
          Fin de la entrevista, gracias por participar
        </h1>
        <button
          className='font-bold block bg-black text-pink-400 w-full rounded py-2 px-3 transition-colors hover:bg-gray-800'
          onClick={handleOnAgain}
        >
          Comenzar de nuevo
        </button>
      </div>
    </div>
  );
};

export default Farewell;
