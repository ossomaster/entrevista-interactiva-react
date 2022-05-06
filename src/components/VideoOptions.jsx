import React, { useState } from 'react';
import classNames from 'classnames';

const ButtonOption = ({ children, active = false, ...props }) => {
  const buttonClasses = classNames(
    'border-b-2 font-medium text-white transition-colors',
    'px-2 py-2 text-xs',
    'md:px-4 md:py-2 md:text-base',
    'hover:border-white',
    {
      'border-transparent': !active,
      'border-white': active,
    }
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

const VideoOptions = ({ show, options, answer, onAnswer }) => {
  const [oldOptions, setOldOptions] = useState(options);

  const wrapperClasses = classNames(
    'absolute bottom-0 left-0 z-10 bg-black w-full flex items-center justify-center transition-all duration-1000',
    'h-auto px-4 py-2',
    'md:h-32 md:px-8 md:py-4',
    {
      'translate-y-0 opacity-100': show,
      'translate-y-full opacity-0': !show,
    }
  );

  const handleOnAnswer = (option) => {
    onAnswer(option);
  };

  const handleOnTransitionEnd = ({ propertyName, target: { classList } }) => {
    if (propertyName === 'transform') {
      if (classList.contains('translate-y-full')) {
        setOldOptions(options);
      }
    }
  };

  return (
    <div className={wrapperClasses} onTransitionEnd={handleOnTransitionEnd}>
      <div className='flex items-center justify-center gap-x-4 md:gap-x-10 w-full max-w-xl transition-opacity'>
        {oldOptions.map((option) => (
          <ButtonOption
            key={option.id}
            active={answer?.id === option.id}
            onClick={() => handleOnAnswer(option)}
          >
            {option.title}
          </ButtonOption>
        ))}
      </div>
    </div>
  );
};

export default React.memo(VideoOptions);
