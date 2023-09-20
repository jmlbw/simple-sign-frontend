import SearchBox from '../components/common/SearchBox';
import InnerBox from '../components/common/InnerBox';
import styled from '../styles/pages/FormListPage.module.css';
import SmallBox from '../components/approvalManage/formList/SmallBox';
import FormListItem from '../components/approvalManage/formList/FormListItem';
import React from 'react';

export default function FormListPage() {
  const formList = [
    { form_name: 'name1', form_explain: 'explain1' },
    { form_name: 'name2', form_explain: 'explain2' },
    { form_name: 'name3', form_explain: 'explain3' },
    { form_name: 'name4', form_explain: 'explain4' },
    { form_name: 'name5', form_explain: 'explain5' },
    { form_name: 'name6', form_explain: 'explain6' },
  ];

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
          {formList.map(({ form_name, form_explain }) => {
            return (
              <SmallBox
                width="100%"
                height="78px"
                form_name={form_name}
                form_explain={form_explain}
              />
            );
          })}
        </InnerBox>
      </div>
    </div>
  );
}
