import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../store/models/user';

const SurveyThanks = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user: User = useSelector((state: any) => state.user);

  const handleClick = () => {
    router.push('/statistics');
  };

  return (
    <>
      <Confetti gravity={0.04} opacity={0.8} />
      <Typography variant="h3" gutterBottom>
        Thank you very much for participating in this survey {user.name}!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Your answers have been recorded and will be used to generate statistics
        about the readability of strings.
      </Typography>

      {/* <Typography variant="body1" sx={{ mb: 4 }}>
        Click the button below to see the statistics of the experiment that we
        have recorded until now.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        I want to see the statistics!
      </Button> */}
    </>
  );
};

export default SurveyThanks;
