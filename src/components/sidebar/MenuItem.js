import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '../../styles/components/sidebar/MenuItem.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';

function MenuItem({ item, isSubMenuVisible, toggleSubMenu }) {
  const { state, setState } = useApprovalBox();
  const navigate = useNavigate();
  const [clickStates, setClickStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (!isSubMenuVisible[item.id - 1]) {
      // isSubMenuVisible이 false일 때, 모든 clickStates를 false로 초기화
      setClickStates(Array(clickStates.length).fill(false));
    }
  }, [isSubMenuVisible]);

  const clickMenu = (index, name) => {
    const updateClickStates = clickStates.map((state, i) =>
      i === index ? true : false
    );
    if (name === '기안양식관리') {
      navigate('/EAM');
    } else if (name === '문서채번관리') {
      navigate('/SAM');
    } else if (name === '상신문서') {
      navigate('/ABV');
      setState((prevState) => ({ ...prevState, viewItem: ['send'] }));
    } else if (name === '임시보관문서') {
      navigate('/ABV');
      setState((prevState) => ({ ...prevState, viewItem: ['tempor'] }));
    } else if (name === '미결문서') {
      navigate('/ABV');
      setState((prevState) => ({ ...prevState, viewItem: ['pend'] }));
    } else if (name === '기결문서') {
      navigate('/ABV');
      setState((prevState) => ({ ...prevState, viewItem: ['concluded'] }));
    } else if (name === '수신참조문서') {
      navigate('/ABV');
      setState((prevState) => ({ ...prevState, viewItem: ['reference'] }));
    }
  };

  return (
    <List className={styled.list}>
      <ListItemButton
        className={`${styled.mainmenu} ${
          isSubMenuVisible[item.id - 1] ? styled.color : ''
        }`}
        onClick={() => {
          toggleSubMenu(item.id);
        }}
      >
        {isSubMenuVisible[item.id - 1] ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )}
        <ListItemText primary={item.name} className={styled.menutext} />
      </ListItemButton>
      {item.submenu && isSubMenuVisible[item.id - 1] && (
        <div className={styled.submenu}>
          {item.submenu.map((subitem, index) => (
            <ListItemButton
              key={subitem.id}
              className={`${styled.subitem} ${
                clickStates[index] ? styled.color : ''
              }`}
              onClick={() => {
                clickMenu(index, subitem.name);
              }}
            >
              <ListItemText
                primary={subitem.name}
                className={styled.sub_menutext}
              ></ListItemText>
            </ListItemButton>
          ))}
        </div>
      )}
    </List>
  );
}

export default MenuItem;
