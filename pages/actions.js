const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
// Import redux.applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// Import redux-logger
const reduxLogger = require('redux-logger');
// apply redux logger with createLogger for logging data in reducer
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

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

// ordering icecreams
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

// restocking icecreams
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const reducerInitialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// pass in second agrument with apply middleware with arg logger
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());

// delete console.log() log because we are using logger
const unsubscribe = store.subscribe(() => {});

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
    orderIceCream,
    restockIceCream,
  },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

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
