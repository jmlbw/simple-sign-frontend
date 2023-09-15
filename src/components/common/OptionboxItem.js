import { IoMdClose } from 'react-icons/io'; // IoMdClose 아이콘을 명시적으로 가져옵니다.
import styles from '../../styles/components/common/Optionbox.module.css';

function OptionboxItem(props) {
  const handleIconCloseClick = () => {
    // onValueChange 함수를 호출하여 value 상태를 변경
    props.onValueChange('false'); // 변경할 새로운 값으로 설정
  };

  return (
    <div className={styles.whole}>
      <div className={styles.element}>
        <div className={styles.iconimg}>{props.icon}</div>
        <div className={styles.text}>
          <a>더존비즈온</a>
        </div>
        {/* x 버튼 */}
        <div className={styles.iconX} onClick={handleIconCloseClick}>
          <IoMdClose />
        </div>
      </div>
    </div>
  );
}

export default OptionboxItem;
