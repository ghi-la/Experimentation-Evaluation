import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { nextQuestion } from '../store/actions';

const Question = ({
  index,
  test,
  check,
  possibilities,
}: {
  index: number;
  test: string;
  check: string;
  possibilities: string[];
}) => {
  const dispatch = useDispatch();

  // if (!index || !test || !check || !possibilities) {
  //   return null;
  // }

  function handleAnswer(answers: string) {
    if (answers === check) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }
    dispatch(nextQuestion());
  }

  return (
    <div>
      <h2>{test}</h2>
      {possibilities?.map((possibility, i) => (
        <Button
          key={i}
          onClick={() => handleAnswer(possibility)}
          sx={{ textTransform: 'none' }}
        >
          {possibility}
        </Button>
      ))}
    </div>
  );
};

export default Question;
