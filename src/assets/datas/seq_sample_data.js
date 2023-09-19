import { ValueType } from 'realgrid';

export const fields = [
  // {
  //   fieldName: 'code',
  //   dataType: ValueType.TEXT,
  // },
  {
    fieldName: 'comp_name',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'seq_name',
    dataType: ValueType.TEXT,
  },
  {
    fieldName: 'description',
    dataType: ValueType.TEXT,
  },
];

export const columns = [
  // {
  //   name: '코드',
  //   fieldName: 'code',
  //   width: '70',
  //   header: {
  //     text: '코드',
  //   },
  // },
  {
    name: '회사',
    fieldName: 'comp_name',
    width: '200',
    header: {
      text: '회사',
    },
  },
  {
    name: '문서채번명',
    fieldName: 'seq_name',
    width: '230',
    header: {
      text: '문서채번명',
    },
  },
  {
    name: '설명',
    fieldName: 'description',
    width: '90',
    header: {
      text: '설명',
    },
  },
];

export const rows = [
  {
    code: '1',
    comp_name: '(주) 더존',
    seq_name: '휴가 신청 채번',
    description: '기본적인 채번',
  },
  {
    code: '2',
    comp_name: '(주) 더존',
    seq_name: '테스트 채번',
    description: '',
  },
  {
    code: '3',
    comp_name: '비트컴퓨터',
    seq_name: '휴가 신청서 채번',
    description: '',
  },
  {
    code: '4',
    comp_name: '(주) 더존',
    seq_name: '지각 사유서 채번',
    description: '그냥 채번',
  },
];
