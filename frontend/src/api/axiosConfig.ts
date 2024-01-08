import axios from "axios";
import queryString from "query-string";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URI,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${import.meta.env.REACT_APP_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    // if (res && res.data) {
    //   return res.data;
    // }
    return res;
  },
  (err) => {
    throw err;
  },
);

export default axiosInstance;
