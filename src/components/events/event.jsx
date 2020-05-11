import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import EventServices from '../../redux/event-service';
import Main from '../main/main';
import './event.css';


const Events = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const [url, setLink] = useState('');

  const eventDetails = useSelector((state) => state.eventReducer.success && state.eventReducer.eventDetails);

  useEffect(() => {
    getEventType();
    const urlLink = JSON.parse(sessionStorage.getItem("userDetail")) && JSON.parse(sessionStorage.getItem("userDetail")).url
    setLink(urlLink)
  }, [])

  const getEventType = () => {
    dispatch(EventServices.getEventTypesService())
  }

  const _createNewEvent = () => {
    history.push(`/createevent`);
  }

  return (
    <Fragment>
      <Main />
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p>
                  <strong>My Link</strong>
                </p>
                <div className="column">
                  <a href={url}>{url}</a>
                </div>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button className="button is-outlined"
                  onClick={() => _createNewEvent()}>
                  <span className="icon">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span>New Event Type</span>
                </button>
              </div>
            </div>
          </div>

          <div className="columns">
            {eventDetails && eventDetails.map((event, id) => (
              <div className="column" key={id}>
                <div className="card card-styles">
                  <div className="card-content is-centered">
                    <div className="content is-center ">
                      {event.eventName}
                      <div className="">
                        {event.eventDuration}
                      </div>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <Link to={`/event/${id}`}>Edit</Link>
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </Fragment>
  )
}

export default Events
