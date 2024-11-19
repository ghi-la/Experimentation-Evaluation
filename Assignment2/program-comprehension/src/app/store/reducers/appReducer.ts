const INITIAL_STATE = {
  alert: {
    isOpen: false,
    severity: 'success',
    message: '',
  },
  isLoading: false,
};

const appReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { ...state, isLoading: true };
    case 'IS_LOADED':
      return { ...state, isLoading: false };
    case 'OPEN_ALERT':
      return {
        ...state,
        alert: {
          isOpen: true,
          severity: action.payload.severity,
          message: action.payload.message,
        },
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alert: INITIAL_STATE.alert,
      };
    default:
      return state;
  }
};
