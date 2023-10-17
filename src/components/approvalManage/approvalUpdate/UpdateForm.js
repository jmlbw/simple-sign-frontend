import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'html-react-parser';
import moment from 'moment';
import SelectDate from '../approvalRegist/components/SelectDate';
import SelectBox from '../../common/Selectbox';
import { TinyEditor } from '../../common/TinyEditor';
import styled from '../../../styles/components/approvalManage/approvalUpdate/UpdateForm.module.css';
import PopUp from '../../common/PopUp';
import PopUpFoot from '../../common/PopUpFoot';
import OrgChart from '../../org/OrgChart';
import getApprovalDoc from '../../../apis/approvalManageAPI/getApprovalDoc';
import getSequenceList from '../../../apis/approvalManageAPI/getSequenceList';
import deleteContentEditableError from '../../../apis/approvalManageAPI/deleteContentEditableError';
import { useLoading } from '../../../contexts/LoadingContext';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import Button from '../../common/Button';
import OptionboxItem from '../../common/Optionbox';
import Optionbox from '../../common/Optionbox';

export default function UpdateForm({
  approval_doc_id,
  handleDraftingTime,
  handleEnforcementTime,
  handleSelectBoxChange,
  dataHandler,
  editorHandler,
  titleRef,
  org_use_list,
  setOrgUseId,
  rec_ref,
  setRecRef,
}) {
  const [default_form, setDefaultForm] = useState('');
  const [userName, setUserName] = useState('');
  const [deptName, setDeptName] = useState('');
  const [productNum, setProductNum] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [enforcementDate, setEnforcementDate] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [form_code, setFormCode] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [condition, setCondition] = useState('rec_ref');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiveRefOpt, setReceiveRefOpt] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleApprovalClick = () => {
    setCondition('approval');
    openModal();
  };

  const handleReceiveClick = () => {
    setCondition('receive');
    openModal();
  };

  useEffect(() => {
    showLoading();
    //결재문서 상세조회
    getApprovalDoc(approval_doc_id)
      .then((json) => {
        console.log(json);
        setDefaultForm(json.defaultForm);
        setUserName(json.userName);
        setDeptName(json.deptName);
        setProductNum(json.productNum);
        setTitle(json.approvalDocTitle);
        setCreatedAt(moment(json.createdAt));
        setEnforcementDate(moment(json.enforcementDate));
        setContents(json.contents);
        setFormCode(json.formCode);
        setOrgUseId(json.approvalLineList);
        setRecRef(json.receivedRefList);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        hideLoading();
      });

    if (form_code !== 0) {
      getSequenceList(form_code).then((json) => {
        setSequence(json);
      });
    }

    deleteContentEditableError();
  }, [form_code]);

  useEffect(() => {
    if (rec_ref.length !== 0) {
      const updatedRecRefOpt = rec_ref.map((data, id) => {
        return (
          <Optionbox initData={{ name: data.user, category: data.category }} />
        );
      });

      setReceiveRefOpt(updatedRecRefOpt);
    }
  }, [rec_ref]);

  const BlueAndGrayBtn = [
    {
      label: '반영',
      onClick: () => {
        closeModal();
      },
      btnStyle: 'popup_blue_btn',
    },
    {
      label: '취소',
      onClick: () => {
        closeModal();
      },
      btnStyle: 'popup_gray_btn',
    },
  ];
  //////////ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ전달안됨
  const exampleInitData = {
    compId: 1,
    company: 'Company A',
    department: 'HR Department',
    deptId: 1,
    estId: 1,
    establishment: 'Establishment 1',
    grade: 'Staff',
    id: 1,
    position: 'Manager',
    user: 'John Doe',
    userId: 1,
  };

  return (
    <>
      <div>
        {ReactHtmlParser(default_form, {
          replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.id == 'approval_line') {
              return (
                <div id="approval_line">
                  <table
                    border={'1px solid'}
                    style={{ width: '100%', borderCollapse: 'collapse' }}
                    onClick={handleApprovalClick}
                  >
                    <tr style={{ height: '50px' }}>
                      <td>결재자1</td>
                      <td>결재자2</td>
                      <td>결재자3</td>
                      <td>결재자4</td>
                      <td>결재자5</td>
                      <td>결재자6</td>
                      <td>결재자7</td>
                      <td>결재자8</td>
                    </tr>
                    <tr style={{ height: '50px' }}>
                      <td>
                        {org_use_list.length > 0
                          ? org_use_list[0].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 1
                          ? org_use_list[1].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 2
                          ? org_use_list[2].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 3
                          ? org_use_list[3].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 4
                          ? org_use_list[4].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 5
                          ? org_use_list[5].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 6
                          ? org_use_list[6].userName
                          : ''}
                      </td>
                      <td>
                        {org_use_list.length > 7
                          ? org_use_list[7].userName
                          : ''}
                      </td>
                    </tr>
                  </table>
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'doc_num') {
              return (
                <div id="doc_num" contentEditable="false">
                  {productNum === null ? (
                    <SelectBox
                      selectList={sequence}
                      width={'300'}
                      height={'40'}
                      onChange={handleSelectBoxChange}
                    />
                  ) : (
                    productNum
                  )}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafting_time') {
              return (
                <div id="drafting_time">
                  <SelectDate
                    handleSelectTimeChange={handleDraftingTime}
                    baseDate={createdAt}
                  />
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter') {
              return (
                <div id="drafter" contentEditable="false">
                  {userName}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter_dept') {
              return (
                <div id="drafter_dept" contentEditable="false">
                  {deptName}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'form_title') {
              return (
                <div id="form_title" contentEditable="true" ref={titleRef}>
                  {title}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforce_date') {
              return (
                <div id="enforce_date" contentEditable="true">
                  <SelectDate
                    handleSelectTimeChange={handleEnforcementTime}
                    baseDate={enforcementDate}
                  />
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforcer') {
              return <div id="enforcer" contentEditable="false"></div>;
            }
            if (domNode.attribs && domNode.attribs.id == 'rec_ref') {
              return (
                <>
                  <div id="receiveList">
                    {receiveRefOpt}
                    <Button
                      label={
                        <AccountTreeRoundedIcon
                          style={{ color: 'grey' }}
                          onClick={handleReceiveClick}
                        />
                      }
                      onClick={() => openModal('receiveRef')}
                    />
                  </div>
                </>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'content') {
              return (
                <>
                  <h4>신청내용</h4>
                  <div id="content" className={styled.container}>
                    <TinyEditor
                      init={contents}
                      editorHandler={editorHandler}
                      dataHandler={dataHandler}
                    />
                  </div>
                </>
              );
            }
          },
        })}
      </div>

      {/*모달*/}
      {condition === 'approval' ? (
        <OrgChart
          initData={''}
          view={'user'}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          confirmHandler={setOrgUseId}
        />
      ) : (
        <OrgChart
          initData={''}
          view={'user'}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          confirmHandler={setRecRef}
        />
      )}
    </>
  );
}
