import React, { useState, useEffect, useMemo } from 'react';
import OrgTreeView from './OrgTreeView';
import OrgTopGrid from './OrgTopGrid';
import OrgBottomGrid from './OrgBottomGrid';
import OrgSearch from './OrgSearch';
import styled from '../../styles/components/org/OrgPage.module.css';

/**
 *
 * @param {String} view 사용자 - user, 부서별 - dept ex) const view = 'user';
 * @param {Array} onDataUpdate const [dataParent, setDataParent] = useState([]);
 * @returns ex) {estId: 1, estName: 'Establishment 1'}
                {deptId: 1, deptName: 'HR Department'}
                {deptId: 12, deptName: 'HR Department 2'}
 */

export default function OrgChart({ view, onDataUpdate }) {
  const [selectedNode, setSelectedNode] = useState(null);

  const [selectedRow, setSelectedRow] = useState([]);

  const removeRow = (rowId) => {
    setSelectedRow((prevRows) => prevRows.filter((row) => row.id !== rowId));
  };

  const [isChecked, setIsChecked] = useState(false);

  const [search, setSearch] = useState({});

  const handleRow = (row) => {
    const isDuplicate = selectedRow.some(
      (selected) =>
        selected.company === row.company &&
        selected.establishment === row.establishment &&
        selected.department === row.department &&
        selected.position === row.position &&
        selected.grade === row.grade &&
        selected.user === row.user
    );
    if (!isDuplicate) {
      const newId =
        selectedRow.length > 0 ? selectedRow[selectedRow.length - 1].id + 1 : 1;
      const updatedRow = { ...row, id: newId };
      setSelectedRow((prevRows) => [...prevRows, updatedRow]);
    } else {
      alert('이미 들어가있는 값입니다.');
    }
  };

  // return되는 데이터 매핑
  const dataForParent = useMemo(() => {
    return selectedRow.map((row) => {
      if (view === 'user' && row.userId && row.user) {
        return {
          userId: row.userId,
          userName: row.user,
        };
      } else if (row.deptId && row.department) {
        return {
          deptId: row.deptId,
          deptName: row.department,
        };
      } else if (view === 'dept' && row.estId && row.establishment) {
        return {
          estId: row.estId,
          estName: row.establishment,
        };
      } else if (row.compId && row.company) {
        return {
          compId: row.compId,
          compName: row.company,
        };
      }
      return {};
    });
  }, [selectedRow, view]);

  // const dataForParent = useMemo(() => {
  //   return selectedRow.map((row) => {
  //     return {
  //       compId: row.compId,
  //       compName: row.company,
  //       estId: row.estId,
  //       estName: row.establishment,
  //       deptId: row.deptId,
  //       deptName: row.department,
  //       userId: row.userId,
  //       userName: row.user,
  //     };
  //   });
  // }, [selectedRow]);

  useEffect(() => {
    console.log(dataForParent);
    if (onDataUpdate) {
      onDataUpdate(dataForParent);
    }
  }, [dataForParent]);

  return (
    <div className={styled.main_container}>
      <div className={styled.search_container}>
        <OrgSearch view={view} onCheckBox={setIsChecked} onSearch={setSearch} />
      </div>
      <div className={styled.top_container}>
        <div className={styled.tree_container}>
          <OrgTreeView onNodeSelect={setSelectedNode} />
        </div>
        <div className={styled.second_container}>
          <div className={styled.top_grid_container}>
            <OrgTopGrid
              selectedNode={selectedNode}
              onRowSelect={handleRow}
              view={view}
              isChecked={isChecked}
              search={search}
              setSelectedNode={setSelectedNode}
              setSearch={setSearch}
            />
          </div>
          <div className={styled.bottom_grid_container}>
            <div className={styled.bottom_grid_label_view}>
              <label>선택항목</label>
              <OrgBottomGrid
                selectedRow={selectedRow}
                view={view}
                remove={removeRow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
