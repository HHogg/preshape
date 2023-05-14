import { DateTime } from 'luxon';
import { useMemo } from 'react';

const useValidDateInputs = (
  dirtyStartDate = DateTime.now().toFormat('yyyy-MM-dd'),
  dirtyEndDate = dirtyStartDate
): [DateTime, DateTime] => {
  return useMemo(() => {
    let startDate = DateTime.fromJSDate(new Date(dirtyStartDate));
    let endDate = DateTime.fromJSDate(new Date(dirtyEndDate));

    if (!startDate.isValid) startDate = DateTime.now();
    if (!endDate.isValid) endDate = DateTime.now();

    if (startDate > endDate) {
      [startDate, endDate] = [endDate, startDate];
    }

    return [startDate, endDate];
  }, [dirtyStartDate, dirtyEndDate]);
};

export default useValidDateInputs;
