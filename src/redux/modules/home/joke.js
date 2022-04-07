/* eslint-disable import/no-anonymous-default-export */
import {API} from 'config';
import * as TYPES from './constants';
import {
  requestJoke,
  recieveJoke,
  requestJokeError
} from './actions';
import {Services} from 'core/Services';

const services = new Services();

const initialState = {request: false};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_A_JOKE_REQUEST:
      return {
        ...state,
        request: true,
        error: false,
      };
    case TYPES.GET_A_JOKE_SUCCESS:
      return {
        ...state,
        request: false,
        error: false,
        data: action.payload,
      };
    case TYPES.CLEAR_A_JOKE:
      return {
        request: false,
        error: false,
      };
    case TYPES.GET_A_JOKE_ERROR:
      return {
        ...state,
        request: false,
        error: true,
      };
    default:
      return state;
  }
};

export const fetchAJoke = () => (
  dispatch,
  getState,
) => {
  dispatch(requestJoke());
  try {
    let endPoint = API.jokeApi;
    return services.fetchRecords(endPoint, null, true).then(res => {
      if (res) {
        dispatch(recieveJoke(res?.joke));
        return;
      }
      dispatch(requestJokeError(res));
    });
  } catch (err) {
    console.log(err);
    dispatch(requestJokeError(err));
  }
};
