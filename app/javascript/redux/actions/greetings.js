import axios from 'axios';

export const GET_RANDOM_GREETING = 'GET_RANDOM_GREETING';

export const getRandomGreeting = () => async (dispatch) => {
  const response = await axios.get('/api/messages/random_greeting');
  dispatch({ type: GET_RANDOM_GREETING, payload: response.data.greeting });
};
