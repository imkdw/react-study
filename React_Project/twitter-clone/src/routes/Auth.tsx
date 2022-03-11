import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { useState } from "react";
import { auth } from "firebaseInstance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  AuthProvider,
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

  const toggleAccount = () => setNewAccount(!newAccount);

  async function onSocialClick(event: MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;
    let provider = null;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }

    if (provider !== null) {
      await signInWithPopup(auth, provider);
    }
  }

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
        <button type="submit">{newAccount ? "Sign up" : "Login"}</button>
      </form>
      {error && <div>{error}</div>}
      <span onClick={toggleAccount}>{newAccount ? "sign up" : "Login"}</span>
      <div>
        <button onClick={onSocialClick} name="google">
          Login with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
