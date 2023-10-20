import axios from 'axios';
import base_url from '../base_url';

axios.defaults.withCredentials = true;

export default function getUserCompId() {
  const url = base_url + `approvbox/company`;
  return axios.get(url).catch((error) => {
    console.error('Error inserting document view:', error);
  });
}
