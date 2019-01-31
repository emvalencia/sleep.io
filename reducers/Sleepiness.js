//-------------------------------------------------------------------------------------------------
// The Sleepiness Reducer that sets an initial state and chooses actions that update the payload.
//-------------------------------------------------------------------------------------------------
import { ACTION_LOG_SLEEP, ACTION_LOG_SLEEPINESS } from '../actions/index';

const initialState = {
  sleepData: [],
  sleepinessData: [],
  sleepinessDayCount: {
    mon: 0,
    tues: 0,
    wed: 0,
    thurs: 0,
    fri: 0,
    sat: 0,
    sun: 0
  }
};

const Sleepiness = (state = initialState, action) => {
  console.log('IN SLEEPINESS REDUCER');

  switch (action.type) {
    case ACTION_LOG_SLEEP:
      console.log('\nlogging sleep.\n');

      const { sleepData } = state;
      sleepData.push(action.payload);
      return { ...state, sleepData };

    case ACTION_LOG_SLEEPINESS:
      const { sleepinessData } = state;
      sleepinessData.push(action.payload);

      const { sleepinessDayCount } = state;
      sleepinessDayCount[action.payload.sleepinessDay] += 1;

      return { ...state, sleepinessData, sleepinessDayCount };

    default:
      return state;
  }
};

export default Sleepiness;
