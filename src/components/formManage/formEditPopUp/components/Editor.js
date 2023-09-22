import React, { useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import QuillBetterTable from 'quill-better-table';
import styled from '../../../../styles/components/formManage/formEdit/components/Editor.module.css';
import 'quill-better-table/dist/quill-better-table.css'; // 테이블 모듈 스타일 시트

Quill.register({ 'modules/better-table': QuillBetterTable });
// 커스텀 모듈을 Quill에 추가하는 함수
function addCustomModule(quill) {
  const Parchment = Quill.import('parchment');

  // 커스텀 모듈을 정의합니다.
  class CustomBoxBlot extends Parchment.Embed {
    static blotName = 'custom-box';
    static tagName = 'div';
    static className = 'custom-box';

    // 커스텀 박스 생성
    static create(value) {
      const node = super.create(value);
      node.innerHTML = `<div class="box-content" style="border: 1px solid #000; padding: 10px; width: 50px ">내용
        <button class="delete-button">X</button></div>
        
      `;
      return node;
    }

    // 박스 삭제
    static deleteBox(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }

  Quill.register(CustomBoxBlot, true);
}

export default function Editor() {
  const quillRef = useRef(null);
  addCustomModule();

  const insertTable = () => {
    const editor = quillRef.current.getEditor();
    const tableModule = editor.getModule('better-table');
    tableModule.insertTable(3, 3);
  };

  useEffect(() => {
    const editor = quillRef.current.getEditor();
    const toolbar = editor.getModule('toolbar');
    toolbar.addHandler('table', () => {
      insertTable();
    });
  }, []);

  // Quill 에디터 초기화 및 커스텀 모듈 추가
  const modules = {
    table: false,
    'better-table': {
      operationMenu: {
        items: {
          unmergeCells: {
            text: 'Another unmerge cells name',
          },
        },
      },
    },
    keyboard: {
      bindings: QuillBetterTable.keyboardBindings,
    },
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ customBox: '' }], // 커스텀 모듈 버튼 추가
        ['formula', 'table'],
      ],
    },
  };

  // 사용자가 버튼을 눌렀을 때 커스텀 박스를 삽입하는 함수
  const insertCustomBox = () => {
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();
    if (range) {
      const index = range.index || 0;
      quill.insertEmbed(index, 'custom-box', 'This is a custom box');
    }
  };

  return (
    <div className={styled.editorContainer}>
      <h2>Quill 에디터</h2>
      <button onClick={insertCustomBox}>Insert Custom Box</button>
      <button onClick={insertTable}>Insert Table</button>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        placeholder="내용을 입력하세요..."
      />
    </div>
  );
}

// ...
