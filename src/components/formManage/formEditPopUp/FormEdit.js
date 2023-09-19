import styled from '../../../styles/components/formManage/formEdit/FormEdit.module.css';
import Editor from './components/Editor';
import FormList from './components/FormList';

export default function FormEdit() {
  return (
    <div className={styled.formEditContainer}>
      <div className={styled.categoryArea}>
        <FormList />
      </div>
      <div className={styled.editorArea}>
        <Editor />
      </div>
    </div>
  );
}
