'use client';

import { Divider, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { getAllQuestions } from '../services/questionServices';
import { getAllSurveys } from '../services/surveyServices';
import { isLoaded, isLoading } from '../store/actions';
import { Question, Survey } from '../store/models/survey';

export default function Page() {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);

  const [totalErrorsByQuestion, setTotalErrorsByQuestion] = useState<number[]>(
    []
  );

  useEffect(() => {
    dispatch(isLoading());
    getAllQuestions().then((data) => {
      setQuestions(data);
      getAllSurveys().then((data) => {
        setSurveys(data);
        dispatch(isLoaded());
      });
    });
  }, []);

  useEffect(() => {
    const totalErrors = surveys.map((survey) =>
      survey.surveyQuestions.questions.reduce(
        (acc: number, question: Question) => acc + question.errors,
        0
      )
    );
    computeTotalErrorsByQuestion();
    console.log('Total Errors By Survey', totalErrors);

    // console.log('Question Errors', question_errors);

    // const question_errors = surveys.map((survey : Survey) =>

    // );
    // console.log('Correct Answers');
    // const correctAnswers = surveys.map((survey) =>
    //   survey.surveyQuestions.questions.map((question) =>
    //     question.answer === question.check ? 1 : 0
    //   )
    // );
    // console.log(correctAnswers);
  }, [surveys]);

  const computeTotalErrorsByQuestion = () => {
    const question_errors = surveys.map((survey: Survey) =>
      survey.surveyQuestions.questions.map((question) => question.errors)
    );
    const totalErrorsByQuestion = question_errors.reduce(
      (acc: number[], question_errors: number[]) => {
        return acc.map((value, index) => value + question_errors[index]);
      },
      Array.from({ length: questions.length }, () => 0)
    );
    setTotalErrorsByQuestion(totalErrorsByQuestion);
  };

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Average Corrected Answers
      </Typography>
      <BarChart
        // layout="horizontal"
        xAxis={[
          {
            id: 'barCategories',
            data: questions.map((question) => question.test),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: totalErrorsByQuestion,
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
