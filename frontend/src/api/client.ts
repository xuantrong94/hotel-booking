import { TRegisterFormData } from "../utils/type.md";
import axiosInstance from "./axiosConfig";

const BASE_PATH = "/auth";

const authApi = {
  login: (data: TRegisterFormData) => {
    const url = `${BASE_PATH}/login`;
    return axiosInstance.post(url, data, {
      withCredentials: true,
    });
  },
  register: (data: TRegisterFormData) => {
    const url = `${BASE_PATH}/register`;
    return axiosInstance.post(url, data);
  },
  logout: () => {
    const url = `${BASE_PATH}/logout`;
    return axiosInstance.post(url);
  },
  checkToken: () => {
    const url = `${BASE_PATH}/checkToken`;
    return axiosInstance.post(url);
  },
};

export default authApi;
