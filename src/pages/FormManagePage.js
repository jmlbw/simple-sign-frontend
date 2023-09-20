import React, { useContext, useEffect, useState, useCallback } from 'react';
import '../styles/pages/FormManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import PageContext from '../contexts/PageContext';
import { columns, fields } from '../assets/datas/form_sample_data';
import getCompanyList from '../apis/commonAPI/getCompanyList';
import getFormAndCompList from '../apis/commonAPI/getFormAndCompList';

export default function FormManagePage() {
  const defaultOptionList = [
    {
      id: 'compName',
      asset1: '회사',
      asset2: 'select',
      data: [],
    },
    { id: 'formName', asset1: '양식명', asset2: 'text', data: [] },
    {
      id: 'status',
      asset1: '사용여부',
      asset2: 'select',
      data: [
        { id: 1, name: '예' },
        { id: 2, name: '아니요' },
      ],
    },
  ];

  const searchInitData = {
    compName: '',
    formName: '',
    status: 1,
  };

  const [searchOptionList, setSearchOptionList] = useState(defaultOptionList);
  const [searchData, setSearchData] = useState(searchInitData);
  const [formData, setFormData] = useState([]);

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

        setSearchData({
          compName: searchOptionList[0].data[0].name,
          formName: '',
          status: 1,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const searchDataHandler = (id, value) => {
    setSearchData({ ...searchData, [id]: value });
  };

  const searchEventHandler = () => {
    let requestData = {
      code: 0,
      compName: searchData.compName,
      formName: searchData.formName,
      status: searchData.status,
    };

    getFormAndCompList(requestData)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('search:', data);
        setFormData(data);
      })
      .catch((err) => {
        console.error(err);
      });
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
            rows={formData}
          />
        </div>
        <div className="form_detail_area">
          <FormDetail title={'양식상세'} />
        </div>
      </div>
    </div>
  );
}
