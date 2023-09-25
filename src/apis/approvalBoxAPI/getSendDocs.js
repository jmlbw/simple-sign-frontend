import axios from 'axios';

export default function getSendDocs() {
  const url = 'http://localhost:8080/approvbox/send';

  return axios.get(url);
}

export function getTemporDocs() {
  const url = 'http://localhost:8080/approvbox/tempor';

  return axios.get(url);
}

export function getPendDocs() {
  const url = 'http://localhost:8080/approvbox/pend';

  return axios.get(url);
}

export function getConcludedDocs() {
  const url = 'http://localhost:8080/approvbox/concluded';

  return axios.get(url);
}

export function getReferenceDocs() {
  const url = 'http://localhost:8080/approvbox/reference';

  return axios.get(url);
}
