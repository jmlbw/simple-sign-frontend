import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'html-react-parser';

export default function DetailForm(props) {
  const [default_form, setDefaultForm] = useState('');
  const [userName, setUserName] = useState('');
  const [deptName, setDeptName] = useState('');
  const [productNum, setProductNum] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [createdAt, setCreatedAt] = useState('');
  const [enforcementDate, setEnforcementDate] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/approve/detail/${props.approval_doc_id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setUserName(json.userName);
        setDeptName(json.deptName);
        setProductNum(json.productNum);
        setTitle(json.approvalDocTitle);
        setCreatedAt(json.createdAt);
        setEnforcementDate(json.enforcementDate);
        setContents(json.contents);
        setIsLoading(false);
      });

    console.error = (function (_error) {
      return function (message, ...args) {
        if (
          typeof message !== 'string' ||
          message.indexOf('component is `contentEditable`') === -1
        ) {
          _error.apply(console, args);
        }
      };
    })(console.error);
  }, []);

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
                    <div
                      id="approval_line"
                      contentEditable="false"
                      suppressContentEditableWarning={true}
                    >
                      결재라인입니다.
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id === 'doc_num') {
                  return (
                    <div id="doc_num" contentEditable="false">
                      {productNum}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id === 'drafting_time') {
                  return (
                    <div id="drafting_time" contentEditable="false">
                      {createdAt}
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
                    <div id="form_title" contentEditable="false">
                      {title}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'enforce_date') {
                  return (
                    <div id="enforce_date" contentEditable="false">
                      {enforcementDate}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'enforcer') {
                  return <div id="enforcer" contentEditable="false"></div>;
                }
              },
            })}
          </div>
          <br />
          <hr />
          <div>{ReactHtmlParser(contents)}</div>
        </>
      )}
    </>
  );
}
