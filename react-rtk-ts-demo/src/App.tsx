import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/CakeView';
import IceCreamView from './features/icecream/IceCreamView';
import UserView from './features/user/UserView';
import BasketViewNavBar from './features/basket/BasketView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <BasketViewNavBar />
      <CakeView value={undefined} expanded={false} />
      {/* <IceCreamView />
        <UserView /> */}
    </div>
  );
}

export default App;
