import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '../../styles/components/sidebar/Button.module.css';
import { usePage } from '../../contexts/PageContext';

export default function BasicButton({ name, goApproval }) {
  const { setState: setPageState } = usePage();

  const handleClick = () => {
    setPageState((prevState) => ({
      ...prevState,
      curPage: name,
    }));

    if (goApproval) {
      goApproval();
    }
  };

  return (
    <Stack spacing={2} direction="row" className={styled.button}>
      <Button variant="contained" className={styled.name} onClick={handleClick}>
        <span className={styled.font}>{name}</span>
      </Button>
    </Stack>
  );
}
