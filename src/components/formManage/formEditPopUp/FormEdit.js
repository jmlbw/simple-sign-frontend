import styled from '../../../styles/components/formManage/formEdit/FormEdit.module.css';
import FormList from './components/FormList';
import getFormItem from '../../../apis/commonAPI/getFormItem';
import React, { useState, useEffect } from 'react';
import { TinyEditor, CustomButton } from '../../common/TinyEditor';

export default function FormEdit() {
  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);
  const [formItems, setFormItems] = useState([]);

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
        setFormItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className={styled.formEditContainer}>
      <div className={styled.categoryArea}>
        <FormList formItems={formItems} editor={editor} />
      </div>
      <div className={styled.editorArea}>
        <TinyEditor
          init={``}
          editorHandler={editorHandler}
          dataHandler={dataHandler}
        />
      </div>
    </div>
  );
}
