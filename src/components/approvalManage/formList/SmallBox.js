import styled from '../../../styles/components/approvalManage/formList/SmallBox.module.css';
import ApprovalForm from '../approvalRegist/ApprovalForm';
import PopUp from '../../common/PopUp';

export default function SmallBox(props) {
  const innerBoxStyle = {
    width: props.width,
    height: props.height,
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
      children={<ApprovalForm />}
    ></PopUp>
  );
}
