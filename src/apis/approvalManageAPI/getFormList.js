export default function getFormList({ searchContent }) {
  let url = `http://localhost:8080/manage/form/formTitleList?searchContent=${searchContent}`;
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
}
