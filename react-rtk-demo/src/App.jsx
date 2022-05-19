/* eslint-disable @next/next/no-img-element */
import CakeView from './features/cake/CakeView';
import UserView from './features/user/UserView';
import IceCreamView from './features/icecream/IceCreamView';

import './App.css';

export default function App() {
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
