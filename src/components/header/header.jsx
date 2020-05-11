import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthServices from '../../redux/auth-service';

const Header = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const userName = JSON.parse(sessionStorage.getItem("userDetail")) &&
      JSON.parse(sessionStorage.getItem("userDetail")).userName;
    setUserName(userName);
  }, [])

  const _onLogOut = () => {
    sessionStorage.removeItem('userDetail');
    dispatch(AuthServices.logoutUser());
    history.push('/');
  }


  return (
    <section>
      <nav className="navbar is-fixed-top" role="navigation" >
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-32x32 ">
                      <img alt="" className="is-rounded" src="https://randomuser.me/api/portraits/men/11.jpg" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>
                          {userName}
                        </strong>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="navbar-dropdown">
                <div className="navbar-item" onClick={() => _onLogOut()}>
                  Log Out
                 </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
