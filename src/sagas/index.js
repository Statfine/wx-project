import { takeLatest } from 'redux-saga';
import { TODO_REQUEST } from '../redux/todos';
import { TWO_REQUEST } from '../redux/two';
import { THREE_REQUEST } from '../redux/three';
import * as todoSagas from './todos';
import * as twoSagas from './two';
import * as threeSagas from './three';

// 当action触发时，执行特定saga
export default function* root() {
  yield [
    takeLatest(TODO_REQUEST, todoSagas.todorequestSaga),
    takeLatest(TWO_REQUEST, twoSagas.tworequestSaga),
    takeLatest(THREE_REQUEST, threeSagas.threerequestSaga)
  ];
}
