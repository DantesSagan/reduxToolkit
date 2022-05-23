/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector, useStore } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchBasket,
  orderedBasket,
  orderedBasketOrder,
} from '../basket/basketSlice';

import { fetchCakes, orderedCake, restockedCake } from '../cake/cakeSlice';

// interface ChildrenWrapper {
//   children: JSX.Element | JSX.Element[];
// }

export default function CakeView() {
  const [value, setValue] = useState(0);

  const dispatch = useAppDispatch();

  const baskets = useAppSelector((state) => state.basket);
  const cakes = useAppSelector((state) => state.cake);

  const cakesStates = useAppSelector((state) => state.cake.cakes);

  const initNumOfCakes = useAppSelector((state) =>
    state.cake.cakes.map((cakeMap) => cakeMap.numOfCakes)
  );

  const numOfCakes = useAppSelector((state) =>
    state.cake.cakes.map((cakeMap) => cakeMap.numOfCakes)
  );

  const idCakes = useAppSelector((state) =>
    state.cake.cakes.map((cakeMap) => cakeMap.id)
  );

  const idCheckCakes = useAppSelector((state) =>
    state.cake.cakes.map((cakeMap) => cakeMap.idCheck)
  );

  // const initPriceCakes = useAppSelector((state) =>
  //   state.cake.cakes.map((cakeMap) => cakeMap.price)
  // );

  // const priceOfCakes = useAppSelector((state) =>
  //   state.cake.cakes.map((cakeMap) => cakeMap.price)
  // );

  // console.log(numOfCakes, numOfOrdered);
  let diff = Number(initNumOfCakes) - Number(numOfCakes);
  console.log(diff);
  const Busket = useAppSelector((state) =>
    state.cake.cakes.map((cakeMap) => {
      return (
        <div key={cakeMap.id} className='p-4 border-2 border-black rounded-lg'>
          <div className='flex justify-center'>
            <img
              className='w-72 h-72 rounded-3xl object-cover border-2 border-black'
              alt={cakeMap.description}
              src={cakeMap.img}
            />
          </div>
          <div className='text-1xl'>Value of price - {cakeMap.price}</div>
          <div className='text-1xl'>Value of flavour - {cakeMap.flavour}</div>
          <div className='text-1xl'>Value of color - {cakeMap.color}</div>
          <div className='text-1xl'>
            Value of description - {cakeMap.description}
            <div className='text-xl'>Value of cakes - {cakeMap.numOfCakes}</div>
          </div>
          <button
            onClick={() => {
              dispatch(
                orderedBasket(cakeMap.price)

                // basketAllPrice
              );
              dispatch(orderedBasketOrder(1));
              // }
            }}
            className='mr-1 p-4 bg-green-700 rounded-lg border-2 border-black hover:bg-green-600'
          >
            Order cakes
          </button>
          <h2 className='text-2xl'>Custom restock</h2>
          <input
            className='text-black rounded-lg border-2 border-purple-600 p-2 focus:ring-yellow-600 focus:ring-4 mt-4 mb-4'
            value={value}
            type='number'
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <br />
          <button
            onClick={() => {
              dispatch(restockedCake(value));
            }}
            className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-black hover:bg-red-500'
          >
            Restock cakes
          </button>
          <h2 className='text-2xl'>Default restock</h2>
          <button
            onClick={() => {
              let diff = Number(initNumOfCakes) - Number(numOfCakes);
              dispatch(restockedCake(diff));
            }}
            className='ml-1 p-4 bg-red-600 rounded-lg border-2 border-black hover:bg-red-500'
          >
            Default cakes
          </button>
        </div>
      );
    })
  );

  useEffect(() => {
    dispatch(fetchCakes());
    dispatch(fetchBasket());
  }, []);

  // console.log(initNumOfCakes)
  // const [basket, setBasket] = useState<number>(0);

  // const store = useStore();
  // store.subscribe(() =>
  //   console.log('update', store.getState().cake.numOfCakes)
  // );
  // console.log(store);

  // const changeOrdered = useCallback(() => {
  //   dispatch({ type: 'cake/orderedCake' });
  // }, []);

  // const cakeDisplay = cakesStates.map((item) => {
  //   return (

  //   );
  // });

  return (
    <section className='border-2 border-black rounded-lg p-4 m-4'>
      {cakes.loading && <div className='text-3xl font-bold'>Loading..</div>}
      {cakes.error && (
        <div className='font-bold text-3xl bg-red-600 p-4 rounded-lg m-4'>
          Error 404
        </div>
      )}
      {!cakes.loading && (
        <div className='grid grid-rows-2 grid-cols-3 gap-4 content-center'>
          {Busket}
        </div>
      )}
    </section>
  );
}
