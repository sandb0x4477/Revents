import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  COUNTER_ACTION_FINISHED,
  COUNTER_ACTION_STARTED
} from './testConstants';

import firebase from '../../app/config/firebase'

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  };
};

export const finishCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
  return async dispach => {
    dispach(startCounterAction());
    await delay(1000);
    dispach({ type: INCREMENT_COUNTER });
    dispach(finishCounterAction());
  };
};

export const decrementAsync = () => {
  return async dispach => {
    dispach(startCounterAction());
    await delay(1000);
    dispach({ type: DECREMENT_COUNTER });
    dispach(finishCounterAction());
  };
};

export const testPermissions = () =>
  async (dispatch, getState) => {
    const firestore = firebase.firestore();
    try {
      let userDocRef = await firestore.collection('users').doc('D19dMlY3mRe7Qbc5m6UN1ct7mS62')
      userDocRef.update({
        displayName: 'testing'
      })
    } catch (err) {
      console.log(err)
    }
  }
