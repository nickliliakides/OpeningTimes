import { FC, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button, Paper, Typography } from '@mui/material';
import DaySlot from './DaySlot';
import { defaultState } from '../constants';
import { DayStateType, OpeningHoursStateType } from '../types';
import { lsMapper } from '../utils';

const OpeningHours: FC = () => {
  const [lsValue, setLsValue] = useLocalStorage<OpeningHoursStateType>(
    'Opening Times',
    defaultState
  );
  const [state, setState] = useState<OpeningHoursStateType>(lsMapper(lsValue));

  return (
    <Paper
      elevation={3}
      sx={{
        boxShadow: 1,
        py: 1,
        px: { md: 1 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          my: 4,
          textAlign: 'center',
          color: 'text.primary',
        }}
      >
        Opening Hours
      </Typography>
      {Object.values(state).map((d: DayStateType) => {
        return (
          <DaySlot
            key={d.label}
            day={d}
            setOpeningHoursState={setState}
          ></DaySlot>
        );
      })}
      <Button
        variant='contained'
        sx={{ mr: 2, mb: 2, mt: 1, alignSelf: 'flex-end' }}
        onClick={() => setLsValue(state)}
      >
        Save Changes
      </Button>
    </Paper>
  );
};

export default OpeningHours;
