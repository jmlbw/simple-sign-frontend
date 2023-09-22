import styled from '../../../styles/components/formManage/formEdit/FormEdit.module.css';
import Editor from './components/Editor';
import FormList from './components/FormList';
import getFormItem from '../../../apis/commonAPI/getFormItem';
import React, { useState, useEffect } from 'react';
import { TyniEditor, CustomButton } from '../../common/TyniEditor';

export default function FormEdit() {
  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);

  const dataHandler = (data) => {
    setFormData(data);
  };

  const editorHandler = (ref) => {
    setEditor(ref.editor);
  };

  useEffect(() => {
    console.log('formData:', formData);
  }, [formData]);

  useEffect(() => {
    getFormItem()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className={styled.formEditContainer}>
      <div className={styled.categoryArea}>
        <CustomButton
          label={'품의번호'}
          editor={editor}
          text={
            '<div contenteditable="false" class="ss" className={ss} id="ss" style={{border: 1px}}>회사번호-날짜-그냥번호</div>'
          }
        ></CustomButton>
        <CustomButton
          label={'작성일자'}
          editor={editor}
          text={
            '<div contenteditable="false" class="ss" className={ss} id="ss" style={{border: 1px} readonly}>yyyy-mm-dd</div>'
          }
        ></CustomButton>
        <FormList />
      </div>
      <div className={styled.editorArea}>
        <TyniEditor
          init={``}
          editorHandler={editorHandler}
          dataHandler={dataHandler}
        />
      </div>
    </div>
  );
}
