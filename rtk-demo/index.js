import { orderedCake, restockedCake } from './features/cake/cakeSlice.js';
import {
  orderedIceCream,
  restockedIceCream,
} from './features/icecream/iceCreamSlice.js';
import { fetchUsers } from './features/user/userSlice.js';

import { store } from './app/store.js';

import pkg from '@reduxjs/toolkit';

const { bindActionCreators } = pkg;

// START INITIAL STATE
console.log('Initial state', store.getState());

// without logger

const unsubscribe = store.subscribe(() => {
  console.log('Update state', store.getState());
});

// with logger
// const unsubscribe = store.subscribe(() => {});

const initStateCake = store.getState().cake.numOfCakes;
const initStateIceCream = store.getState().iceCream.numOfIceCreams;

const actions = bindActionCreators(
  {
    orderedCake,
    restockedCake,
    orderedIceCream,
    restockedIceCream,
  },
  store.dispatch
);

store.dispatch(fetchUsers());

// // actions to ordered some cakes
// actions.orderedCake();
// actions.orderedCake();
// actions.orderedCake();
// actions.orderedCake();

// // get state (number) after ordered some cake's
// // and calc diff of cake's that doesn't have
// // in another word just take diff state to restocked Cake's
// const initStateCakeAfter = store.getState().cake.numOfCakes;
// if (initStateCake > initStateCakeAfter) {
//   const diffCake = initStateCake - initStateCakeAfter;
//   actions.restockedCake(diffCake);
// }

// // actions to ordered some icecream's
// actions.orderedIceCream();
// actions.orderedIceCream();
// actions.orderedIceCream();
// actions.orderedIceCream();

// // get state (number) after ordered some icecream's
// // and calc diff of cake's that doesn't have
// // in another word just take diff state to restocked iceream's
// const initStateTwoIceCream = store.getState().iceCream.numOfIceCreams;
// if (initStateIceCream > initStateTwoIceCream) {
//   const diffIceCream = initStateIceCream - initStateTwoIceCream;
//   actions.restockedIceCream(diffIceCream);
// }

// unsubscribe();
// //
// const array = [];

// array.push(store.getState());

// const lastElementInArray = array[array.length - 1];
// console.log('Final state', lastElementInArray);



// for using separately without bindActionCreators
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));
