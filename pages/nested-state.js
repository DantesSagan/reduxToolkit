const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
  name: 'Dantes',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
};

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // without immer with just destructure
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      //   immer simplificed handling immutable data structures and works very well
      // with redux like just get response like an a JSON object
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log('Initial state', store.getState());

const unsubcribe = store.subscribe(() => {
  console.log('Update state', store.getState());
});

store.dispatch(updateStreet('456 Main St'));
unsubcribe();
