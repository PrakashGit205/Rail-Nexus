// import httpClient from "../http-common"
import axios from 'axios';
import originalURL from '../URL';
var httpClient = axios.create({
  baseURL: `${originalURL}/api/station`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, create, get, update, remove };
