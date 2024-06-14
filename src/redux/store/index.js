
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import rootReducer from '../reducers'; // Adjust path as necessary

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
