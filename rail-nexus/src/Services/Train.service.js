import axios from 'axios';
import BaseURL from '../GlobalConfig';



var httpClient = axios.create({
  baseURL: `${BaseURL}/api/trains`,
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

const get = (source,destination,date,seatType) => {
  return httpClient.get(`/${source}/${destination}/${date}/${seatType}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, create, get, update, remove };
