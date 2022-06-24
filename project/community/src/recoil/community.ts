import { atom } from "recoil";

export const jwtTokenState = atom({
  key: "jwtToken",
  default: "",
});
