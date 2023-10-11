export default function getForm(form_code) {
  let url = `http://localhost:8080/manage/form/detail/${form_code}`;
  return fetch(url, { headers: { Accept: 'application/json' } }).then((res) => {
    return res.json();
  });
}
