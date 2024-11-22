import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../services/questionServices';
import { setSurvey, startSurvey } from '../store/actions';

const SurveyInformations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const handleStartSurvey = () => {
    getAllQuestions().then((questions) => {
      const survey = {
        user: user,
        timer: 0,
        isSurveyStarted: false,
        isSurveyCompleted: false,
        surveyQuestions: {
          currentQuestionIndex: 0,
          questions: questions,
          answers: [],
        },
      };
      dispatch(setSurvey(survey));
      dispatch(startSurvey());
    });
  };
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Thanks for participating to this survey
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The survey consists of 10 questions where we present you with strings
        composed of 2 or more words, and you will have to click on the one you
        find most readable.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We will track the time it takes to click on any of the strings (both the
        correct ones and those intentionally placed incorrectly).
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Do not focus too much on being "right" or "wrong" as making mistakes in
        identifying some strings written in a certain way is part of the
        experiment.
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
