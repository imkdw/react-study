import React from "react";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event: Event): void => {
    const name = (event.target as HTMLInputElement).value;
    console.log(name);
  };

  const onSubmit = (event: React.SyntheticEvent): void => {
    console.log(event.target);
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
      <div>
        <button>Login with Google</button>
        <button>Login With Github</button>
      </div>
    </div>
  );
};

export default Auth;
