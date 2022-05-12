import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    let config = err.config;
    if (err.response.status === 401 && config !== undefined) {
      API.post("/api/token/refresh")
        .then(() => axios.request(config))
        .catch((err) => console.log(err));
    }
  }
);

/*axios.interceptors.response.use(
  (response) => {
    return res;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        // Do something, call refreshToken() request for example;
        // return a request
        return axios_instance(config);
      }
      if (error.response.status === ANOTHER_STATUS_CODE) {
        // Do something 
        return Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error);
  }
);*/
