import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../services/questionServices';
import { isLoaded, isLoading, setSurvey, startSurvey } from '../store/actions';
import { Question, Survey } from '../store/models/survey';

const SurveyInformations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    dispatch(isLoading());
    getAllQuestions().then((data) => {
      setQuestions(data);
      dispatch(isLoaded());
    });
  }, []);

  const handleStartSurvey = () => {
    const survey: Survey = {
      user: user,
      timer: 0,
      isSurveyStarted: false,
      isSurveyCompleted: false,
      surveyQuestions: {
        currentQuestionIndex: 0,
        questions: questions,
      },
    };

    dispatch(setSurvey(survey));
    dispatch(startSurvey());

    // getAllQuestions().then((questions) => {
    //   const survey: Survey = {
    //     user: user,
    //     timer: 0,
    //     isSurveyStarted: false,
    //     isSurveyCompleted: false,
    //     surveyQuestions: {
    //       currentQuestionIndex: 0,
    //       questions: questions,
    //       // answers: [],
    //     },
    //   };
    //   dispatch(setSurvey(survey));
    //   dispatch(startSurvey());
    // });
  };
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Thanks for participating to this survey
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The survey consists of {questions.length} questions where we present you
        with strings composed of 2 or more words, and you will have to click the
        correct one.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We will track the time it takes to click on the correct string and the
        number of errors you make for each question.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleStartSurvey}
      >
        I'm ready to start!
      </Button>
    </>
  );
};

export default SurveyInformations;
