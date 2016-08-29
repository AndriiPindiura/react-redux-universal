import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import bemy from './modules/bemy';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  bemy,
});
