import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/CakeView';
import IceCreamView from './features/icecream/IceCreamView';
import UserView from './features/user/UserView';

function App() {
  const [count, setCount] = useState(0);

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
