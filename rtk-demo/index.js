import { orderedCake, restockedCake } from './features/cake/cakeSlice.js';
import {
  orderedIceCream,
  restockedIceCream,
} from './features/icecream/iceCreamSlice.js';

import { store } from './app/store.js';

import pkg from '@reduxjs/toolkit';

const { bindActionCreators } = pkg;

console.log('Initial state', store.getState());

// without logger
const unsubscribe = store.subscribe(() => {
  console.log('Update state', store.getState());
});

// with logger
// const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  {
    orderedCake,
    restockedCake,
    orderedIceCream,
    restockedIceCream,
  },
  store.dispatch
);

actions.orderedCake();
actions.orderedCake();
actions.orderedCake();
actions.restockedCake(3);

actions.orderedIceCream();
actions.orderedIceCream();
actions.orderedIceCream();
actions.restockedIceCream(3);

unsubscribe();

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));
