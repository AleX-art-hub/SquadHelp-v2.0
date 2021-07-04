import AUTH_ACTION_TYPES from './authActionTypes';

export const loginRequest = (values) => ({
  type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
  payload: {
    values,
  },
});

export const refreshAuthRequest = (values) => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST,
  payload: {
    values,
  },
});

export const signUpRequest = (values) => ({
  type: AUTH_ACTION_TYPES.SIGNUP_REQUEST,
  payload: {
    values,
  },
});

export const authRequest = () => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST,
});

export const authRequestSuccess = (values) => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const authRequestFailed = (err) => ({
  type: AUTH_ACTION_TYPES.AUTH_REQUEST_FAILED,
  payload: {
    error: err,
  },
});