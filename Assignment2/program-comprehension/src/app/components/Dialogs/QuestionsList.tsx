import { Question } from '@/app/store/models/survey';
import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const QuestionsList = ({
  open,
  onClose,
  questions,
}: {
  open: boolean;
  onClose: () => void;
  questions: Question[];
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
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
    </Dialog>
  );
};

export default QuestionsList;
