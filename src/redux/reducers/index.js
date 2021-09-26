import { combineReducers } from 'redux';
// initialState
import initialState from 'src/redux/initialState';

// Import Reducers
import calendarReducer from 'reducers/calendarReducer';
// export State
export default combineReducers({
  calendar: calendarReducer(initialState.calendarPage)
});