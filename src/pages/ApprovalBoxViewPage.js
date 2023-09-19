import RowRadioButtonsGroup from '../components/approvalBox/RowRadioButtonsGroup';
import SearchDetailBox from '../components/approvalBox/SearchDetailBox';
import ViewDocBox from '../components/approvalBox/ViewDocBox';
import styles from '../styles/pages/ApprovalBoxViewPage.module.css';

function ApprovalBoxViewPage() {
  return (
    <div>
      <div className={styles.searchDetailbox}>
        <SearchDetailBox></SearchDetailBox>
      </div>

      <div className={styles.radiobuttonsBox}>
        <div className={styles.radiogroup}>
          <RowRadioButtonsGroup></RowRadioButtonsGroup>
        </div>
      </div>
      <ViewDocBox></ViewDocBox>
    </div>
  );
}
export default ApprovalBoxViewPage;
