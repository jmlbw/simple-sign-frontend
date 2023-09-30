import React, { useEffect, useState } from 'react';
import styled from '../styles/pages/SeqManagePage.module.css';
import SeqDetail from '../components/seqManage/seqDetail/SeqDetail';
import { usePage } from '../contexts/PageContext';
import SeqSearchBox from '../components/seqManage/searchBox/SeqSearchBox';
import SeqListArea from '../components/seqManage/seqList/SeqListArea';
import getCompanyList from '../apis/commonAPI/getCompanyList';
import { useSeqManage } from '../contexts/SeqManageContext';
import getSeqAndCompList from '../apis/commonAPI/getSeqAndCompList';

export default function SeqManagePage() {
  const { state, setState } = usePage();
  const [formListData, setFormListData] = useState([]);
  const { searchData, setSearchData, setData, setSetData } = useSeqManage();

  useEffect(() => {
    //페이지 데이터 셋팅
    setState({ ...state, curPage: 'SeqManage' });

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

  useEffect(() => {
    setState({ ...state, curPage: 'SeqManage' });
  }, []);

  // 검색 및 테이블 데이터 셋팅
  const searchHandler = () => {
    getSeqAndCompList(searchData)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setFormListData(data);
      })
      .catch((err) => {
        if (err.message === '404') {
          alert('검색된 채번이 없습니다.');
        }
      });
  };

  return (
    <div className={styled.container}>
      <SeqSearchBox searchHandler={searchHandler} />
      <div className={styled.contentArea}>
        <div className={styled.formListArea}>
          <SeqListArea rows={formListData} />
        </div>
        <div className={styled.formDetailArea}>
          <SeqDetail />
        </div>
      </div>
    </div>
  );
}
