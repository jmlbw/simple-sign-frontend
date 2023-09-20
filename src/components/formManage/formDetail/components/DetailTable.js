import React, { useState } from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import DragDrop from './DragDrop';

export default function DetailTable() {
  // const [defualtFile, setDefaultFile] = useState([]);
  // const [mainFile, setMainFile] = useState([]);

  // const handleDefaultFile = (e) => {};

  const form_detail_sample_data = {
    comp_name: '더존',
    form_name: '성과 보고서',
    scope: ['우리회사', '옆 회사'],
    form_used_status: 'true',
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
          <td className={styled.table_title_td}>양식명</td>
          <td className={styled.table_content_td}>
            <input type="text" value={formDetailData.form_name} />
          </td>
        </tr>
        <tr>
          <td className={`${styled.table_title_td} ${styled.table_area_type}`}>
            공개범위
          </td>
          <td
            className={`${styled.table_content_td} ${styled.table_area_type}`}
          >
            <div>
              {formDetailData.scope.map((ele, index) => {
                return <div key={index}>{ele}</div>;
              })}
            </div>
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>사용여부</td>
          <td
            className={`${styled.table_content_td} ${styled.table_radio_type}`}
          >
            <div>
              <input
                type="radio"
                name="used"
                value="true"
                checked={formDetailData.form_used_status === 'true'}
                onChange={handleOptionChange}
              />
              사용
              <input
                type="radio"
                name="used"
                value="false"
                checked={formDetailData.form_used_status === 'false'}
                onChange={handleOptionChange}
              />
              미사용
            </div>
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>기본파일</td>
          <td className={`${styled.table_file_td} ${styled.table_file_type}`}>
            <DragDrop name={'기본파일'} />
          </td>
        </tr>
        <tr>
          <td className={styled.table_title_td}>본문파일</td>
          <td className={`${styled.table_file_td} ${styled.table_file_type}`}>
            <DragDrop name={'본문파일'} />
          </td>
        </tr>
      </table>
    </>
  );
}
