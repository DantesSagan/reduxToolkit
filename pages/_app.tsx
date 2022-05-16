import type { AppProps } from 'next/app';
import { useState } from 'react';

import Navbar from './navbar';
import NavbarIndexTop from '../component/MUInavbar';

import '../styles/globals.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarIndexTop checked={checked} setChecked={setChecked} />
      <Component checked={checked} setChecked={setChecked} {...pageProps} />
    </div>
  );
}
// Redux Toolkit Tutorial - 1 - Intro feat. React
// Redux is a predictable state container for javascript apps
// It is for JavaScript apps
// It is a state container
// It is predictable

// Redux is for JavaScript applications
// Redux is not tied to React
// Can be used with React, Angular, Vue, or even vanilla JavaScript
// Redux is a library for JS

// Redux is a state container
// Redux stores the state of your application
// Consider a React app - state of a component
// Redux will store and manage the application state
// LoginFormComponent
// state = {username: '', password: '', submitting: false}
// UserListComponent state = { user: []}
// Application state = {isUserLoggedIn: true, username: 'Vishwas', profileUrl: '', onlineUsers:[]}

// Redux is predictable
// Predictable in what way?
// Redux is a state container
// The state of the application can change
// Ex: todo list app - item (pending) => item (completed)
// In redux, a pattern is enforced to ensure all state transitions are explicit and can be tracked
// The changes to your application's state become predictable

// What is Redux?
// "Redux is a predictable state container for JavaScript apps"

// Why Redux?
// If you want to manage the global stae of you application in a predictable way, redux can help you
// The patterns and tools provided by Redux make it easier to understand when, where
// why, and how the state in your application is bein updated, and how your application logic will behave when those changes occur

// Redux guides you towards writing code that is predictable and testable, which helps hive you confidence that you application will work as expected

// What is Redux Toolkit?
// Redux toolkit is the official, opinionated, batteries-inculded toolset for efficient Redux development
// It is also intended to be the standard way to write Redux logic in your application

// Why Redux Toolkit?
// Redux is great, but it does have a few shortcomings
// 1 Configuring redux in an app seems complicated
// 2 In addition to redux, a lot of other packages have to be installed to get redux to do something useful
// 3 Redux requies to much boilerplate code
// Redux toolkit serves as an abstraction over redux. It hidex the difficult parts ensuring you have good developer exp.

// Redux Toolkit featuring React
// Redux or Redux toolkit don't need a UI library to work
// RTK + REACT

// React-redux
// React
// => React-redux <=
// Redux (Redux - toolkit)

// Summary
// React is a library to build user interfaces
// Redux is a library for managing state is a predictable way in JavaScript applications
// Reudx toolkit is a library for efficient redux development
// React-redux is a library that provides bindings to use React and Redux (Toolkit)
// together in a application

// Few points before we proceed
// "When should I use redux in my react application"
// You have large amounts of application state that are needed in many places in the app
// The app state is updated frequently over time
// The logic to update that state may be complex
// The app has a medium or large-sized codebase, and might be worked on by many people
// Redux has a learning curve
// Course structure
// Learn redux first
// Learn redux toolkit second
// Leran React Redux third

// Redux Toolkit Tutorial - 3 - Three Core Concepts

// Cake shop
// Entities
// Ship - stories cakes on a shelf
// Sholkeeper - Behind the counter
// Customer - at the store entrance

// Activities
// Customer - order a cake
// Shopkeeper - Box a cake from the shelf - Receipt to keep track

// A store that holds the state of you application
// An action that describes what happened in the application
// A reducer which handles the action and decides how to update the state

// Redux Toolkit Tutorial - 4 - Three Principles

// First principle
// The global state of your application is stored as an object inside a single store
// Maintain our application state in a single object which would be managed by the Redux store

// Cake Shop -
// Let's assume we are tracking the number of cakes on the shelf
// {
//   numberOfCakes: 10
// }

// Second principle
// The only way to change the state is to dispatch an action, an object that describes what happened
// To update the state of your app, you need to let Redux know about that with an action
// Not allowed to directly update the state object

// Cake shop
// Scan the QR code and place an order - CAKE_ORDERED
// {
//   type: `CAKE_ORDERED`;
// }

// Third principle
// "To specify how the state tree is updated based on actions, you write pure reducers"
// Reducer - (previousState, action) => newState
// Cake Shop
// Reducer is the shopkeeper

// const initialState = {
//   numberOfCakes: 10,
//   CAKE_ORDERED: `CAKE_ORDERED`,
// };

// export const reducer = (state = initialState, action: { type: number }) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

// Redux Store(state) => JavaScript App => Action => Reducer => Redux Store(state)

// Redux Toolkit Tutorial - 5 - Actions
// Actions
// The only way your application can interact with the store
// Carry some information from your app to the redux store
// Plain JavaScript objects
// Have a "type" property that describes something that happened in the application.
// The 'type' property is typically defined as string constants

// Redux Toolkit Tutorial - 6 - Reducers
// Reducers
// Specify how the app's state changes in resposne to actions sent to the store
// Function that acceprts state and action as arguments, and returns the next state of the appliction
// (prevState, action) => newState

// Redux Toolkit Tutorial - 7 - Store
// Redux store
// One store for the entire application
// Responsibilities -
// Holds application state
// Allows acces to state via getState()
// Allows state to be updated via dispatch(action)
// Registers listeners via subscribe(listener)
// Handles unregistering of listeners via the function returned by subcribed(listener)

// Redux Toolkit Tutorial - 8 - Restocking Cakes
// Everyday, a vendor comes to the shop to restock the shelves.
// The vendor can stock up one more number of cakes depending on the previous day sales.

// Redux Toolkit Tutorial - 10 - Cakes and Ice Creams
// Cakes & Ice creams!
// Cake shop
// Cakes stored on the shelf
// Shopkeeper to handle CAKE_ORDERED from customer
// Sell ice creames!
// Ice Creames stored in the freezer
// New shopkeeper to handle ICECREAM_ORDERED from customer
// State ot the shop is now number of cakse on the shels along with the number of ice creams in the freezer
// Separate shopkeepers help with scalability
// Separate shopkeepers help narrow down on a problem when one does arise

// Redux Toolkit Tutorial - 14 - Middleware
// Is the suggested way to extend Redux with custom functionality
//  Provides a third-party extenstion point between dispatching an action, and the moment
// it reaches the reducer
// Use middleware for logging, crash reporting, performing asynchonous tasks etc

// Redux Toolkit Tutorial - 15 - Async Actions
// Actions
// Synchronous Actions
// As soon as an action was dispatched, the satte was immediately updated.
// If you dispatch the CAKE_ORDERED action, the numOfCakes was right away decremented by 1.
// Same with ICECREAM_ORDERED action as well.

// Async actions
// Asynchronous API calls to fetch data from an end point and use that data un your application.

// Our Application
// Fetches a list of users from an API end point and stores it in the redux store.
// State?
// Actions?
// Reducer?

// State
// state = {
//   loading: true,
//   data: [],
//   error: ``,
// }
// loading - Display a loading spinner in your application
// data - List of users
// error - Display error to the user

// Actions
// FETCH_USERS_REQUESTED - fetch list of users
// FETCH_USERS_SUCCEEDED - fetched successfully
// FETCH_USERS_FAILED - Error when fetching the data

// Reducers
// case: FETCH_USERS_REQUESTED
// loading: true
// case: FETCH_USERS_SUCCEEDED
// loading: false
// users: data(from API)
// case: FETCH_USERS_FAILED
// loading: false
// error: error(from API)

// Redux Toolkit Tutorial - 16 - Redux Thunk Middleware
// Async action creators 
// axios - Requests to an API end point
// redux-thunk - define async action creators 
// middleware

// Redux Toolkit Tutorial - 17 - Redux Toolkit Intro
// Redux concerns 
// Redux requires to much boilerplate code
// 1. Action
// 2. Action object
// 3. Action creator
// 4. Switch statement in a reducer
// A lot of other packages have to be installed to work with redux
// 1. Redux-thunk
// 2. Immer
// 3. Redux-devtools
// There was a need to improve the developer experience for redux

// Redux Toolkit 
// 1. Abstract over the setup process
// 2. Handle the most common use cases
// 3. Include some useful utilities
