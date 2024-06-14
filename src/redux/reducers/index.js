
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  stats: statsReducer,
});

export default rootReducer;
