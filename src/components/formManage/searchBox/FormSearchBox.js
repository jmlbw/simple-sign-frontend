import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import InnerBox from '../../common/InnerBox';
import React from 'react';
import {
  ItemBox,
  TextComp,
  InputComp,
  SelectComp,
} from './components/SearchItem';
import { useFormManage } from '../../../contexts/FormManageContext';
import React from 'react';

export default function FormSearchBox({ searchHandler }) {
  const { searchData, setSearchData, setData } = useFormManage();

  const compDataHandler = (e) => {
    setSearchData({ ...searchData, compName: e.target.value });
  };
  const statusDataHandler = (e) => {
    setSearchData({ ...searchData, status: e.target.value });
  };
  const formDataHandler = (e) => {
    setSearchData({ ...searchData, formName: e.target.value });
  };

  return (
    <InnerBox
      width={'100%'}
      children={
        <div className={styled.search_box_container}>
          <ItemBox
            children={
              <>
                <TextComp text={'회사'} />
                <SelectComp
                  width={'170px'}
                  options={setData.compList}
                  dataHandler={compDataHandler}
                />
              </>
            }
          ></ItemBox>
          <ItemBox
            children={
              <>
                <TextComp text={'사용여부'} />
                <SelectComp
                  width={'170px'}
                  options={setData.statusList}
                  dataHandler={statusDataHandler}
                />
              </>
            }
          ></ItemBox>
          <ItemBox
            children={
              <>
                <TextComp text={'양식명'} />
                <InputComp dataHandler={formDataHandler} />
              </>
            }
          ></ItemBox>
          <div>
            <AiOutlineSearch onClick={searchHandler} />
          </div>
        </div>
      }
    ></InnerBox>
  );
}
