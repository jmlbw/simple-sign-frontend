import SearchBox from '../components/common/SearchBox';
import InnerBox from '../components/common/InnerBox';
import styled from '../styles/pages/FormListPage.module.css';
import ApprovalRegist from './ApprovalRegistPage';
import FormListItem from '../components/approvalManage/formList/FormListItem';
import React, { useEffect, useState } from 'react';
import { useLoading } from '../contexts/LoadingContext';
import getFormList from '../apis/approvalManageAPI/getFormList';

export default function FormListPage() {
  const [formList, setFormList] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();

    //양식리스트 조회
    getFormList()
      .then((res) => {
        return res.json();
      })
      .then((json) => setFormList(json))
      .catch((e) => {
        console.error(e);
        hideLoading();
      })
      .finally(() => {
        hideLoading();
      });
  }, []);

  return (
    <div className={styled.align}>
      <div className={styled.left_box}>
        <SearchBox width="200px" />
        <InnerBox width="100%" height="100%">
          <FormListItem />
        </InnerBox>
      </div>
      <div className={styled.right_box}>
        <InnerBox width="100%" height="100%" text="전체양식" font_size="18px">
          {formList.map(({ formName, formExplain, formCode }) => {
            return (
              <ApprovalRegist
                width="100%"
                height="78px"
                form_name={formName}
                form_explain={formExplain}
                form_code={formCode}
              />
            );
          })}
        </InnerBox>
      </div>
    </div>
  );
}
