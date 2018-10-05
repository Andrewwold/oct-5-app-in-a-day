import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import state from './reducers';
import message from './reducers';

const rootReducer = combineReducers({
  form,
  message
});

export default rootReducer;