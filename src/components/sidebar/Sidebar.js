import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import BasicButton from './Button';
import AuthorityBtn from './AuthorityBtn';
import styled from '../../styles/components/sidebar/Sidebar.module.css';

//추후 backend data변경예정
const userData = [
  {
    id: '1',
    name: '상신/보관함',
    submenu: [
      { id: 1, name: '상신문서' },
      { id: 2, name: '임시보관문서' },
    ],
  },
  {
    id: '2',
    name: '결재수신함',
    submenu: [
      { id: 1, name: '미결문서' },
      { id: 2, name: '기결문서' },
      { id: 3, name: '수신참조문서' },
    ],
  },
  {
    id: '3',
    name: '결재분류함',
    submenu: [{ id: 1, name: '상신문서' }],
  },
];

const managerData = [
  {
    id: '1',
    name: '결재함관리',
    submenu: [{ id: 1, name: '결재함설정' }],
  },
  {
    id: '2',
    name: '결재양식관리',
    submenu: [
      { id: 1, name: '기안양식관리' },
      { id: 2, name: '문서채번관리' },
    ],
  },
];

function Sidebar() {
  let [data, setData] = useState(userData);
  const [isSubMenuVisible, setSubMenuVisible] = useState([false, false]);

  const authorityManage = (value) => {
    if (value == 'user') {
      setData(userData);
    } else {
      setData(managerData);
    }
  };

  const toggleSubMenu = (id) => {
    const updateSubMenuVisible = isSubMenuVisible.map((state, i) =>
      i == id - 1 ? true : false
    );
    setSubMenuVisible(updateSubMenuVisible);
  };

  const navigate = useNavigate();
  const goApproval = function () {
    navigate('/FL');
  };

  return (
    <div className={styled.sidebar}>
      <BasicButton name="결재하기" goApproval={goApproval} />
      {data.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isSubMenuVisible={isSubMenuVisible}
          toggleSubMenu={() => {
            toggleSubMenu(item.id);
          }}
        />
      ))}

      <AuthorityBtn authorityManage={authorityManage} />
    </div>
  );
}

export default Sidebar;
