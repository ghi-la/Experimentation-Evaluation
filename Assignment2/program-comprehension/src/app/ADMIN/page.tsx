'use client';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import { addQuestion, getAllQuestions } from '../services/questionServices';
import { openNotification } from '../store/actions';
import { Question } from '../store/models/survey';

const AdminPage: React.FC = () => {
  const [test, setTest] = React.useState('');
  const [check, setCheck] = React.useState('');
  const [possibilities, setPossibilities] = React.useState<string[]>([]);

  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);

  useEffect(() => {
    getAllQuestions().then((data: Question[]) => {
      setQuestions(data);
      setQuestionIndex(data.length);
    });
  }, [questionIndex]);

  const handleAddQuestion = () => {
    const question: Question = {
      questionIndex: questionIndex,
      timeTaken: 0,
      test: test,
      check: check,
      possibilities: possibilities,
      answer: '',
    };
    addQuestion(question)
      .then((data) => {
        setQuestionIndex(questionIndex + 1);
        openNotification({
          message: 'Question added successfully',
          severity: 'success',
        });
      })
      .catch((error) => {
        openNotification({
          message: 'Error adding question',
          severity: 'error',
        });
      });
  };

  return (
    <PageContainer>
      <h1>Admin Panel</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddQuestion();
        }}
      >
        <TextField
          label="Test Sentence"
          fullWidth={true}
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <TextField
          label="Check (the correct answer)"
          value={check}
          fullWidth={true}
          onChange={(e) => setCheck(e.target.value)}
        />
        <TextField
          label="Possibilities (separated by commas ',')"
          fullWidth={true}
          value={possibilities}
          onChange={(e) => setPossibilities(e.target.value.split(','))}
        />

        <Button type="submit">Add Question</Button>
      </form>
      <hr />

      <h2>Questions List</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Question Index</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Check</TableCell>
              <TableCell>Possibilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question, i) => (
              <TableRow key={i}>
                <TableCell>{question.questionIndex}</TableCell>
                <TableCell>{question.test}</TableCell>
                <TableCell>{question.check}</TableCell>
                <TableCell>{question.possibilities.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default AdminPage;
