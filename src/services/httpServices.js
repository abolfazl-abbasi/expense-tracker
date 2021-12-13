import axios from "axios";

// step 1 => { npm install -g json-server } || { npm i }  => because it is inside ( package.json )
//
// step 2 => { json-server --watch data/db.json --port 3001 } => or other ports if you change : ( axios.defaults.baseURL )
//
// Finish

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {}
);
