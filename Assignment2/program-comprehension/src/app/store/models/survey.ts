import { User } from './user';

export type Question = {
  questionIndex: number;
  timeTaken: number;
  test: string;
  caseVariant: string;
  check: string;
  possibilities: string[];
  // answer: string;
  errors: number;
};

export type Survey = {
  user: User;
  timer: number;
  isSurveyStarted: boolean;
  isSurveyCompleted: boolean;
  surveyQuestions: {
    currentQuestionIndex: number;
    questions: Question[];
    // answers: string[];
  };
};

// export const testSurvey: Survey = {
//   user: testUser,
//   surveyQuestions: {
//     currentQuestionIndex: 0,
//     questions: [
//       {
//         questionIndex: 0,
//         test: 'Which one is more readable?',
//         check: 'Hello World',
//         possibilities: ['Hello World', 'Helo Wrold'],
//         timeTaken: 0,
//         answer: '',
//       },
//       {
//         questionIndex: 1,
//         test: 'Which one is more readable?',
//         check: 'Hello World',
//         possibilities: ['Hello World', 'Helo Wrold'],
//         timeTaken: 0,
//         answer: '',
//       },
//     ],
//     answers: [],
//   },
//   timer: 0,
//   isSurveyStarted: false,
//   isSurveyCompleted: false,
// };
