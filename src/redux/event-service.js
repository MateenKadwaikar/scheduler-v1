import axios from 'axios';
import EventActions from './event-action';
import url from './serviceurl';

const saveEventService = ({ eventName, duration, id }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}`, {
        eventName,
        duration,
        id
      })
      dispatch(EventActions.saveEventAction(response.data))
    } catch (error) {
    }
  }
}

const getEventTypesService = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}5eb551b4310000690069949a`)
      dispatch(EventActions.getEventTypeAction(response.data))
    } catch (error) {
    }
  }
}
const getEventTypesByIdService = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}${id}`)
      dispatch(EventActions.getEventTypByIdAction(response.data))
    } catch (error) {
    }
  }
}

const EventServices = {
  getEventTypesService,
  saveEventService,
  getEventTypesByIdService,
}

export default EventServices;