import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export default function UserView() {
  
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    fetchUsers(users);
  }, []);

  return (
    <div>
      <h2>List of users - {users}</h2>
    </div>
  );
}
