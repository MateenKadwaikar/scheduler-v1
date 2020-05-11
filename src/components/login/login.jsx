import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import AuthServices from '../../redux/auth-service';
import './login.css';


const Login = ({ userLoggedInEvent }) => {
  let dispatch = useDispatch()
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useSelector((state) => {
    if (state.authReducer.success) {
      userLoggedInEvent(state.authReducer.success);
      sessionStorage.setItem("userDetail", JSON.stringify(state.authReducer));
      history.push('/event')
    }
  })

  const _userLogin = () => {
    let loginObject = {
      email,
      password
    }
    dispatch(AuthServices.userLoginService(loginObject))
  }

  return (
    <section className="section is-fullheight">
      <div className="card container column is-half is-offset-one-quarter">
        <div className="card-content">
          <p className="title has-text-centered">Login</p>
          <hr />
          <p className="subtitle has-text-centered">
            Please login to proceed
            </p>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-right">
              <input className="input"
                required
                type="text"
                placeholder="Email address"
                onChange={(e) => setEmail(e.currentTarget.value)} />
              <span className="icon is-small is-right">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-right">
              <span className="icon is-small is-right">
                <i className="fa fa-key"></i>
              </span>
              <input required className="input" type="password" placeholder="My password"
                minLength="8" onChange={(e) => setPassword(e.currentTarget.value)} />
            </div>
          </div>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <button
                  disabled={email.length === 0 || password.length === 0}
                  className="button is-info"
                  onClick={(e) => _userLogin(e)}>Login</button>
              </div>
              <div className="level-item">
                <span>or <Link to={'/signup'}>Sign up</Link></span>
              </div>
            </div>
            <div className="level-right">
              <Link to={'/reset'}>Reset Password</Link>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Login;