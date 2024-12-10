'use client';

import PageContainer from '@/app/components/PageContainer';
import { getAllSurveys } from '@/app/services/surveyServices';
import { isLoaded, isLoading } from '@/app/store/actions';
import { Survey } from '@/app/store/models/survey';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleDownloadCSV } from '../helper';

const Download = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoading());
    getAllSurveys().then((data) => {
      setSurveys(data);
      dispatch(isLoaded());
    });
  }, []);

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        If you want to download the data collected from our survey, you can do
        so by pressing the button below.
      </Typography>
      <Typography variant="h6" gutterBottom>
        For privacy reasons, the downloadable data is completely anonymous.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleDownloadCSV(surveys)}
      >
        Download Data
      </Button>
    </PageContainer>
  );
};

export default Download;
