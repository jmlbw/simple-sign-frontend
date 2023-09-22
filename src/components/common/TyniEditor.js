import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const CustomButton = ({ label, editor, text }) => {
  const handleInsertDiv = () => {
    if (editor) {
      const test = text || '';
      editor.execCommand('mceInsertContent', false, test);
    }
  };

  return <button onClick={handleInsertDiv}>{label}</button>;
};

export function TyniEditor({ init, editorHandler, dataHandler }) {
  const editorRef = useRef(null);

  useEffect(() => {
    console.log(editorRef);
    if (editorRef) {
      editorHandler(editorRef.current);
    }
  }, [editorRef]);

  return (
    <>
      <Editor
        onEditorChange={dataHandler}
        initialValue={init || '<p>Make your form</p>'}
        init={{
          // content_css: 'App.css',
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | table',
          content_css: 'assets/editor_style.css',
          statusbar: false,
        }}
        ref={editorRef}
      />
    </>
  );
}
