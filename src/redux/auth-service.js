import axios from 'axios';
import AuthActions from './auth-action';
const url = `http://www.mocky.io/v2/`;

const userLoginService = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}5eb56faf31000079006995c2`);
      dispatch(AuthActions.userLoginAction(response.data));
    } catch{
      console.log("Error")
    }
  }
}

const userSignUpService = ({ email, password, confirmPassword, fullName }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}`, {
        fullName,
        confirmPassword,
        password,
        email
      });
      dispatch(AuthActions.userLoginAction(response.data));
    } catch{
      console.log("Error")
    }
  }
}

const resetUserPasswordService = ({ email }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}`, {
        email
      })
      dispatch(AuthActions.getEventTypeAction(response.data))
    } catch (error) {
    }
  }
}

const logoutUser = () => dispatch => dispatch(AuthActions.userLogoutAction());

const AuthServices = {
  userLoginService,
  userSignUpService,
  resetUserPasswordService,
  logoutUser
}

export default AuthServices;