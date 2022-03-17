import { createContext, useState } from "react";

export const AddFriendContext = createContext<any>({
  state: {
    userId: "",
  },
  actions: {
    setUserId: () => {},
  },
});

export const AddFriendProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");

  const value = {
    state: { userId },
    actions: { setUserId },
  };

  console.log(value);
  return (
    <AddFriendContext.Provider value={value}>
      {children}
    </AddFriendContext.Provider>
  );
};
