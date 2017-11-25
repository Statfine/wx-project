import { createAction, handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';

/**
 * Action Types
 */
export const THREE_REQUEST = 'THREE_REQUEST';
export const THREE_SUCCESS = 'THREE_SUCCESS';
export const THREE_FAILURE = 'THREE_FAILURE';

/**
 * Action Creators
 */
// 请求 action
export const threeRequest = createAction(THREE_REQUEST, (data) => (data));

// 操作成功
export const threeSuccess = createAction(THREE_SUCCESS, (payload) => (payload));

// 操作失败
export const threeFailure = createAction(THREE_FAILURE, (error) => ({ error }));

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  error: null,
  fetching: false,
  threeList: []
});

/**
 * Reducers
 */
export default handleActions({
  THREE_REQUEST: (state) =>
    state.merge({ fetching: true }),
  THREE_SUCCESS: (state, { payload }) =>
    state.set('error', '')
      .set('fetching', false)
      .set('threeList', payload),
  THREE_FAILURE: (state, { payload }) =>
    state.merge({ fetching: false, error: payload.error })
}, INITIAL_STATE);
