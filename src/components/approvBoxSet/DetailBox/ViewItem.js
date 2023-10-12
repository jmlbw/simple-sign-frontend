import React, { useEffect, useState } from 'react';
import ViewItemPopup from '../ViewItemPopup';
import Optionbox from '../../common/Optionbox';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import getViewItems from '../../../apis/approvalBoxAPI/getViewItems';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';

const BASE_RADIX = 10;

function ViewItem(props) {
  const [data, setData] = useState([]);
  const [viewItemsLocal, setViewItemsLocal] = useState([]);
  const [viewItemsLocal2, setViewItemsLocal2] = useState([]);
  const [error, setError] = useState(null);
  const { state, setState } = useApprovalBox();
  const { approvalBoxState, initDataState, setInitDataState } =
    useApprovalBoxManage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedBoxId = parseInt(props.boxId, BASE_RADIX);
        if (!isNaN(parsedBoxId)) {
          const response = await getViewItems(parsedBoxId);

          let updatedViewItem = [];

          response.data.forEach((viewItem) => {
            if (viewItem.codeId.includes('01')) {
              updatedViewItem.push('상신내역');
            } else if (viewItem.codeId.includes('02')) {
              updatedViewItem.push('미결내역');
            } else if (viewItem.codeId.includes('03')) {
              updatedViewItem.push('기결내역-종결');
            } else if (viewItem.codeId.includes('04')) {
              updatedViewItem.push('기결내역-진행');
            } else if (viewItem.codeId.includes('05')) {
              updatedViewItem.push('반려내역');
            } else if (viewItem.codeId.includes('06')) {
              updatedViewItem.push('수신참조내역');
            }
          });

          setInitDataState((prevState) => ({
            ...prevState,
            name: updatedViewItem,
          }));
          console.log(initDataState);

          setViewItemsLocal2((prevItems) => {
            return updatedViewItem;
          });
          setState((prevState) => ({
            ...prevState,
            boxViewItems: updatedViewItem,
          }));
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching box details:', err);
      }
    };
    fetchData();
  }, [props.boxId, approvalBoxState.viewItems]);

  useEffect(() => {
    if (approvalBoxState && approvalBoxState.viewItems) {
      setViewItemsLocal(approvalBoxState.viewItems); // approvalBoxState.viewItems 값이 변경될 때마다 로컬 상태 업데이트
    }
  }, [approvalBoxState.viewItems, approvalBoxState]); // approvalBoxState.viewItems 값의 변경을 감지

  let itemsToRender;

  if (viewItemsLocal && viewItemsLocal.length > 0) {
    itemsToRender = viewItemsLocal;
  } else if (viewItemsLocal2 && viewItemsLocal2.length > 0) {
    itemsToRender = viewItemsLocal2;
  } else {
    itemsToRender = initDataState.name
      ? initDataState.name.map((item) => item.codeValue)
      : [];
  }

  useEffect(() => {
    console.log('Updated viewItemsLocal:', viewItemsLocal2);
  }, [viewItemsLocal2]);

  function handleDataChange(name) {
    setViewItemsLocal2((prevState) => {
      return prevState.filter((item) => item !== name);
    });
  }

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>조회항목</div>
      </div>
      <div style={props.commonDataStyle}>
        <div className={styled.viewUseField}>
          <div className={styled.viewItemBox}>
            {itemsToRender.map((viewItemValue, index) => (
              <Optionbox
                id={viewItemValue}
                key={index}
                initData={{ ...initDataState, name: viewItemValue }} // name을 단일 값으로 전달
                name={viewItemValue}
                dataHandler={handleDataChange}
              />
            ))}
          </div>

          <ViewItemPopup
            checkedItems={data}
            currentViewItems={viewItemsLocal2}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
