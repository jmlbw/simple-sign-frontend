export default function updateApprovalDoc(page, data) {
  let url = `http://localhost:8080/approve/${page}`;
  fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
}
