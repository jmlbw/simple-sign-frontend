import styles from '../../styles/components/ApprovalBox/DocItem.module.css';

function DocItem() {
  return (
    <li className={styles.docItemBox}>
      <div className={styles.datetext}>09-15(금)15:22</div>
      <div className={styles.contentsBox}></div>
    </li>
  );
}
export default DocItem;
