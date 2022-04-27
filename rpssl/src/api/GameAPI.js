import axios from 'axios';

const api = 'https://codechallenge.boohma.com';

export const getAllChoices = () =>
  axios.get(`${api}/choices`).then((response) => response);

export const getRandomChoice = () =>
  axios.get(`${api}/choice`).then((response) => response);

export const playRound = (data) =>
  axios
    .post(`${api}/play`, data)
    .then((response) => {
      if (response.statusText === 'OK') {
        return response;
      }
      throw new Error('Something went wrong ...');
    })
    .catch((error) => error);
