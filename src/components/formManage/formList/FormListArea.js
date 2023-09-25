import InnerBox from '../../common/InnerBox';
import DataList from './DataList';
import { columns } from '../../../assets/datas/form_manage_list';
import getFormDetail from '../../../apis/commonAPI/getFormDetail';
import { useFormManage } from '../../../contexts/FormManageContext';
import React from 'react';
import Button from '../../common/Button';

export default function FormListArea({ rows }) {
  const { detailData, setDetailData } = useFormManage();

  const dataHandler = (data) => {
    getFormDetail(data.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setDetailData({ ...detailData, ...res, compName: data.compName });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <InnerBox
      text={'양식목록'}
      width={'100%'}
      height={'100%'}
      titleChildren={<Button label={'삭제'} btnStyle={'gray_btn'} />}
      childStyle={{ width: '100%', height: '100%' }}
      children={
        <DataList rows={rows} columns={columns} dataHandler={dataHandler} />
      }
    />
  );
}
