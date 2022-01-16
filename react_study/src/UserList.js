import React from 'react'

function User({ user, onRemove, onToggle }) {
  const userStyle = {
    cursor: 'pointer',
    color: user.active ? 'green' : 'black'
  }
  return (
    <div>
      <b
        style={userStyle}
        onClick={() => onToggle(user.id)}
      >
        {user.name}
      </b>
      &nbsp;
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div className='users'>
      {users.map(user =>
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      )}
    </div>
  )
}

export default UserList;