import { UserContext } from "../context/UserContext";
import { UserProvider } from "../context/UserContext";
import Input from "./Input";

const Index = () => {
  return (
    <UserProvider>
      <Input />
    </UserProvider>
  );
};

export default Index;
