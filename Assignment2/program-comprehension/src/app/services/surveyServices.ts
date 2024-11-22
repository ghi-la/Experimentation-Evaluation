import axios from 'axios';
import { Survey } from '../store/models/survey';

const API_URL = '/api/surveys';

export const getAllSurveys = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const addSurvey = async (question: Survey) => {
  try {
    const response = await axios.post(API_URL, question);
    return response.data;
  } catch (error) {
    console.error('Error adding question:', error);
    throw error;
  }
};
