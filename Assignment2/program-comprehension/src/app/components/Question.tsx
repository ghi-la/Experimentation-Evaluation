import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextQuestion,
  setQuestionAnswer,
  setQuestionTimeTaken,
  setSurveyTimer,
} from '../store/actions';

const Question = ({
  index,
  test,
  possibilities,
}: {
  index: number;
  test: string;
  possibilities: string[];
}) => {
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

  // if (!index || !test || !check || !possibilities) {
  //   return null;
  // }

  function handleAnswer(answer: string) {
    dispatch(setSurveyTimer({ timer: survey.timer + time }));
    dispatch(setQuestionTimeTaken({ index, timeTaken: time }));
    dispatch(setQuestionAnswer({ index, answer }));
    dispatch(nextQuestion());
  }

  return (
    <div>
      <h2>{test}</h2>
      {possibilities?.map((possibility, i) => (
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

export default Question;
