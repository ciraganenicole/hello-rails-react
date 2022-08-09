import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetingReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;