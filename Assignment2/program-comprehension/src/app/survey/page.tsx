'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import Question from '../components/Question';
import { endSurvey } from '../store/actions';
import { Survey } from '../store/models/survey';
import { User } from '../store/models/user';
import SurveyInformations from './informations';
import SurveyThanks from './thanks';

const SurveyPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user: User = useSelector((state: any) => state.user);
  const survey: Survey = useSelector((state: any) => state.survey);

  useEffect(() => {
    if (
      survey.surveyQuestions.currentQuestionIndex != 0 &&
      survey.surveyQuestions.currentQuestionIndex >=
        survey.surveyQuestions.questions.length
    ) {
      dispatch(endSurvey());
    }
  }, [
    survey.surveyQuestions.currentQuestionIndex,
    survey.surveyQuestions.questions.length,
  ]);

  return (
    <PageContainer>
      {survey.isSurveyStarted ? (
        !survey.isSurveyCompleted ? (
          <Question
            index={
              survey.surveyQuestions.questions[
                survey.surveyQuestions.currentQuestionIndex
              ]?.questionIndex
            }
            test={
              survey.surveyQuestions.questions[
                survey.surveyQuestions.currentQuestionIndex
              ]?.test
            }
            check={
              survey.surveyQuestions.questions[
                survey.surveyQuestions.currentQuestionIndex
              ]?.check
            }
            possibilities={
              survey.surveyQuestions.questions[
                survey.surveyQuestions.currentQuestionIndex
              ]?.possibilities
            }
          />
        ) : (
          <SurveyThanks />
        )
      ) : (
        <SurveyInformations />
      )}
    </PageContainer>
  );
};

export default SurveyPage;
