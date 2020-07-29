import { SET_LOADING, LOGIN_SUCCESS } from '../../types';

export const setLoading = (param) => async dispatch => dispatch({ type: SET_LOADING, payload: param });

