import axios from "axios";
import config from "../config/config";

type loginParams = {
  userId: string;
  password: string;
};

export const login = async ({ userId, password }: loginParams) => {
  const url = config.url.loginUrl; // /auth/login
  try {
    const data = { userId, password };
    const response = await axios.post(url, { data });
    return response;
  } catch (error: any) {
    console.error(error);
  }
};

type registerParams = {
  userId: string;
  password: string;
  rePassword: string;
  nickname: string;
  email: string;
};

export const register = async ({
  userId,
  password,
  rePassword,
  nickname,
  email,
}: registerParams) => {
  const url = config.url.registerUrl; // /auth/register
  try {
    const data = { userId, password, rePassword, nickname, email };
    const response = await axios.post(url, { data });
    return response;
  } catch (error: any) {
    console.error(error);
  }
};
