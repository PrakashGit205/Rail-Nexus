import axios from 'axios';
import BaseURL from '../GlobalConfig';

const httpClient = axios.create({
  baseURL: BaseURL+"/signin",
  headers: {
    'Content-Type': 'application/json',
  },
});
  const post = (data) => {
    return httpClient.post('', data);
  };
  
  const get = (id) => {
    return httpClient.get(`${id}`);
  };
  
 
  export default { post, get };