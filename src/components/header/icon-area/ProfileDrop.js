import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Userprofile from './Userprofile';
import styles from '../../../styles/components/header/dropdown.module.css';

export default function Profile() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            className={styles.test}
          >
            <Userprofile />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <div className={styles.fixedbox}>Welcome !</div>
            <MenuItem className={styles.menubox} onClick={popupState.close}>
              Profile
            </MenuItem>
            <MenuItem className={styles.menubox} onClick={popupState.close}>
              My account
            </MenuItem>
            <MenuItem className={styles.menubox} onClick={popupState.close}>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
