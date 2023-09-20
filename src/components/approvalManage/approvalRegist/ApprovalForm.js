import React, { useEffect, useState, useRef } from 'react';
import ReactHtmlParser from 'html-react-parser';
import Selectbox from '../../common/Selectbox';
import SelectDate from './components/SelectDate';

export default function ApprovalForm() {
  const [sequence, setSequence] = useState([]);
  const [default_form, setDefaultForm] = useState('');
  const [main_form, setMainForm] = useState('');
  const [value, setValue] = useState('내용');

  const formData = [
    {
      form_code: 1,
      form_name: '품의서',
      default_form:
        '<header> <style> table,table td {border: 1px solid black; border-collapse: collapse;}</style>' +
        "</header><h1>품의서</h1><table> <tr><td>결재</td><td><input id='1번결재' /></td><td><input id='line2' /></td><td><input id='line3' /></td><td><input id='line4' /></td><td><input id='line5' /></td><td><input id='line6' /></td><td><input id='line7' /></td><td><input id='line8' /></td>" +
        "</tr><tr><td colspan='2'>품의번호</td><td colspan='7'><select id='채번'><option></option></select></td></tr>" +
        "<tr><td colspan='2'>작성일시</td><td colspan='7'><input id='날짜' /></td></tr>" +
        "<tr><td colspan='2'>기안자</td><td colspan='7'><input id='기안자'/></td></tr><tr><td colspan='2'>수신및참조</td><td colspan='7'><input id='recieved_at' /></td></tr>" +
        "<tr><td colspan='2'>제목</td><td colspan='7'><input id='제목' style='width: 300px'/></td></tr></table>",
      main_form:
        '<table><tr><td>내용</td><td><input id="contents" /></td></t  r></table>',
    },
  ];
  const sequenceList = [
    {
      seq_code: 1,
      name: '부서채번1',
      seq_sort_order: 1,
    },
    {
      seq_code: 2,
      name: '회사채번1',
      seq_sort_order: 2,
    },
  ];

  useEffect(() => {
    setSequence(sequenceList);
    setDefaultForm(formData[0].default_form);
    setMainForm(formData[0].main_form);
  }, []);

  return (
    <>
      <div>
        {ReactHtmlParser(default_form, {
          replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.id == '1번결재') {
              return <span>상신자</span>;
            }
            if (domNode.attribs && domNode.attribs.id === '채번') {
              return (
                <Selectbox selectList={sequence} width={'300'} height={'40'} />
              );
            }
            if (domNode.attribs && domNode.attribs.id === '날짜') {
              return <SelectDate />;
            }
            if (domNode.attribs && domNode.attribs.id === '기안자') {
              return <span>상신자</span>;
            }
            if (domNode.attribs && domNode.attribs.id == '제목') {
              return (
                <input
                  value="제목입니다. 제목입니다, 제목입니다. 제목입니다"
                  style={{ width: '300px' }}
                />
              );
            }
          },
        })}
      </div>
      <div>
        <ReactQuill value={value} onChange={setValue} />
        <div>{ReactHtmlParser(main_form)}</div>
      </div>
    </>
  );
}
