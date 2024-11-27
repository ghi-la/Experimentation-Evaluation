'use client';
import { Button, Card, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import QuestionsList from '../components/Dialogs/QuestionsList';
import SurveysList from '../components/Dialogs/SurveysList';
import PageContainer from '../components/PageContainer';
import { addQuestion, getAllQuestions } from '../services/questionServices';
import { getAllSurveys } from '../services/surveyServices';
import { openNotification } from '../store/actions';
import { Question, Survey } from '../store/models/survey';
import questionsPreset from './questionsPreset';

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);

  const [questionsListOpen, setQuestionsListOpen] = useState(false);
  const [surveysListOpen, setSurveysListOpen] = useState(false);

  useEffect(() => {
    getAllQuestions().then((data: Question[]) => {
      setQuestions(data);
    });
    getAllSurveys().then((data) => {
      setSurveys(data);
    });
  }, []);

  const handleLoadPreset = () => {
    questionsPreset.forEach((question) => {
      addQuestion(question)
        .then((data) => {
          // setQuestionIndex(question.questionIndex);
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
  const handleDownloadCSV = () => {
    let csvContent = '';
    let csvHeader =
      'Username, AgeRange, CodingFrequency, NumberKnownLanguage, SurveyTotalTime,';
    questions.forEach((question) => {
      csvHeader += `Question${question.questionIndex + 1}Length, `;
      csvHeader += `Question${question.questionIndex + 1}CaseVariant, `;
      csvHeader += `Question${question.questionIndex + 1}Errors, `;
      csvHeader += `Question${question.questionIndex + 1}TimeTaken, `;
    });
    csvHeader += '\n';
    csvContent += csvHeader;
    surveys.forEach((survey: Survey) => {
      let csvRow = `${survey.user.name}, ${survey.user.ageRange}, ${survey.user.codingFrequency}, ${survey.user.programmingLanguages.length}, ${survey.timer}, `;
      survey.surveyQuestions.questions.forEach((question: Question) => {
        csvRow += `${Math.max(
          question.test.split('-').length,
          question.test.split(/(?=[A-Z])/).length
        )}, `;
        csvRow += `${question.caseVariant}, `;
        csvRow += `${question.errors}, `;
        csvRow += `${question.timeTaken}, `;
      });
      csvRow += '\n';
      csvContent += csvRow;
    });
    // create a csv file and download it
    const csvFile = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(csvFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'survey-results.csv';
    a.click();
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
              onClick={handleDownloadCSV}
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
