'use client';

import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';

const SurveyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  console.log(user);

  return (
    <PageContainer>
      <h1>Survey</h1>
      <p>{user?.username}</p>
    </PageContainer>
  );
};

export default SurveyPage;
