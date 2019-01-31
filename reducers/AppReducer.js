//-------------------------------------------------------------------------------------------------
// AppReducer.js contains the SleepinessReducer for the SleepAppnea project.
//-------------------------------------------------------------------------------------------------
import { combineReducers } from 'redux';
import SleepinessReducer from './Sleepiness';

const AppReducer = combineReducers({
  SleepinessReducer
});

export default AppReducer;
