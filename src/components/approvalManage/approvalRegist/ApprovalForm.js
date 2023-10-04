import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import ReactHtmlParser from 'html-react-parser';
import Selectbox from '../../common/Selectbox';
import SelectDate from './components/SelectDate';
import Editor from './components/Editor';
import { TinyEditor } from '../../common/TinyEditor';
import styled from '../../../styles/components/approvalManage/approvalRegist/ApprovalForm.module.css';

export default function ApprovalForm({
  form_code,
  dataHandler,
  editorHandler,
}) {
  const [sequence, setSequence] = useState([]);
  const [default_form, setDefaultForm] = useState('');
  const [main_form, setMainForm] = useState('');
  const [sequence_code, setSequenceCode] = useState('');
  const [drafting_time, setDraftingTime] = useState(new Date());
  const [enforce_date, setEnforceDate] = useState(new Date());
  const [userId, setUserId] = useState(1);
  const [deptId, setDeptId] = useState(1);
  const divRef = useRef(null);
  const titleRef = useRef(null);

  // 선택된 값이 변경될 때 호출될 함수
  const handleSelectBoxChange = (newValue) => {
    setSequenceCode(newValue);
  };
  const handleSelectTimeChange = (newValue) => {
    setDraftingTime(newValue);
  };
  const handleEnforceDateChange = (newValue) => {
    setEnforceDate(newValue);
  };
  const handleClick = () => {
    const data = {
      userId: userId,
      deptId: deptId,
      formCode: form_code,
      approvalDocTitle: titleRef.current.innerHTML,
      contents: main_form,
      docStatus: 'W',
      seqCode: sequence_code,
      approverList: [1, 2],
      receiveRefList: [3],
      createdAt: drafting_time,
      enforcementDate: enforce_date,
    };

    fetch(`http://localhost:8080/approve/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == '200') {
        alert('상신되었습니다.');
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/manage/form/detail/${form_code}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setMainForm(json.mainForm);
      });

    fetch(
      `http://localhost:8080/manage/form/seqTitleList?formCode=${form_code}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSequence(json);
      });
  }, [form_code]);

  return (
    <>
      <div>
        {ReactHtmlParser(default_form, {
          replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.id == 'approval_line') {
              return (
                <div id="approval_line" contentEditable="true">
                  결재라인입니다.
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
              return <SelectDate onChange={handleSelectTimeChange} />;
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
                  <SelectDate onChange={handleEnforceDateChange} />
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforcer') {
              return (
                <div id="enforcer" contentEditable="true" ref={divRef}></div>
              );
            }
          },
        })}
      </div>
      <div className={styled.container}>
        <TinyEditor
          init={main_form}
          editorHandler={editorHandler}
          dataHandler={dataHandler}
        />
      </div>
      <button onClick={handleClick}>상신하기</button>
    </>
  );
}
