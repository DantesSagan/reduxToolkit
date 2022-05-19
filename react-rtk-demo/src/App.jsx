/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import CakeView from './features/cake/CakeView';
import UserView from './features/user/UserView';
import IceCreamView from './features/icecream/icecreamView';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CakeView />
        <IceCreamView />
        <UserView />
      </header>
    </div>
  );
}

export default App;
