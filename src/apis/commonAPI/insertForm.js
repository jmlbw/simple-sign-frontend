export default function insertForm(data) {
  let url = 'http://localhost:8080/manage/form/detail';
  data = {
    ...data,
    scope: [
      { category: 'C', useId: 1, name: 'Company A' },
      { category: 'C', useId: 2, name: 'Company B' },
    ],
  };
  const jsonData = JSON.stringify(data);

  console.log(jsonData);
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
