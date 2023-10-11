export default function insertLowerReply(data) {
  return fetch(`http://localhost:8080/reply/insertLowerReply`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
