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

export default function UpdateForm({
  approval_doc_id,
  handleSelectTimeChange,
  handleSelectBoxChange,
  dataHandler,
  editorHandler,
  titleRef,
  org_use_id,
  setOrgUseId,
}) {
  const [default_form, setDefaultForm] = useState('');
  const [userName, setUserName] = useState('');
  const [deptName, setDeptName] = useState('');
  const [productNum, setProductNum] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [createdAt, setCreatedAt] = useState('');
  const [enforcementDate, setEnforcementDate] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [form_code, setFormCode] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [approval_line, setApprovalLine] = useState('');
  const [dataParent, setDataParent] = useState([]);
  const [condition, setCondition] = useState('rec_ref');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    //결재문서 상세조회
    getApprovalDoc(approval_doc_id)
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setUserName(json.userName);
        setDeptName(json.deptName);
        setProductNum(json.productNum);
        setTitle(json.approvalDocTitle);
        setCreatedAt(moment(json.createdAt));
        setEnforcementDate(moment(json.enforcementDate));
        setContents(json.contents);
        setFormCode(json.formCode);
        setApprovalLine(json.approvalLineList);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });

    if (form_code !== 0) {
      getSequenceList(form_code).then((json) => {
        setSequence(json);
      });
    }
    if (approval_line.length !== 0) {
      approval_line.map((data, id) => {
        if (data.userId) {
          const updateOrgUse = [...org_use_id, data.userId];
          setOrgUseId(updateOrgUse);
        }
      });
    }

    deleteContentEditableError();
  }, [form_code]);

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

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
                            {approval_line.length > 0
                              ? approval_line[0].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 1
                              ? approval_line[1].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 2
                              ? approval_line[2].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 3
                              ? approval_line[3].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 4
                              ? approval_line[4].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 5
                              ? approval_line[5].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 6
                              ? approval_line[6].userName
                              : ''}
                          </td>
                          <td>
                            {approval_line.length > 7
                              ? approval_line[7].userName
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
                        onChange={handleSelectTimeChange}
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
                        onChange={handleSelectTimeChange}
                        baseDate={enforcementDate}
                      />
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'enforcer') {
                  return <div id="enforcer" contentEditable="false"></div>;
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
        </>
      )}

      {/*모달*/}
      <PopUp
        title="조직도"
        width="1300px"
        height="600px"
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        children={
          condition === 'approval' ? (
            <>
              <OrgChart view={'user'} onDataUpdate={setApprovalLine} />
              <PopUpFoot buttons={BlueAndGrayBtn} />
            </>
          ) : (
            <>
              <OrgChart view={'user'} onDataUpdate={setDataParent} />
              <PopUpFoot buttons={BlueAndGrayBtn} />
            </>
          )
        }
      />
    </>
  );
}
