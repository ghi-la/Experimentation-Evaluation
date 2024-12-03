'use client';

import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // Correct import for app directory
import { useDispatch } from 'react-redux';
import PageContainer from './components/PageContainer';
import { isLoading, openNotification } from './store/actions';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <PageContainer>
      <Typography variant="h3" gutterBottom>
        Welcome to the Code Readability Experiment
      </Typography>
      <Typography variant="h6" gutterBottom>
        We are investigating whether camelCase or kebab-case is more effective
        for code readability.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
        Your participation is highly valued and completing this survey will take
        only a few seconds of your time.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We ask your name only to ensure that you are not submitting multiple
        responses.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          dispatch(isLoading());
          router.push('/form');
          dispatch(
            openNotification({
              message: 'We really appreciate that, thanks!',
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
        If you are here means you know us already (Matteo or Sasha), so you know
        how to reach us and we don't need to provide any contact information :)
      </Typography>
    </PageContainer>
  );
}
