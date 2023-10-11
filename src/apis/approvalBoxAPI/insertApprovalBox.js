import axios from 'axios';

export default function insertApprovalBox(approvalBoxState) {
  const url = `http://localhost:8080/approvbox/insert`;
  const payload = {
    ...approvalBoxState,
  };

  return axios.post(url, payload);
}
