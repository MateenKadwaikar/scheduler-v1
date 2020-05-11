import Types from './types';

const initialState = {
  success: false,
  eventDetails: [],
  eventDetail: {}
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.EVENT_TYPE:
      return {
        ...state,
        success: action.payload.success,
        eventDetails: action.payload.eventDetails
      }
    case Types.SAVE_EVENT:
      return {
        ...state,
        success: action.payload.success
      }
    case Types.EVENT_TYPE_BY_ID: {
      return {
        ...state,
        success: action.payload.success,
        eventDetail: action.payload.eventDetail
      }
    }
    default:
      return state
  }
}
