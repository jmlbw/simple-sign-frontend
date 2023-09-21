import React from 'react';
import styles from '../../styles/components/common/InnerBox.module.css';
import Title from './Title';

export default function InnerBox(props) {
  const innerBoxStyle = {
    width: props.width,
    height: props.height,
  };

  return (
    <div className={styles.box} style={innerBoxStyle}>
      <Title text={props.text} font_size={props.font_size} />
      {props.text !== null && props.text !== undefined ? <hr /> : null}
      <div>{props.children}</div>
      <hr />
      <div style={props.childStyle}>{props.children}</div>
    </div>
  );
}
