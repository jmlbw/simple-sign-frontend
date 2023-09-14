import styles from '../../../styles/components/header/LogoArea.module.css';
import logo from '../../../assets/imgs/logo.png';

function LogoArea() {
  return (
    <div className={styles.logo_box}>
      <div className={styles.logo_icon}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default LogoArea;
