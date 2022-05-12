import React, { useContext } from 'react';
import { UserContext } from '.';

export default function TestTwo() {
  const user = useContext(UserContext);
  return <div className='mt-16'>TestTwo - {user}</div>;
}
