import { createContext, useState } from "react";

export const AddFriendContext = createContext<any>({
  state: {
    userId: "",
    searchResult: "",
    searchError: false,
    alreadyFriend: false,
  },

  actions: {
    setUserId: () => {},
    setSearchResult: () => {},
    setSearchError: () => {},
    setAlreadyFriend: () => {},
  },
});

export const AddFriendProvider = ({ children }: any) => {
  const [userId, setUserId] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [alreadyFriend, setAlreadyFriend] = useState(false);

  const value = {
    state: { userId, searchResult, searchError, alreadyFriend },
    actions: { setUserId, setSearchResult, setSearchError, setAlreadyFriend },
  };

  return (
    <AddFriendContext.Provider value={value}>
      {children}
    </AddFriendContext.Provider>
  );
};
