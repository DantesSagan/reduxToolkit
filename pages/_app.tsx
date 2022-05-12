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
