import {combineReducers} from 'redux';
import Joke from './joke';

export const homeReducer = combineReducers({
    joke: Joke,
});