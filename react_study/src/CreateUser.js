import React from 'react'

const CreateUsers = ({ name, email, onCreate, onChange }) => {
  return (
    <div>
      <input
        name="name"
        placeholder='아이디를 입력하세요.'
        onChange={onChange}
        value={name}>
      </input>
      <input
        name='email'
        placeholder='이메일을 입력하세요'
        onChange={onChange}
        value={email}>
      </input>
      <button onClick={onCreate}>추가</button>
    </div>
  )
}

export default React.memo(CreateUsers);