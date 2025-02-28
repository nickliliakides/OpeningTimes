import { ChangeEvent, FC } from 'react';
import { FormControlLabel, Grid2 } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DaySlotType } from '../types';
import dayjs from 'dayjs';

const DaySlot: FC<DaySlotType> = ({ day, setOpeningHoursState }) => {
  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>
    e.target.checked
      ? setOpeningHoursState((currentState) => ({
          ...currentState,
          [day.label.toLowerCase()]: {
            ...currentState[day.label.toLowerCase()],
            displayTimes: true,
          },
        }))
      : setOpeningHoursState((currentState) => ({
          ...currentState,
          [day.label.toLowerCase()]: {
            ...currentState[day.label.toLowerCase()],
            displayTimes: false,
          },
        }));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid2
        container
        spacing={2}
        sx={{
          mx: 2,
          my: { xs: 1, md: 1.5 },
          p: 2,
          border: 1,
          borderColor: 'grey.500',
          borderRadius: '4px',
        }}
      >
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: 'flex', alignItems: 'center', md: { pl: 2 } }}
        >
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBoxChange}
                checked={!!day.displayTimes}
              />
            }
            label={day.label}
          />
        </Grid2>
        {day.displayTimes && (
          <>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <TimePicker
                onChange={(value) =>
                  setOpeningHoursState((currentState) => ({
                    ...currentState,
                    [day.label.toLowerCase()]: {
                      ...currentState[day.label.toLowerCase()],
                      open: value,
                    },
                  }))
                }
                defaultValue={day.open ? dayjs(day.open) : null}
                label='Opening Time'
                format='hh:mm a'
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <TimePicker
                onChange={(value) =>
                  setOpeningHoursState((currentState) => ({
                    ...currentState,
                    [day.label.toLowerCase()]: {
                      ...currentState[day.label.toLowerCase()],
                      close: value,
                    },
                  }))
                }
                label='Closing Time'
                format='hh:mm a'
                defaultValue={day.close ? dayjs(day.close) : null}
                minTime={day.open!}
              />
            </Grid2>
          </>
        )}
      </Grid2>
    </LocalizationProvider>
  );
};

export default DaySlot;
