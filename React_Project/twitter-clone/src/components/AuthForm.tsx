import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { auth } from "firebaseInstance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = () => {
  const [newAccount, setNewAccount] = useState(true);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

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

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (newAccount) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      }
    }
  }

  return (
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
      <button type="submit">{newAccount ? "sign up" : "login"}</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default AuthForm;
