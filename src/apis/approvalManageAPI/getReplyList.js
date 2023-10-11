export default function getReplyList(approval_doc_id) {
  return fetch(`http://localhost:8080/reply/${approval_doc_id}`).then((res) => {
    return res.json();
  });
}
