import React from 'react';
import styles from '../../styles/components/common/Button.module.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className={styles[props.btnStyle]}>
      {props.label}
    </button>
  );
}

export default Button;
