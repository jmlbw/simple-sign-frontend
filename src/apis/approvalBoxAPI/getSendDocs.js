import axios from 'axios';

export default function getSendDocs() {
  const url = 'http://localhost:8080/approvbox/send';

  return axios.get(url);
}

export function getTemporDocs() {
  const url = 'http://localhost:8080/approvbox/tempor';

  return axios.get(url);
}
