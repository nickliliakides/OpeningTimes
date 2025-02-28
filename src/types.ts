import { Dayjs } from 'dayjs';

export type DaySlotType = {
  day: DayStateType;
  setOpeningHoursState: React.Dispatch<
    React.SetStateAction<OpeningHoursStateType>
  >;
};

export type DayStateType = {
  displayTimes: boolean;
  open: Dayjs | null;
  close: Dayjs | null;
  label: string;
};

export type OpeningHoursStateType = { [key: string]: DayStateType };
