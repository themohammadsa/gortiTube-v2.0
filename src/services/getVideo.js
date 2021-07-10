import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortitube.themohammadsa.repl.co/videos';

export const getAllVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/videolibrary`);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const getVideo = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/watch/${id}`);
    return response;
  } catch (error) {
    return errorHandler(error);
  }
};
