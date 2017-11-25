import wx from 'labrador';
// import request from 'al-request';
import { create } from 'al-request';
import { put } from 'redux-saga/effects';
import * as twoActions from '../redux/two';

const request = create({ apiRoot:'https://news-at.zhihu.com' });

export function* tworequestSaga(params) {
  try {
    // 在这里写异步操作代码
    let data = yield request.get('/api/3/news/hot');
    // 将异步操作结果更新至Redux
    yield put(twoActions.twoSuccess(data.recent));
  } catch (error) {
    wx.showToast({ title: '请求失败' });
    yield put(twoActions.twoFailure(error));
  }
}
