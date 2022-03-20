import { createContext, useState } from "react";

export const EditContext = createContext<any>({
  state: {
    nickname: "",
    message: "",
    profileUrl: "",
  },
  actions: {
    setNickname: () => {},
    setMessage: () => {},
    setProfileUrl: () => {},
  },
});

export const EditProvider = ({ children }: any) => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const value = {
    state: { nickname, message, profileUrl },
    actions: { setNickname, setMessage, setProfileUrl },
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

export default EditProvider;
