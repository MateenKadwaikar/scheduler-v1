import React, { Fragment } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import Header from '../header/header';
import './main.css';


const Mainpage = () => {
  let match = useRouteMatch();

  return (
    <Fragment>
      <Header />
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <div className="has-dropdown">
                <span className="subtitle is-4 pd-left-5px">
                  <strong> My Schedule </strong>
                </span>
                <br></br>
                <div className="">
                  <div className="tabs is-medium">
                    <ul>
                      <li className={match.path === "/event" ? 'is-active' : ''}>
                        <Link to='/event'>
                          Events
                        </Link>
                      </li>
                      <li className={match.path === "/schedule" ? 'is-active' : ''}>
                        <Link to='/schedule'>
                          Schedule Type
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Mainpage
