import wx from 'labrador';
// import request from 'al-request';
import { create } from 'al-request';
import { put } from 'redux-saga/effects';
import * as threeActions from '../redux/three';

const request = create({ apiRoot:'https://api.tianapi.com/' });

export function* threerequestSaga(params) {
  try {
    let data = yield request.get(`tiyu/?key=c7b08bec8bf1bdfe6de3a826cab5f6b4&page=${params.payload}&num=20`);
    yield put(threeActions.threeSuccess(data.newslist));
  } catch (error) {
    yield put(threeActions.threeFailure(error));
  }
}
