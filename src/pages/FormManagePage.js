import React, { useContext, useEffect, useState, useCallback } from 'react';
import '../styles/pages/FormManagePage.css';
import FormSearchBox from '../components/formManage/searchBox/FormSearchBox';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import getCompanyList from '../apis/commonAPI/getCompanyList';
import getFormAndCompList from '../apis/commonAPI/getFormAndCompList';
import { useFormManage } from '../contexts/FormManageContext';
import { usePage } from '../contexts/PageContext';
import FormListArea from '../components/formManage/formList/FormListArea';

export default function FormManagePage() {
  const [formListData, setFormListData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const { searchData, setSearchData, setData, setSetData } = useFormManage();
  const { state, setState } = usePage();

  useEffect(() => {
    //페이지 데이터 셋팅
    setState({ ...state, curPage: 'FormManage' });

    //회사명, 기본 데이터 셋팅
    getCompanyList()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchData({ ...searchData, compName: data[0].name });
        setSetData({ ...setData, compList: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // 검색 및 테이블 데이터 셋팅
  const searchHandler = () => {
    getFormAndCompList(searchData)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFormListData(data);
      })
      .catch((err) => {});
  };

  return (
    <div className="form_manage_container">
      <FormSearchBox searchHandler={searchHandler} />
      <div className="form_data_area">
        <div className="form_list_area">
          <FormListArea rows={formListData} />
        </div>
        <div className="form_detail_area">
          <FormDetail />
        </div>
      </div>
    </div>
  );
}
