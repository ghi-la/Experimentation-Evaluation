import { Survey } from '../models/survey';

const INITIAL_STATE: Survey = {
  user: {
    name: '',
    surname: '',
    ageRange: '',
    professionalBackground: '',
    codingFrequency: '',
    programmingLanguages: [],
  },
  timer: 0,
  isSurveyStarted: false,
  isSurveyCompleted: false,
  surveyQuestions: {
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
  },
};

const surveyReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'START_SURVEY':
      return { ...state, isSurveyStarted: true };
    case 'END_SURVEY':
      return { ...state, isSurveyCompleted: true };
    case 'SET_SURVEY':
      return { ...state, ...action.payload };
    case 'NEXT_QUESTION':
      return {
        ...state,
        surveyQuestions: {
          ...state.surveyQuestions,
          currentQuestionIndex: state.surveyQuestions.currentQuestionIndex + 1,
        },
      };
    default:
      return state;
  }
};

export default surveyReducer;
