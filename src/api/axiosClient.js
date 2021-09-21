import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  header: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),   //parse obj to string
});

// axiosClient.interceptors.request.use(async (config) => {
//   //handle token here ...
//   return config;
// });

axiosClient.interceptors.response.use((res) => {
  if (res && res.data) {
    return res.data;
  }

  return res;
}, (error) => {
  //handle error here ...
  console.log(error);
});

export default axiosClient;

