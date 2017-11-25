import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from '../sagas/';

import loginReducer from './login';
import userReducer from './user';
import todosReducer from './todos';
import twoReducer from './two';
import threeReducer from './three';

function createStore() {
  const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    todos: todosReducer,
    twoState: twoReducer,
    threeState: threeReducer,
  });

  return configureStore(rootReducer, rootSaga);
}

export default createStore();
