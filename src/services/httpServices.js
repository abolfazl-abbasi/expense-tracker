import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);
