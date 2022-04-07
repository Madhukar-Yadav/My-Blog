import {combineReducers} from 'redux';
import {homeReducer} from 'redux/modules/home/reducers';

// All modules base reducers should connect here
const defaultReducer = combineReducers({
  home: homeReducer,
});

export default defaultReducer;
