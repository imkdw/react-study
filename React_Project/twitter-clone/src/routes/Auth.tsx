import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { auth } from "firebaseInstance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const { email, password } = account;

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = event;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  // TODO: try ~ catch 에서 catch(e) 객체 이벤트 any -> ?? 변경하기
  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (newAccount) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(data);
      } catch (e: any) {
        console.error(e.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        console.log(data);
      } catch (e: any) {
        console.error(e.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        />
        <button type="submit">Log In</button>
      </form>
      {error && <div>{error}</div>}
      <div>
        <button>Login with Google</button>
        <button>Login With Github</button>
      </div>
    </div>
  );
};

export default Auth;
