import React, { useEffect, useState, useRef } from 'react';
import InnerBox from '../components/common/InnerBox';
import UpdateForm from '../components/approvalManage/approvalUpdate/UpdateForm';
import Button from '../components/common/Button';
import { useLocation } from 'react-router-dom';
import updateApprovalDoc from '../apis/approvalManageAPI/updateApprovalDoc';
import { useLoading } from '../contexts/LoadingContext';
import moment from 'moment';
import { usePage } from '../contexts/PageContext';

export default function ApprovalUpdatePage() {
  const location = useLocation();
  //에디터
  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);
  //로딩
  const { showLoading, hideLoading } = useLoading();
  const { state, setState } = usePage();

  //update 데이터
  const [sequence_code, setSequenceCode] = useState('');
  const [drafting_time, setDraftingTime] = useState(moment());
  const [enforce_date, setEnforceDate] = useState(moment());
  const divRef = useRef(null);
  const titleRef = useRef(null); //제목
  const [rec_ref, setRecRef] = useState([]); //수신참조
  const [org_use_list, setOrgUseId] = useState([]); //결재라인

  const handleSelectBoxChange = (newValue) => {
    setSequenceCode(newValue);
  };
  const handleDraftingTime = (newValue) => {
    setDraftingTime(newValue);
  };
  const handleEnforcementTime = (newValue) => {
    setEnforceDate(newValue);
  };
  const dataHandler = (data) => {
    setFormData(data);
  };
  const editorHandler = (ref) => {
    setEditor(ref.currentContent);
  };

  const handleClick = () => {
    //페이지 데이터 셋팅
    setState({ ...state, curPage: '결재문서수정' });
    showLoading();
    const orgUserIdList = [];
    org_use_list.map((data, index) => {
      orgUserIdList.push(data.userId);
    });

    const recRefList = [];
    rec_ref.map((data) => {
      if (data.compId) {
        recRefList.push({
          id: data.compId,
          category: 'C',
          name: data.compName,
        });
      } else if (data.estId) {
        recRefList.push({
          id: data.estId,
          category: 'E',
          name: data.estName,
        });
      } else if (data.deptId) {
        recRefList.push({
          id: data.deptId,
          category: 'D',
          name: data.deptName,
        });
      } else if (data.userId) {
        recRefList.push({
          id: data.userId,
          category: 'U',
          name: data.userName,
        });
      }
    });

    const data = {
      approvalDocTitle: titleRef.current.innerHTML,
      seqCode: sequence_code,
      receiveRefList: recRefList,
      createdAt: drafting_time.format('YYYY-MM-DDTHH:mm:ss'),
      enforcementDate: enforce_date.format('YYYY-MM-DDTHH:mm:ss'),
      contents: editor,
      approverList: orgUserIdList,
    };

    //문서수정
    updateApprovalDoc(location.search.split('=')[1], data)
      .then((res) => {
        if (res.status == '200') {
          alert('문서가 수정되었습니다.');
        } else {
          alert('문서수정을 실패했습니다.');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('문서수정을 실패했습니다.');
      })
      .finally(() => {
        hideLoading();
      });
  };

  return (
    <div>
      <div>
        <InnerBox
          text={'결재문서수정페이지'}
          width={'100%'}
          height={'100%'}
          children={
            <>
              <UpdateForm
                approval_doc_id={location.search.split('=')[1]}
                handleDraftingTime={handleDraftingTime}
                handleEnforcementTime={handleEnforcementTime}
                handleSelectBoxChange={handleSelectBoxChange}
                dataHandler={dataHandler}
                editorHandler={editorHandler}
                titleRef={titleRef}
                org_use_list={org_use_list}
                setOrgUseId={setOrgUseId}
                rec_ref={rec_ref}
                setRecRef={setRecRef}
              />
              <Button
                label={'수정'}
                btnStyle={'blue_btn'}
                onClick={handleClick}
              />
            </>
          }
        ></InnerBox>
      </div>
    </div>
  );
}
