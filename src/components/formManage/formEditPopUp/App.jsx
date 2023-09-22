import React, { useState, useEffect } from 'react';
import { TyniEditor, CustomButton } from './TyniEditor';

export default function App() {
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

  return (
    <>
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
      <TyniEditor
        init={``}
        editorHandler={editorHandler}
        dataHandler={dataHandler}
      />
    </>
  );
}
