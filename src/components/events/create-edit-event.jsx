import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from "react-router-dom";
import EventServices from '../../redux/event-service';
import Header from '../header/header';
import './event.css';


const CreateEvent = ({ data }) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [eventName, setEventName] = useState('');
  const [duration, setDuration] = useState(0);
  const eventDurations = ["40mins", "30mins", "20mins", "10mins",]

  const eventDetail = useSelector((state) => match.params.id && state.eventReducer.success
    && (state.eventReducer.eventDetail))

  useEffect(() => {
    match.params.id && dispatch(EventServices.getEventTypesByIdService(match.params.id))
  }, [dispatch, match.params.id])

  const setName = (e) => {
    setEventName(e)
  }

  const _onEventSave = () => {
    let eventObj = {
      eventName,
      duration
    }
    data === "Edit" && (eventObj = Object.assign({}, eventObj, { id: match && match.params.id }));
    dispatch(EventServices.saveEventService(eventObj));
  }

  return (
    <Fragment>
      <Header />
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <div className="buttons is-left">
                  <Link to={'/event'}>
                    <button className="button">
                      <span className="icon">
                        <i className="fas fa-arrow-left"></i>
                      </span>
                      <span> Back </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="level-item">
              <p className="title">{data} Event Type </p>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="box">
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Event Name*</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Event Name"
                        value={eventDetail && eventDetail.eventName}
                        onChange={(e) => setName(e.target.value)} required />
                    </div>
                  </div>
                </div>

                <div className="column">
                  <p className="label">Event Duration</p>
                </div>

                <div className="columns">
                  {
                    eventDurations.map((event, id) => (
                      <div className="" key={id}>
                        <div className={`duration ${duration === event ? 'selected' : ''}`}
                          onClick={() => setDuration(event)}>
                          <span>{event}</span>
                        </div>
                      </div>)
                    )
                  }
                  <div className="">
                    <div className="duration">
                      <input
                        className="event-input"
                        type="text"
                        name="duration"
                        id="duration"
                        onFocus={() => setDuration(0)}
                        onChange={(e) => setDuration(e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="buttons is-right">
                    <button className="button is-outlined">
                      <Link to={'/event'}>
                        <span>
                          Cancel
                      </span>
                      </Link>
                    </button>
                    <button
                      className="button is-info is-outlined"
                      disabled={eventName.length === 0 || duration === 0}
                      onClick={() => _onEventSave()}
                    >
                      <span>
                        Save
                    </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </Fragment>
  )
}

export default CreateEvent
