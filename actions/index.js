//-------------------------------------------------------------------------------------------------
// Index.js contains functions called to update the payload.
//-------------------------------------------------------------------------------------------------
export const ACTION_LOG_SLEEP = 'ACTION_LOG_SLEEP';
export const ACTION_LOG_SLEEPINESS = 'ACTION_LOG_SLEEPINESS';

export function addLogSleep(sleep) {
  return {
    type: ACTION_LOG_SLEEP,
    payload: sleep
  };
}

export function addLogSleepiness(sleepiness) {
  return {
    type: ACTION_LOG_SLEEPINESS,
    payload: sleepiness
  };
}
