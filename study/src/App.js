import React, { useState, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('유저 세는중..');
  return users.filter(user => user.active).length;
}

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'imkdw',
      email: 'imkdw@kakao.com'
    },
    {
      id: 2,
      name: 'noob_noob',
      email: 'noob_noob@naver.com'
    },
    {
      id: 3,
      name: 'dongwoo_wifi',
      email: 'dongwoo_wifi@naver.com'
    }
  ]);

  const [inputs, setInputs] = useState({ name: '', email: '' });
  const { name, email } = inputs;


  const nextId = useRef(4);

  const onCreate = useCallback(
    e => {
      const user = {
        id: nextId.current, name, email
      };

      setUsers(users.concat(user));

      setInputs({ name: '', email: '' });
      nextId.current += 1;
    }, [users, name, email]
  )

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, [inputs]
  );

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    }, [users]
  );

  const onToggle = useCallback(
    id => {
      setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user));
    }, [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        name={name}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>{count}</div>
    </>
  )
}

export default App;