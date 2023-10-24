import { object, string, number, array } from 'yup';

const checkBoxCreateData = (data) => {
  console.log(data);
  return boxCreateSchema.validate(data);
};
const boxCreateSchema = object().shape({
  sortOrder: number()
    .nullable()
    .notRequired()
    .integer('숫자만 입력 가능합니다.')
    .test('max-length', '최대 길이는 5 입니다', (num) => {
      if (num === null || num === undefined) return true; // undefined와 null 처리
      return String(num).length <= 5;
    }),
  viewItems: array()
    .required('조회항목을 선택해 주세요')
    .test('unique', '중복된 항목이 있습니다', (list) => {
      if (!list) return true;

      const set = new Set(list);
      return set.size === list.length;
    }),
  approvalBoxName: string()
    .required('명칭을 입력해 주세요.')
    .min(1, '명칭은 최소 1글자입니다.')
    .max(50, '명칭은 최대 50글자입니다.'),

  compId: number(),
});

export { checkBoxCreateData };
