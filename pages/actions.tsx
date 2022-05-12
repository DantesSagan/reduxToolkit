
const CAKE_ORDERED = 'CAKE_ORDERED';

export function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const reducerInitialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (state = reducerInitialState, action: { type: string }) => {
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

export default reducer;
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
