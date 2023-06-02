import classnames from 'classnames';
import { DateTime, Interval } from 'luxon';
import React from 'react';
import { Box, BoxProps } from '../Box/Box';

interface Props extends Omit<BoxProps, 'dateTime' | 'onSelect'> {
  dateTime: DateTime;
  onSelect?: (dateTime: DateTime) => void;
  selectedStartDateTime: DateTime | null;
  selectedEndDateTime: DateTime | null;
  earliestSelectableDate?: DateTime;
  latestSelectableDate?: DateTime;
}

const DatePickerDay: React.FC<Props> = ({
  dateTime,
  onSelect,
  selectedStartDateTime,
  selectedEndDateTime,
  earliestSelectableDate,
  latestSelectableDate,
  ...rest
}) => {
  const isToday = dateTime.hasSame(DateTime.now(), 'day');

  const isWeekStart = dateTime.weekday === 1;
  const isWeekEnd = dateTime.weekday === 7;

  const isSelectedStart = selectedStartDateTime?.hasSame(dateTime, 'day');
  const isSelectedEnd = selectedEndDateTime?.hasSame(dateTime, 'day');
  const isSelectedMiddle =
    selectedStartDateTime &&
    selectedEndDateTime &&
    Interval.fromDateTimes(selectedStartDateTime, selectedEndDateTime).contains(
      dateTime
    );

  const disabled =
    !onSelect ||
    (earliestSelectableDate && dateTime < earliestSelectableDate) ||
    (latestSelectableDate && dateTime > latestSelectableDate);

  const classes = classnames('DatePicker__day', {
    'DatePicker__day--disabled': disabled,
    'DatePicker__day--has-range-selection': selectedEndDateTime,
    'DatePicker__day--selected-middle': isSelectedMiddle,
    'DatePicker__day--selected-start': isSelectedStart,
    'DatePicker__day--selected-end': isSelectedEnd,
    'DatePicker__day--today': isToday,
    'DatePicker__day--week-start': isWeekStart,
    'DatePicker__day--week-end': isWeekEnd,
  });

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      className={classes}
      container
      flex="vertical"
      paddingHorizontal="x1"
      onClick={!disabled && onSelect ? () => onSelect(dateTime) : undefined}
      transitionProperty="background-color"
    >
      <Box
        absolute="edge-to-edge"
        alignChildren="middle"
        borderRadius="full"
        className="DatePicker__day-number"
        flex="vertical"
        grow
        transitionProperty="background-color"
      >
        {dateTime.day}
      </Box>
    </Box>
  );
};

export default DatePickerDay;
