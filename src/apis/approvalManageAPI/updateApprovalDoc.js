export default function updateApprovalDoc(page, data) {
  let url = `http://localhost:8080/approve/${page}`;
  fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
