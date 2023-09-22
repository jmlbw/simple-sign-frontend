import React, { useEffect, useState, useRef } from 'react';
import ReactHtmlParser from 'html-react-parser';
import Selectbox from '../../common/Selectbox';
import SelectDate from './components/SelectDate';
import Editor from './components/Editor';

export default function ApprovalForm({ form_code }) {
  const [sequence, setSequence] = useState([]);
  const [default_form, setDefaultForm] = useState('');
  const [main_form, setMainForm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/manage/form/detail/${form_code}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setMainForm(json.mainForm);
      });

    fetch(
      `http://localhost:8080/manage/form/seqTitleList?formCode=${form_code}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSequence(json);
      });
  }, [form_code]);

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
      <Editor key={main_form} main_form={main_form} />
    </>
  );
}
