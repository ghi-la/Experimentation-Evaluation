'use client';

import { Divider, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import { getAllQuestions } from '../services/questionServices';
import { getAllSurveys } from '../services/surveyServices';
import { Question, Survey } from '../store/models/survey';

export default function Page() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    getAllQuestions().then((data) => {
      setQuestions(data);
    });
    getAllSurveys().then((data) => {
      setSurveys(data);
    });
  }, []);

  useEffect(() => {
    console.log('Correct Answers');
    const correctAnswers = surveys.map((survey) =>
      survey.surveyQuestions.questions.map((question) =>
        question.answer === question.check ? 1 : 0
      )
    );
    console.log(correctAnswers);
  }, [surveys]);

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Average Corrected Answers
      </Typography>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: questions.map((question) => question.test),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        // width={500}
        height={300}
      />
      <Typography variant="h5" gutterBottom>
        Average Time Taken by Answer
      </Typography>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Average Corrected Answers by Case
      </Typography>
      <Typography variant="h5" gutterBottom>
        Average Time Taken by Case
      </Typography>
    </PageContainer>
  );
}
