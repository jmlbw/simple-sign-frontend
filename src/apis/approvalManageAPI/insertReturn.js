export default function insertReturn(page) {
  let url = `http://localhost:8080/approve/return/${page}`;
  return fetch(url, {
    method: 'POST',
  });
}
