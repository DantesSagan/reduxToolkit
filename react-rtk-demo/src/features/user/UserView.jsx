import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export default function UserView() {
  const users = useSelector((state) => state.user.users);

  const [lock, setLock] = useState(true);

  const dispatch = useDispatch();
  console.log(users);

  const sortDataUsers = users.map((item) => {
    return (
      <ul key={item.id}>
        <li key={item.id}>
          {item.id} - {item.name} - {item.username}{' '}
        </li>
      </ul>
    );
  });

  return (
    <section className='border-2 border-white rounded-lg p-4 mt-2'>
      <hr className='p-2 mt-2' />
      {lock ? (
        <button
          onClick={() => {
            setLock(false);
            dispatch(fetchUsers());
          }}
          className='mr-1 p-4 bg-green-700 rounded-lg border-2 border-white hover:bg-green-600'
        >
          Fetch users
        </button>
      ) : (
        <div>
          <h2>List of users -{sortDataUsers}</h2>
          <hr className='p-2 mt-2' />
          <button
            onClick={() => setLock(true)}
            className='mr-1 p-4 bg-red-700 rounded-lg border-2 border-white hover:bg-red-600'
          >
            Cancel
          </button>
        </div>
      )}
    </section>
  );
}
