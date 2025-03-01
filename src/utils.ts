import dayjs from 'dayjs';
import { DayStateType, OpeningHoursStateType } from './types';

export const lsMapper = (lsState: OpeningHoursStateType) => {
  const currentState: OpeningHoursStateType = {};
  Object.entries(lsState).forEach(([key, value]: [string, DayStateType]) => {
    currentState[key] = {
      ...lsState[key],
      open: dayjs(value.open) ?? null,
      close: dayjs(value.close) ?? null,
    };
  });

  return currentState;
};

export const validateInputs = (state: OpeningHoursStateType) => {
  let isValid = true;
  Object.values(state).forEach((value) => {
    if (
      value.displayTimes &&
      (!dayjs(value.open).isValid() || !dayjs(value.close).isValid())
    )
      isValid = false;
  });

  return isValid;
};
