import { useState } from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';

export default function SeqDetailTable() {
  const form_detail_sample_data = {
    comp_name: '더존',
    seq_code: '1',
    seq_name: '성과 보고 채번',
    scope_department: ['총무부', '개발부'],
    scope_form: ['휴가 신청서', '지각 사유서'],
    description: '그냥 설명',
    seq_sort_order: 1,
    default_file: '<div>기본</div>',
    main_file: '<div>본문</div>',
  };
  const [formDetailData, setformDetailData] = useState(form_detail_sample_data);

  const handleOptionChange = (event) => {
    setformDetailData({
      ...formDetailData,
      form_used_status: event.target.value,
    });
  };

  return (
    <>
      <table className={styled.form_detail_table}>
        <tr>
          <td className={styled.table_title_td}>회사</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.comp_name} />
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>코드</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.seq_code} />
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>채번명</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.seq_name} />
          </td>
        </tr>
        <tr>
          <td className={`${styled.table_title_td} ${styled.table_area_type}`}>
            대상부서
          </td>
          <td
            className={`${styled.table_content_td} ${styled.table_area_type}`}
          >
            <div>
              {formDetailData.scope_department.map((ele, index) => {
                return <div key={index}>{ele}</div>;
              })}
            </div>
          </td>
        </tr>
        <tr>
          <td className={`${styled.table_title_td} ${styled.table_area_type}`}>
            대상양식
          </td>
          <td
            className={`${styled.table_content_td} ${styled.table_area_type}`}
          >
            <div>
              {formDetailData.scope_form.map((ele, index) => {
                return <div key={index}>{ele}</div>;
              })}
            </div>
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>설명</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.seq_name} />
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>정렬순서</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.seq_sort_order} />
          </td>
        </tr>
      </table>
    </>
  );
}
