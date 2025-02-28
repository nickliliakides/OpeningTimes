import { FC, useState } from 'react';
import { useParams } from 'react-router';
import { useLocalStorage } from 'usehooks-ts';
import { Box, Button, Link, Paper, Typography } from '@mui/material';

import DaySlot from './DaySlot';
import { defaultState } from '../constants';
import { DayStateType, LsStateType, OpeningHoursStateType } from '../types';
import { lsMapper, validateInputs } from '../utils';

const OpeningHours: FC = () => {
  const [lsValue, setLsValue] = useLocalStorage<LsStateType>(
    'Opening Times History',
    []
  );

  const { id } = useParams();

  const [state, setState] = useState<OpeningHoursStateType>(() => {
    if (id) {
      const currentHours = lsValue.find(
        (val) => val.createdAt.toString() === id
      );
      return currentHours ? lsMapper(currentHours.hours) : defaultState;
    }
    // display the most recently saved record from local storage(LS) where saved times are sorted from oldest to latest, instead of sorting. We do sort on History page where we need to display all LS records from latest to oldest
    return lsValue.length
      ? lsMapper(lsValue[lsValue.length - 1].hours)
      : defaultState;
  });

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
      <Typography sx={{ textAlign: 'center' }} variant='body1'>
        Please fill all active fields.
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link sx={{ ml: 2 }} href='/history'>
          Saved History
        </Link>
        <Button
          variant='contained'
          sx={{ mr: 2, mb: 2, mt: 1, alignSelf: 'flex-end' }}
          onClick={() =>
            setLsValue([...lsValue, { createdAt: Date.now(), hours: state }])
          }
          disabled={!validateInputs(state)}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
};

export default OpeningHours;
