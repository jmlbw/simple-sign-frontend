import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
import Selectbox from '../../common/Selectbox';
import SelectDate from './components/SelectDate';
import { TinyEditor } from '../../common/TinyEditor';
import styled from '../../../styles/components/approvalManage/approvalRegist/ApprovalForm.module.css';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import OrgChart from '../../org/OrgChart';
import Optionbox from '../../common/Optionbox';
import Button from '../../common/Button';
import { useLoading } from '../../../contexts/LoadingContext';
import getForm from '../../../apis/approvalManageAPI/getForm';
import getSequenceList from '../../../apis/approvalManageAPI/getSequenceList';
import deleteContentEditableError from '../../../apis/approvalManageAPI/deleteContentEditableError';
import OptionboxItem from '../../common/OptionboxItem';

export default function ApprovalForm({
  form_code,
  main_form,
  setMainForm,
  userId,
  deptId,
  divRef,
  titleRef,
  rec_ref,
  setRecRef,
  org_use_list,
  setOrgUseId,
  dataHandler,
  editorHandler,
  handleSelectBoxChange,
  handleEnforcementTime,
  handleDraftingTime,
}) {
  const [sequence, setSequence] = useState([]);
  const [default_form, setDefaultForm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiveRefOpt, setReceiveRefOpt] = useState([]);
  const [condition, setCondition] = useState('rec_ref');
  const { showLoading, hideLoading } = useLoading();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleApprovalClick = () => {
    console.log('approval입니다');
    setCondition('approval');
    openModal();
  };

  const handleReceiveClick = () => {
    console.log('receive입니다');
    setCondition('receive');
    openModal();
  };

  useEffect(() => {
    showLoading();

    //양식 상세조회
    getForm(form_code)
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setMainForm(json.mainForm);
      })
      .finally(() => {
        hideLoading();
      });

    //채번리스트 조회
    getSequenceList(form_code).then((json) => {
      setSequence(json);
    });

    deleteContentEditableError();

    console.log(rec_ref);
    if (rec_ref.length !== 0) {
      // 새로운 상태 배열을 생성
      const updatedRecRefOpt = [];

      rec_ref.forEach((data, id) => {
        if (data.category == 'C') {
          updatedRecRefOpt.push(
            <OptionboxItem key={`C_${id}`} category={'C'} name={data.company} />
          );
        } else if (data.category == 'E') {
          updatedRecRefOpt.push(
            <OptionboxItem
              key={`E_${id}`}
              category={'E'}
              name={data.establishment}
            />
          );
        } else if (data.category == 'D') {
          updatedRecRefOpt.push(
            <OptionboxItem
              key={`D_${id}`}
              category={'D'}
              name={data.department}
            />
          );
        } else if (data.category == 'U') {
          updatedRecRefOpt.push(
            <OptionboxItem key={`U_${id}`} category={'U'} name={data.user} />
          );
        }
      });

      // 한 번에 상태를 설정
      setReceiveRefOpt(updatedRecRefOpt);
    }
  }, [form_code, rec_ref]);

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
                        {org_use_list.length > 0 ? org_use_list[0].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 1 ? org_use_list[1].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 2 ? org_use_list[2].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 3 ? org_use_list[3].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 4 ? org_use_list[4].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 5 ? org_use_list[5].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 6 ? org_use_list[6].user : ''}
                      </td>
                      <td>
                        {org_use_list.length > 7 ? org_use_list[7].user : ''}
                      </td>
                    </tr>
                  </table>
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'doc_num') {
              return (
                <Selectbox
                  selectList={sequence}
                  width={'300'}
                  height={'40'}
                  onChange={handleSelectBoxChange}
                />
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafting_time') {
              return <SelectDate handleSelectTimeChange={handleDraftingTime} />;
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter') {
              return (
                <div id="drafter" contentEditable="false">
                  {userId}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter_dept') {
              return (
                <div id="drafter_dept" contentEditable="false">
                  {deptId}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'form_title') {
              return (
                <div id="form_title" contentEditable="true" ref={titleRef}>
                  제목을 입력하세요
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforce_date') {
              return (
                <div id="enforce_date" contentEditable="true">
                  <SelectDate handleSelectTimeChange={handleEnforcementTime} />
                </div>
              );
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
            if (domNode.attribs && domNode.attribs.id == 'enforcer') {
              return (
                <div id="enforcer" contentEditable="true" ref={divRef}></div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'content') {
              return (
                <div id="content" className={styled.container}>
                  <TinyEditor
                    init={main_form}
                    editorHandler={editorHandler}
                    dataHandler={dataHandler}
                  />
                </div>
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
