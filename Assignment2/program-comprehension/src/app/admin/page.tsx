'use client';
import { Button, Card, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import QuestionsList from '../components/Dialogs/QuestionsList';
import SurveysList from '../components/Dialogs/SurveysList';
import PageContainer from '../components/PageContainer';
import { addQuestion, getAllQuestions } from '../services/questionServices';
import { getAllSurveys } from '../services/surveyServices';
import { isLoaded, isLoading, openNotification } from '../store/actions';
import { Question, Survey } from '../store/models/survey';
import { handleDownloadCSV } from './helper';
import questionsPreset from './questionsPreset';

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);

  const [questionsListOpen, setQuestionsListOpen] = useState(false);
  const [surveysListOpen, setSurveysListOpen] = useState(false);

  useEffect(() => {
    dispatch(isLoading());
    getAllQuestions().then((data: Question[]) => {
      setQuestions(data);
      getAllSurveys().then((data) => {
        setSurveys(data);
        dispatch(isLoaded());
      });
    });
  }, []);

  const handleLoadPreset = () => {
    questionsPreset.forEach((question) => {
      addQuestion(question)
        .then((data) => {
          dispatch(
            openNotification({ message: 'Question added', severity: 'success' })
          );
        })
        .catch((error) => {
          dispatch(
            openNotification({
              message: 'Error adding question',
              severity: 'error',
            })
          );
        });
    });
  };

  return (
    <PageContainer>
      <h1>Admin Panel</h1>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <Card>
          <CardContent>
            <h2>Questions: {questions.length}</h2>
            <Button
              onClick={handleLoadPreset}
              fullWidth
              disabled={questions.length > 0}
            >
              Load Questions Preset
            </Button>
            <Button onClick={() => setQuestionsListOpen(true)} fullWidth>
              Questions List
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2>Surveys: {surveys.length}</h2>
            <Button
              onClick={() => handleDownloadCSV(surveys)}
              fullWidth
              disabled={surveys.length <= 0}
            >
              Download CSV
            </Button>

            <Button onClick={() => setSurveysListOpen(true)} fullWidth>
              Surveys List
            </Button>
          </CardContent>
        </Card>
      </div>

      <QuestionsList
        open={questionsListOpen}
        onClose={() => setQuestionsListOpen(false)}
        questions={questions}
      />
      <SurveysList
        open={surveysListOpen}
        onClose={() => setSurveysListOpen(false)}
        surveys={surveys}
      />
    </PageContainer>
  );
};

export default AdminPage;
