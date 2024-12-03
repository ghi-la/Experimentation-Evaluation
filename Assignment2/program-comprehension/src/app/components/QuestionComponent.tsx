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
      <h1 style={{ fontSize: '3rem' }}>{question?.test}</h1>
      <div
        style={{
          display: window.innerWidth > 500 ? 'flex' : 'block',
          flexWrap: 'wrap',
        }}
      >
        {question?.possibilities?.map((possibility, i) => (
          <Button
            key={i}
            variant="outlined"
            onClick={(e) => handleAnswer(e.currentTarget.textContent || '')}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              flex: '1 1 45%',
              margin: '5px',
              width: 'calc(100% - 10px)',
            }}
          >
            {possibility}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
