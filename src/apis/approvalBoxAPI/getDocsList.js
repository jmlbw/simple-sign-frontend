import axios from 'axios';

export default function getDocsList(viewItems, itemsPerPage, offset) {
  // viewItems 배열을 쉼표로 구분된 문자열로 변환
  const viewItemsString = viewItems.join(',');

  const url = `http://localhost:8080/approvbox/view?viewItems=${viewItemsString}&itemsPerPage=${itemsPerPage}&offset=${offset}`;

  return axios.get(url);
}
