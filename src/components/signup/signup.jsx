import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import AuthServices from '../../redux/auth-service';
import './signup.css';

const SignUp = () => {
  let dispatch = useDispatch()
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useSelector((state) => {
    if (state.authReducer.success) {
      history.push('/event')
    }
  })

  const _userSignUp = () => {
    let signUpObject = {
      email,
      password,
      confirmPassword,
      fullName
    };
    dispatch(AuthServices.userLoginService(signUpObject));
  }

  return (
    <section className="section">
      <div className="card column is-half is-offset-one-quarter">
        <div className="card-content">
          <p className="title has-text-centered"> Sign up </p>
          <hr />
          <div className="field">
            <label className="label">Enter your email to get started</label>
            <div className="control has-icons-right">
              <input className="input" type="email" placeholder="Email address"
                onChange={(e) => setEmail(e.currentTarget.value)} />
              <span className="icon is-small is-right">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Enter your full name</label>
            <div className="control has-icons-right">
              <span className="icon is-small is-right">
                <i className="fa fa-user"></i>
              </span>
              <input className="input" type="text" placeholder="John Doe"
                onChange={(e) => setFullName(e.currentTarget.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Choose a password with at least 8 characters</label>
            <div className="control has-icons-right">
              <span className="icon is-small is-right">
                <i className="fa fa-key"></i>
              </span>
              <input className="input" type="password" placeholder="My password"
                minLength="8" onChange={(e) => setPassword(e.currentTarget.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-right">
              <span className="icon is-small is-right">
                <i className="fa fa-key"></i>
              </span>
              <input className="input" type="pasword" placeholder="My password"
                minLength="8" onChange={(e) => setconfirmPassword(e.currentTarget.value)} />
            </div>
          </div>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <button
                  disabled={email.length === 0 || password.length === 0}
                  className="button is-info"
                  onClick={(e) => _userSignUp(e)}>Login</button>
              </div>
              <div className="level-item">
                <span>or <Link to={'/'}>Login instead</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;