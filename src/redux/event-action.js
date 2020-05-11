import Types from './types';

const getEventTypeAction = (eventType) => {
  return {
    type: Types.EVENT_TYPE,
    payload: eventType
  }
}

const getEventTypByIdAction = (eventType) => {
  return {
    type: Types.EVENT_TYPE_BY_ID,
    payload: eventType
  }
}

const saveEventAction = (event) => {
  return {
    type: Types.SAVE_EVENT,
    payload: event
  }
}

const EventActions = {
  getEventTypeAction,
  saveEventAction,
  getEventTypByIdAction
}

export default EventActions;