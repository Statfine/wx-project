import wx from 'labrador';
// import request from 'al-request';
import { create } from 'al-request';
import { put } from 'redux-saga/effects';
import * as todoActions from '../redux/todos';

//https://www.tianapi.com

// const request = create({ apiRoot:'https://v.juhe.cn/weixin' });
const request = create({ apiRoot:'https://api.tianapi.com/' });

export function* todorequestSaga(params) {
  try {
    // 在这里写异步操作代码
    // let data = yield request.post(`/query?pno=${params.payload}&ps=&dtype=&key=c1582ad068fd00b2fa6bd18ea5f5b1dd`);
    let data = yield request.get(`wxnew/?key=c7b08bec8bf1bdfe6de3a826cab5f6b4&page=${params.payload}&num=20`);
    // 将异步操作结果更新至Redux
    yield put(todoActions.todoSuccess(data.newslist));
  } catch (error) {
    wx.showToast({ title: '请求失败' });
    yield put(todoActions.todoFailure(error));
  }
}

