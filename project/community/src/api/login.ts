import axios from "axios";
import config from "../config/config";

const login = async (userId: string, password: string) => {
  const url = config.url.loginUrl; // /auth/login
  try {
    const data = { userId, password };
    const response = await axios.post(url, { data });
    return response;
  } catch (error: any) {
    console.error(error);
  }
};

export default login;
