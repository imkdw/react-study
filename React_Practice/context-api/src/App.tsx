import React from "react";
import Input from "./components/Input";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Input />
    </UserProvider>
  );
};

export default App;
