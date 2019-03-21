//-------------------------------------------------------------------------------------------------
// The Sleepiness Reducer that sets an initial state and chooses actions that update the payload.
//-------------------------------------------------------------------------------------------------
import {
  ACTION_LOG_SLEEP,
  ACTION_LOG_SLEEPINESS,
  ACTION_LOG_PROFILE
} from '../actions/index';

/* holds the initial state */
const initialState = {
  profileData: {
    firstName: 'Carol',
    lastName: 'Danvers',
    age: 30,
    sex: 'Female',
    weight: 135,
    height: 5.8,
    medicalConditions: []
  },
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
  /* switch between actions */
  switch (action.type) {
    /* handles logging sleep dates/times */
    case ACTION_LOG_SLEEP:
      console.log('\nlogging sleep.\n');
      const { sleepData } = state;
      sleepData.push(action.payload);
      return { ...state, sleepData };

    /* handles logging sleepiness levels and days sleepiness was recorded */
    case ACTION_LOG_SLEEPINESS:
      console.log('\nlogging sleepiness.\n');
      const { sleepinessData } = state;
      sleepinessData.push(action.payload);

      const { sleepinessDayCount } = state;
      sleepinessDayCount[action.payload.sleepinessDay] += 1;

      return { ...state, sleepinessData, sleepinessDayCount };

    /* handles logging profile information */
    case ACTION_LOG_PROFILE:
      console.log('\nlogging profile.\n');
      const { profileData } = state;
      profileData.push(action.payload);
      return { ...state, profileData };

    default:
      return state;
  }
};

export default Sleepiness;
