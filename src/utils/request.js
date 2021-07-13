import axios from "axios";

   const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;


var setTokenService = token => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
};

var setNullTokenService = () => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${null}`;
};

const createAxios = (url) =>
  axios.create({
    baseURL: `https://afternoon-waters-60767.herokuapp.com/api/${url}`,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus(status) {
      return status >= 200 && status < 400;
    },
  });



var task = createAxios("task");
var auth = createAxios("auth");


var ApiStore = {
  task: task,
  auth: auth,
};

export default ApiStore;
export {setTokenService,setNullTokenService};