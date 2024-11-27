'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import QuestionComponent from '../components/QuestionComponent';
import { addSurvey } from '../services/surveyServices';
import { endSurvey, openNotification } from '../store/actions';
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

  useEffect(() => {
    if (!user.name) {
      dispatch(
        openNotification({
          message: 'Please fill in the form first',
          severity: 'warning',
        })
      );
      router.push('/form');
    }
  }, [user.name, dispatch, router]);

  useEffect(() => {
    console.log(survey);
    if (survey.isSurveyCompleted) {
      addSurvey(survey).then((data) => {
        console.log(data);
      });
    }
  }, [survey.isSurveyCompleted, survey]);

  return (
    <PageContainer>
      {survey.isSurveyStarted ? (
        !survey.isSurveyCompleted ? (
          <QuestionComponent
            question={
              survey.surveyQuestions.questions[
                survey.surveyQuestions.currentQuestionIndex
              ]
            }
            // index={
            //   survey.surveyQuestions.questions[
            //     survey.surveyQuestions.currentQuestionIndex
            //   ]?.questionIndex
            // }
            // test={
            //   survey.surveyQuestions.questions[
            //     survey.surveyQuestions.currentQuestionIndex
            //   ]?.test
            // }
            // possibilities={
            //   survey.surveyQuestions.questions[
            //     survey.surveyQuestions.currentQuestionIndex
            //   ]?.possibilities
            // }
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
