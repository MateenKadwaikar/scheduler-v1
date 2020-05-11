import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthServices from '../../redux/auth-service';
import './reset.css';

const Reset = () => {
  let dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const _resetLink = () => {
    dispatch(AuthServices.resetUserPasswordService(email));
    setRequestSent(true);
  }

  return (
    <Fragment>
      <section className="section">
        <div className="card column is-half is-offset-one-quarter">
          <div className="card-content reset">
            <p className="title">
              Reset Password
            </p>
            {requestSent ?
              <>
                <article class="message is-success">
                  <div class="message-body">Your request has been sent. Please following the instructions sent to your email.</div>
                </article>
                <div class="has-text-centered">
                  <a href="/" class="button">Back to Login</a>
                </div>

              </>
              : <div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-right">
                    <input className="input" type="text" placeholder="Email address"
                      onChange={(e) => setEmail(e.currentTarget.value)} />
                    <span className="icon is-small is-right">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="column">
                  <button
                    className="button is-info is-outlined"
                    disabled={email.length === 0}
                    onClick={(e) => _resetLink()}>
                    <span>Send Reset Link</span>
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Reset;