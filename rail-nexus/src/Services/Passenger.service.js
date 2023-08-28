// import httpClient from "../http-common"
import axios from 'axios';
import BaseURL from '../GlobalConfig';
import AuthHeader from './auth.heder';
var httpClient = axios.create({
  baseURL: `${BaseURL}/api/passengers`,
  headers: AuthHeader(),
});

const getAll = () => {
  return httpClient.get('');
};

const post = (data) => {
  return httpClient.post('', data);
};




const get = (id) => {
  return httpClient.get(`/user/${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, post, get, update, remove };
