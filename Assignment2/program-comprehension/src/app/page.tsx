'use client';

import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // Correct import for app directory
import { useDispatch } from 'react-redux';
import PageContainer from './components/PageContainer';
import { openNotification } from './store/actions';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <PageContainer>
      <Typography variant="h3" gutterBottom>
        Welcome to the Code Readability Experiment
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        We are investigating whether camelCase or kebab-case is more effective
        for code readability.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
        Your participation is highly valued and will help us better understand
        code readability preferences. Completing this survey will take only a
        few minutes of your time, and the data collected will remain completely
        anonymous.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        After finishing the survey, you can explore aggregated results through
        visual graphs showing insights from all participants.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          router.push('/form');
          dispatch(
            openNotification({
              message: 'Thank you so much!',
              severity: 'info',
            })
          );
        }}
      >
        I want to partecipate!
      </Button>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        If you have any questions, please contact us.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        If you are here means you know us already, so you know how to reach us
        and we don't need to provide any contact information :)
      </Typography>
    </PageContainer>
  );
}
