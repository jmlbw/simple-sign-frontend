import React, { useState, useEffect } from 'react';
import styled from '../../../styles/components/home/RecommendForm.module.css';
import { GrDocumentText } from 'react-icons/gr';
import getFavorites from '../../../apis/approvalManageAPI/getFavorites';
import { useLoading } from '../../../contexts/LoadingContext';
import { IoIosMore } from 'react-icons/io';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    showLoading();
    getFavorites()
      .then((res) => {
        setFavorites(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoading();
      });
  }, []);

  function goFormList() {
    navigate(`/FL?name=${'결재하기'}`);
  }

  const firstThreeFavorites = favorites.slice(0, 3);

  return (
    <div className={styled.favoritescontainer}>
      {firstThreeFavorites.map((ele, index) => (
        <div className={`styled.favoriteSection${index + 1}`}>
          <RecommentContent
            icon={<HiOutlineDocumentText />}
            name={ele.formName}
            formCode={ele.formCode}
          />
        </div>
      ))}

      <div className={styled.favoriteSection4}>
        <IoIosMore
          fontSize="30px"
          color="#98a6ad"
          onClick={() => goFormList()}
        />
      </div>
    </div>
  );
}

function RecommentContent({ icon, name, formCode }) {
  return (
    <Link to={`./FL/${formCode}`} className={styled.recommentContentBox}>
      <div className={styled.contenticonF}>{icon}</div>
      <div className={styled.contenttextF}>{name}</div>
    </Link>
  );
}
