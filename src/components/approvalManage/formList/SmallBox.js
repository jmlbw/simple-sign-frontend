import React, { useRef, useState } from 'react';
import styled from '../../../styles/components/approvalManage/formList/SmallBox.module.css';
import ApprovalForm from '../approvalRegist/ApprovalForm';
import PopUp from '../../common/PopUp';
export default function SmallBox(props) {
  const innerBoxStyle = {
    width: props.width,
    height: props.height,
  };

  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);

  const dataHandler = (data) => {
    setFormData(data);
    console.log(formData);
  };

  const editorHandler = (ref) => {
    setEditor(ref.editor);
  };

  const handleSaveToDatabase = () => {
    console.log('a');
    fetch(`http://localhost:8080/approve/register`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formCode: props.form_code,
        docStatus: 'W',
        contents: formData,
      }),
    }).then((res) => {
      console.log(res);
      return res;
    });
  };

  return (
    <PopUp
      label={
        <div>
          <div className={styled.box} style={innerBoxStyle}>
            <div className={styled.title}>{props.form_name}</div>
            <div className={styled.content}>{props.form_explain}</div>
          </div>
        </div>
      }
      btnStyle={'popup_non_btn'}
      width="1300px"
      height="600px"
      title="결재작성상세"
      children={
        <ApprovalForm
          form_code={props.form_code}
          dataHandler={dataHandler}
          editorHandler={editorHandler}
        />
      }
      handleSaveToDatabase={handleSaveToDatabase}
    ></PopUp>
  );
}
