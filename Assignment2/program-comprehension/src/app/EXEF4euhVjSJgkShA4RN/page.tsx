'use client';
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { addQuestion, getAllQuestions } from '../services/questionServices';
import { openNotification } from '../store/actions';
import { Question } from '../store/models/survey';
import questionsPreset from './questionsPreset';

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();

  const [test, setTest] = useState('');
  const [caseVariant, setCaseVariant] = useState('');
  const [check, setCheck] = useState('');
  const [possibilities, setPossibilities] = useState<string[]>([]);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    getAllQuestions().then((data: Question[]) => {
      setQuestions(data);
      setQuestionIndex(data.length);
    });
  }, [questionIndex]);

  const handleAddQuestion = () => {
    const shuffledPossibilities = possibilities.sort(() => Math.random() - 0.5);

    const question: Question = {
      questionIndex: questionIndex,
      timeTaken: 0,
      test: test,
      caseVariant: caseVariant,
      check: check,
      possibilities: shuffledPossibilities,
      errors: 0,
    };
    addQuestion(question)
      .then((data) => {
        setQuestionIndex(questionIndex + 1);
        dispatch(
          openNotification({ message: 'Question added', severity: 'success' })
        );
        setTest('');
        setCaseVariant('');
        setCheck('');
        setPossibilities([]);
      })
      .catch((error) => {
        dispatch(
          openNotification({
            message: 'Error adding question',
            severity: 'error',
          })
        );
      });
  };
  const handleLoadPreset = () => {
    console.log(questionsPreset);
    questionsPreset.forEach((question) => {
      addQuestion(question)
        .then((data) => {
          setQuestionIndex(question.questionIndex);
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
      <Button onClick={handleLoadPreset}>Load Preset</Button>
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
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="camelCase"
          value={caseVariant}
          row
          onChange={(e) => setCaseVariant(e.target.value)}
        >
          <FormControlLabel
            value="camelCase"
            control={<Radio />}
            label="camelCase"
          />
          <FormControlLabel
            value="snake-case"
            control={<Radio />}
            label="snake-case"
          />
        </RadioGroup>
        <TextField
          label="Check (the correct answer)"
          value={check}
          fullWidth={true}
          onChange={(e) => {
            setCheck(e.target.value);
            if (check.includes('-')) {
              setCaseVariant('snake-case');
            } else {
              setCaseVariant('camelCase');
            }
          }}
        />
        <TextField
          label="Possibilities (separated by commas ',' and must include the correct answer)"
          fullWidth={true}
          value={possibilities}
          onChange={(e) =>
            setPossibilities(e.target.value.split(',').map((s) => s.trim()))
          }
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
