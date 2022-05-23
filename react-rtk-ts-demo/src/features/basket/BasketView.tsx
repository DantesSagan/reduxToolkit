/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchBasket,
  nullBasket,
  nullOrdered,
  orderedBasket,
} from './basketSlice';

export default function BasketViewNavBar() {
  const dispatch = useAppDispatch();
  const baskets = useAppSelector((state) => state.basket);
  const basketAll = baskets.basket.map((item) => item.basketAllPrice);
  const orderedAll = baskets.basket.map((item) => item.numOfOrdered);
  const numOfPrice = Number(basketAll);
  const numOfOrdered = Number(orderedAll);

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  return (
    <header className='w-full bg-black border-8 border-blue-600 fixed z-10'>
      <div className='text-3xl  text-white grid grid-rows-1 grid-flow-col'>
        {baskets.loading && <div>Loading...</div>}
        {!baskets.loading && baskets.error && (
          <div className='font-bold text-3xl bg-red-600 rounded-lg'>
            Error 404
          </div>
        )}
        {!baskets.loading && (
          <div>
            <div className='col-span-2 float-left text-3xl font-bold p-2'>
              Delicious magazine
            </div>
            <div className='col-span-2 float-right p-2'>
              Ordered - {numOfOrdered} Price - {numOfPrice}{' '}
              <button
                onClick={() => {
                  dispatch(nullBasket(0));
                  dispatch(nullOrdered(0));
                }}
                className='ml-1 bg-red-600 rounded-lg border-2 border-black hover:bg-red-500'
              >
                Default
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
