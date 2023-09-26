export default function insertForm(data) {
  let url = 'http://localhost:8080/manage/form/detail';

  const jsonData = JSON.stringify(data);

  console.log(jsonData);
  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
