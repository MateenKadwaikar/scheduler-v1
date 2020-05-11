import Types from './types';

const intitialState = {
  email: '',
  userName: '',
  success: false,
  url: ''
}

export const authReducer = (state = intitialState, action) => {
  switch (action.type) {
    case Types.USER_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.userName,
        success: action.payload.success,
        url: action.payload.url
      }
    case Types.USER_SIGN_UP: {
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.userName,
        success: action.payload.success,
        url: action.payload.url
      }
    }
    case Types.RESET_PASSWORD: {
      return {
        ...state,
        success: action.payload.success
      }
    }
    case Types.USER_LOGOUT: {
      return state = intitialState;
    }
    default:
      return state;
  }
}