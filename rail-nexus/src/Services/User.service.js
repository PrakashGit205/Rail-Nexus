import axios from 'axios';
import BaseURL from '../GlobalConfig';

const httpClient = axios.create({
  baseURL: BaseURL+"/api/users",
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAll = () => {
    return httpClient.get('');
  };
  
  const post = (data) => {
    return httpClient.post('', data);
  };
  const login = (data) => {
    return httpClient.post('/login', data);
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
  export default { getAll, post, get, update, remove,login };