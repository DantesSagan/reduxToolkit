const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

// additonal payload property
// we did use this property when we ordering the cake
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

// bindActionsCreators  
// turn an object whos values actions creators into an object with the same keys
// but with every actions creator wrapped into dispatch call whey they will be involved directly
// bindActionsCreators not really necessary

const actions = bindActionCreators(
  {
    orderCake,
    restockCake,
  },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

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
