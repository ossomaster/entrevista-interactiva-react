import React, { useReducer } from 'react';
import AppContext from '../contexts/AppContext';
import db_videos from '../db_videos';
import AppReducer from '../reducers/AppReducer';

const AppState = ({ children }) => {
  const initialState = {
    db_videos,
    isStarted: false,
    isFinished: false,
    answer: null,
    video: null,
    answers: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const start = () => {
    changeVideo('use-effect-body-solo-para-peticiones-al-back');

    dispatch({
      type: 'START',
    });
  };

  const togglePlaying = () => {
    dispatch({
      type: 'TOGGLE_PLAYING',
    });
  };

  const changeVideo = (id) => {
    dispatch({
      type: 'CHANGE_VIDEO',
      payload: id,
    });
  };

  const setAnswer = (answer) => {
    dispatch({ type: 'SET_ANSWER', payload: answer });
  };

  const finish = () => {
    dispatch({ type: 'FINISH' });
  };

  return (
    <AppContext.Provider
      value={{ state, start, togglePlaying, setAnswer, changeVideo, finish }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
