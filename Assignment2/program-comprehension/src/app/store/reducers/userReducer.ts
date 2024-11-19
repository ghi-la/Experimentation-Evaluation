const INITIAL_STATE = {
  username: '',
  age: '',
  professionalBackground: '',
  codingFrequency: '',
  programmingLanguages: [],
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
