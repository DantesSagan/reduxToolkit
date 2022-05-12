const redux = require('redux');
const createStore = redux.createStore;;

const CAKE_ORDERED = 'CAKE_ORDERED';

 function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const reducerInitialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

// export default function Actions() {
//   const initialState = {
//     numberOfCakes: 10,
//   };

//   export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case CAKE_ORDERED:
//         return {
//           numberOfCakes: state.numberOfCakes - 1,
//         };
//       default:
//         return state;
//     }
//   };
//   return <div>Actions</div>;
// }
