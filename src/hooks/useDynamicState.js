import { useState } from 'react';

const useDynamicState = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = (newState) => {
    setState((oldState) => ({
      ...oldState,
      ...newState,
    }));
  };

  return [state, updateState];
};

export default useDynamicState;
