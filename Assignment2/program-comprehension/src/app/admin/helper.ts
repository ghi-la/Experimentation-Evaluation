import { Survey } from '../store/models/survey';

const handleDownloadCSV = (surveys: Survey[]) => {
  let csvContent = '';

  // Define the CSV header
  let csvHeader =
    'Timer, QuestionIndex, TimeTaken, Test, CaseVariant, Errors, WordCount, AgeRange, CodingFrequency, ProgrammingLanguagesCount\n';
  csvContent += csvHeader;

  surveys.forEach((survey) => {
    survey.surveyQuestions.questions.forEach((question) => {
      const wordCount = question.test.split(' ').length; // Count the number of words in the Test
      const csvRow = [
        survey.user.ageRange, // User age range
        survey.user.codingFrequency, // User coding frequency
        survey.user.programmingLanguages.length, // Number of programming languages known by the user
        survey.timer, // Total survey time
        question.questionIndex, // Question index
        question.timeTaken, // Time taken for the question
        question.test, // Test name
        question.caseVariant, // Case variant
        question.errors, // Number of errors
        wordCount, // Number of words in the Test
      ].join(', ');
      csvContent += csvRow + '\n';
    });
  });

  // Create and download the CSV file
  const csvFile = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(csvFile);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'survey-results.csv';
  a.click();
};

export { handleDownloadCSV };
