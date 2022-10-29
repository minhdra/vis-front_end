import React, { useEffect, useState } from 'react';

// components

import CardSettings from '../../components/Cards/CardSettings.js';
import { getById, update } from '../../services/auth.js';
const token = window.sessionStorage.getItem('USER_TOKEN');
export default function Settings({ setTitle }) {
  useEffect(() => {
    setTitle('VIS - Profile');
  }, [setTitle]);

  const [userId, setUserId] = useState(() =>
    window.sessionStorage.getItem('uuid')
  );

  const [user, setUser] = useState();

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  const getUser = (id) => {
    getById(id, token)
      .then((res) => setUser(res))
      .catch((err) => console.log(err.message));
  };

  const updateUser = (option) => {
    update(option, token).then((res) => getUser(userId));
  };

  return (
    <>
      <div className='flex flex-wrap py-4'>
        <CardSettings user={user} updateUser={updateUser} setUserId={setUserId} />
      </div>
    </>
  );
}
