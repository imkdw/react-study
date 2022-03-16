import Profile from "./Profile";
import { ChangeEvent, FormEvent, useState } from "react";

const InputId = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const { name, email } = userInfo;

  const [result, setResult] = useState({
    name: "",
    email: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult({
      name: name,
      email: email,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="유저 이름을 입력해주세요."
          onChange={onChange}
          value={name}
        />
        <input
          type="text"
          name="email"
          placeholder="유저 이메일을 입력해주세요."
          onChange={onChange}
          value={email}
        />
        <button type="submit">검색</button>
        <Profile result={result} />
      </form>
    </>
  );
};

export default InputId;
