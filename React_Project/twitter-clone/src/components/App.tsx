import React, { useEffect, useState } from "react";
import Router from "./Router";
import { auth } from "firebaseInstance";

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setInit(true);
    });
  });

  return (
    <div>{init ? <Router isLoggedIn={isLoggedIn} /> : "Initalizing..."}</div>
  );
};

export default App;
