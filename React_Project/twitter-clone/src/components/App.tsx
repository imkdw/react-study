import React, { useEffect, useState } from "react";
import Router from "./Router";
import { auth } from "firebaseInstance";

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
        // console.log(user);
      } else {
        setIsLoggedIn(false);
      }

      setInit(true);
    });
  });

  const refreshUser = () => {
    setUserObj(auth.currentUser);
  };

  return (
    <div>
      {init ? (
        <Router
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Initalizing..."
      )}
    </div>
  );
};

export default App;
