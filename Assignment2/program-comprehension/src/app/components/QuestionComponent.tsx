import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseErrorCount,
  nextQuestion,
  openNotification,
  setQuestionTimeTaken,
  setSurveyTimer,
} from '../store/actions';
import { Question } from '../store/models/survey';

const QuestionComponent = ({ question }: { question: Question }) => {
  const dispatch = useDispatch();
  const survey = useSelector((state: any) => state.survey);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const startTime = new Date().getTime();
    const interval = setInterval(() => {
      setTime(new Date().getTime() - startTime);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [survey.surveyQuestions.currentQuestionIndex]);

  function handleAnswer(answer: string) {
    if (answer === question.check) {
      dispatch(setSurveyTimer({ timer: survey.timer + time }));
      dispatch(
        setQuestionTimeTaken({ index: question.questionIndex, timeTaken: time })
      );
      // dispatch(setQuestionAnswer({ index: question.questionIndex, answer }));
      dispatch(nextQuestion());
    } else {
      dispatch(increaseErrorCount());
      dispatch(
        openNotification({
          message: 'Wrong answer, try again!',
          severity: 'error',
        })
      );
    }
  }

  return (
    <div>
      <h2>{question?.test}</h2>
      {question?.possibilities?.map((possibility, i) => (
        <Button
          key={i}
          onClick={(e) => handleAnswer(e.currentTarget.textContent || '')}
          sx={{ textTransform: 'none' }}
        >
          {possibility}
        </Button>
      ))}
    </div>
  );
};

export default QuestionComponent;
