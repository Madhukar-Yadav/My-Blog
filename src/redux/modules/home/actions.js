import {GET_A_JOKE_REQUEST, GET_A_JOKE_SUCCESS, GET_A_JOKE_ERROR, CLEAR_A_JOKE} from './constants';

export const requestJoke = () => ({
  type: GET_A_JOKE_REQUEST,
});

export const recieveJoke = (json) => ({
  type: GET_A_JOKE_SUCCESS,
  payload: json,
});

export const requestJokeError = err => ({
  type: GET_A_JOKE_ERROR,
  err,
});

export const clearJoke = () => ({
  type: CLEAR_A_JOKE,
});
  