import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/CakeView';
import IceCreamView from './features/icecream/IceCreamView';
import UserView from './features/user/UserView';
import BasketView from './features/basket/BasketView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <BasketView />
      <CakeView />
      {/* <IceCreamView />
        <UserView /> */}
    </div>
  );
}

export default App;
