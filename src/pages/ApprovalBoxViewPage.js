import DocItem from '../components/approvalBox/DocItem';
import SearchDetailBox from '../components/approvalBox/SearchDetailBox';
import styles from '../styles/pages/ApprovalBoxViewPage.module.css';

function ApprovalBoxViewPage() {
  return (
    <div className={styles.approvalBoxContainer}>
      {/* <SearchDetailBox></SearchDetailBox> */}
      <ul className={styles.docList}>
        <DocItem></DocItem>
      </ul>
    </div>
  );
}
export default ApprovalBoxViewPage;
