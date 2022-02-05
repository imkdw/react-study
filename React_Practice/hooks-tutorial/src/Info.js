import useInputs from './useInputs'

const Info = () => {
  // useInputs 커스텀훅으로 name, nickname을 전달한다.
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickname}</b>
        </div>
      </div>
    </div>
  );
}

export default Info;