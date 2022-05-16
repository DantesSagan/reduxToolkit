import { cakeActions } from './features/cake/cakeSlice.js';
import store from './app/store.js';

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Update state', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();
