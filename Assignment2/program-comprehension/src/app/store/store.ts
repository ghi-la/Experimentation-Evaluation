import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import surveyReducer from './reducers/surveyReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    survey: surveyReducer,
  },
});
