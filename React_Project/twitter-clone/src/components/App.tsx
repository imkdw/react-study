import React, { useState } from "react";
import { authService } from "firebaseInstance";
import Router from "./Router";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(authService.currentUser);

  return (
    <div>
      <Router isLoggedIn={isLoggedIn} />
      <hr />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Change</button>
    </div>
  );
};

export default App;
