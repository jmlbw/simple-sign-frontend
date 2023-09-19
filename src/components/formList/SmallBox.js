import styled from '../../styles/components/formList/SmallBox.module.css';

export default function SmallBox(props) {
  const innerBoxStyle = {
    width: props.width,
    height: props.height,
  };

  return (
    <div className={styled.box} style={innerBoxStyle}>
      <div className={styled.title}>{props.form_name}</div>
      <div className={styled.content}>{props.form_explain}</div>
    </div>
  );
}
