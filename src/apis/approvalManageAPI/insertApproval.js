export default function insertApproval(page) {
  let url = `http://localhost:8080/approve/approval/${page}`;
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
}
