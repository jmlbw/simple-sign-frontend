import React, { useContext, useEffect, useState, useCallback } from 'react';
import '../styles/pages/FormManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import PageContext from '../contexts/PageContext';
import { columns, fields, rows } from '../assets/datas/form_sample_data';
import getCompanyList from '../apis/commonAPI/getCompanyList';

export default function FormManagePage() {
  const defaultOptionList = [
    {
      id: 'compName',
      asset1: '회사',
      asset2: 'select',
      data: [],
    },
    {
      id: 'status',
      asset1: '사용여부',
      asset2: 'select',
      data: [
        { id: 1, name: '예' },
        { id: 2, name: '아니요' },
      ],
    },
    { id: 'formName', asset1: '양식명', asset2: 'text', data: [] },
  ];

  const searchInitData = {
    compName: '',
    formName: '',
    status: 1,
  };

  const [searchOptionList, setSearchOptionList] = useState(defaultOptionList);
  const [searchData, setSearchData] = useState(searchInitData);

  const { state, setState } = useContext(PageContext);

  useEffect(() => {
    setState({ ...state, curPage: 'FormManage' });

    getCompanyList()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        searchOptionList[0].data = data;
        setSearchOptionList([...searchOptionList]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const searchDataHandler = (id, value) => {
    console.log('update', id, value);
    setSearchData({ ...searchData, [id]: value });
  };

  const searchEventHandler = () => {
    console.log('search');
    console.log('searchData:', searchData);
  };

  return (
    <div className="form_manage_container">
      <SearchBox
        searchOptions={searchOptionList}
        dataHandler={searchDataHandler}
        searchHandler={searchEventHandler}
      ></SearchBox>
      <div className="form_data_area">
        <div className="form_list_area">
          <FormList
            title={'양식목록'}
            columns={columns}
            fields={fields}
            rows={rows}
          />
        </div>
        <div className="form_detail_area">
          <FormDetail title={'양식상세'} />
        </div>
      </div>
    </div>
  );
}
