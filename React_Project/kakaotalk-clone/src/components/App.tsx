import React, { useState, useEffect } from "react";
import NoAuthRouter from "components/NoAuthRouter";
import AuthRouter from "components/AuthRouter";
import { firebaseAuth } from "firebase/firebaseInstance";

const App: React.FC = () => {
  const [userObj, setUserObj] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AuthRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        <NoAuthRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      )}
    </>
  );
};

export default App;
