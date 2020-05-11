import Types from './types';

const userLoginAction = (userLogin) => {
  return {
    type: Types.USER_LOGIN,
    payload: userLogin
  }
}

const userLogoutAction = () => {
  return {
    type: Types.USER_LOGOUT
  }
}

const userSignUpAction = (signUp) => {
  return {
    type: Types.USER_SIGN_UP,
    payload: signUp
  }
}

const resetUserPasswordAction = (data) => {
  return {
    type: Types.RESET_PASSWORD,
    payload: data
  }
}

const AuthActions = {
  userLoginAction,
  userLogoutAction,
  userSignUpAction,
  resetUserPasswordAction
}

export default AuthActions;