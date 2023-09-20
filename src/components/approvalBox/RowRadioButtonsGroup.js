import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="alldoc"
          control={<Radio size="small" />}
          label={<span style={{ fontSize: '12px' }}>모든문서</span>}
        />
        <FormControlLabel
          value="ongoingdoc"
          control={<Radio size="small" />}
          label={<span style={{ fontSize: '12px' }}>진행문서</span>}
        />
        <FormControlLabel
          value="writtendoc"
          control={<Radio size="small" />}
          label={<span style={{ fontSize: '12px' }}>종결문서</span>}
        />
      </RadioGroup>
    </FormControl>
  );
}
