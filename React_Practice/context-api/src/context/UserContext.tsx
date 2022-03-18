import { createContext, useState } from "react";

export const UserContext = createContext<any>({
  state: {
    userId: "",
    // searchResult: "",
  },
  actoins: {
    setUserId: () => {},
    // setSearchResult: () => {},
  },
});

export const UserProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");
  // const [searchResult, setSearchResult] = useState("");  

  const value = {
    state: { userId },
    actions: { setUserId },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
