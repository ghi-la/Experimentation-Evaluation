import axios from 'axios';
import { Question } from '../store/models/survey';

const API_URL = '/api/questions';

export const getAllQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const addQuestion = async (question: Question) => {
  try {
    const response = await axios.post(API_URL, question);
    return response.data;
  } catch (error) {
    console.error('Error adding question:', error);
    throw error;
  }
};
