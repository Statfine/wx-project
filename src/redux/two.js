import { createAction, handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';

/**
 * Action Types
 */
export const TWO_REQUEST = 'TWO_REQUEST';
export const TWO_SUCCESS = 'TWO_SUCCESS';
export const TWO_FAILURE = 'TWO_FAILURE';

/**
 * Action Creators
 */
// 请求 action
export const twoRequest = createAction(TWO_REQUEST);

// 操作成功
export const twoSuccess = createAction(TWO_SUCCESS, (payload) => (payload));

// 操作失败
export const twoFailure = createAction(TWO_FAILURE, (error) => ({ error }));

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  error: null,
  fetching: false,
  twoList: []
});

/**
 * Reducers
 */
export default handleActions({
  TWO_REQUEST: (state) =>
    state.merge({ fetching: true }),
  TWO_SUCCESS: (state, { payload }) =>
    state.set('error', '')
      .set('fetching', false)
      .set('twoList', payload),
  TWO_FAILURE: (state, { payload }) =>
    state.merge({ fetching: false, error: payload.error })
}, INITIAL_STATE);
