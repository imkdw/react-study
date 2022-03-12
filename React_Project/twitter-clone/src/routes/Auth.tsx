import { MouseEvent } from "react";
import { auth } from "firebaseInstance";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthForm from "components/AuthForm";

const Auth = () => {
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
      <AuthForm />
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
