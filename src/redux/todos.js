import { createAction, handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';

export const TODO_REQUEST = 'TODO_REQUEST';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAILURE = 'TODO_FAILURE';

// 初始state
export const INITIAL_STATE = immutable([]);

// 请求 action
export const todoRequest = createAction(TODO_REQUEST, (data) => (data));
// 操作成功
export const todoSuccess = createAction(TODO_SUCCESS, (data) => (data));
// 操作失败
export const todoFailure = createAction(TODO_FAILURE, (error) => ({ error }));

// 默认导出reducer
export default handleActions({
  [TODO_SUCCESS]: (state, { payload }) =>
    immutable(payload),
}, INITIAL_STATE);
