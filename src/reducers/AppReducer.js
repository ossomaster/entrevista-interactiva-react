const AppReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        isStarted: true,
      };
    case 'CHANGE_VIDEO':
      return {
        ...state,
        video: state.db_videos[action.payload],
        answer: null,
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answer: action.payload,
      };
    case 'FINISH':
      return {
        ...state,
        isFinished: true,
      };
    default:
      return state;
  }
};

export default AppReducer;
