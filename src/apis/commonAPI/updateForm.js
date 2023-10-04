export default function updateForm(data) {
  let url = 'http://localhost:8080/manage/form/detail';

  const jsonData = JSON.stringify(data);

  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
