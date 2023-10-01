export default function insertSeq(data) {
  let url = 'http://localhost:8080/manage/seq/detail';
  data = {
    ...data,
    deptScope: [
      { category: 'C', useId: 1, name: 'Company A' },
      { category: 'C', useId: 2, name: 'Company B' },
    ],
    formScope: [{ category: 'F', useId: 1, name: 'Company A' }],
  };
  const jsonData = JSON.stringify(data);

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
