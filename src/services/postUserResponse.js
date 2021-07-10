import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortitube.themohammadsa.repl.co/user';

export const postUserResponse = async (
  videoId,
  category,
  command,
  playlistName
) => {
  try {
    const response = await axios.post(`${API_URL}/${category}/${command}`, {
      videoId,
      playlistName
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
