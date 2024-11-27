import { Survey } from '@/app/store/models/survey';
import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const SurveysList = ({
  open,
  onClose,
  surveys,
}: {
  open: boolean;
  onClose: () => void;
  surveys: Survey[];
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <h2>Surveys List</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Timer</TableCell>
              <TableCell>Total Errors</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveys.map((survey, i) => (
              <TableRow key={i}>
                <TableCell>
                  {survey.user.name} {survey.user.surname}
                </TableCell>
                <TableCell>{survey.timer}</TableCell>
                <TableCell>
                  {survey.surveyQuestions.questions.reduce(
                    (acc, q) => acc + q.errors,
                    0
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};

export default SurveysList;
