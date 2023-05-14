import { DateTime } from 'luxon';
import Box, { BoxProps } from '../Box/Box';
import Button from '../Button/Button';
import * as Icons from '../Icon';
import Text from '../Text/Text';
import React, { forwardRef, useEffect, useState } from 'react';
import DatePickerCalendar from './DatePickerCalendar';
import useValidDateInputs from './useValidDateInputs';
import './DatePicker.css';

/**
 * Simple inline date range picker with a calendar view.
 */
export interface DatePickerProps extends Omit<BoxProps, 'onChange'> {
  /** Change handler that is called when the selection changes */
  onChange: (startDate: string, endDate: string) => void;
  /**
   * The end date that has been selected. When not a range
   * selection, this is the single selected date
   */
  endDate?: string;
  /**
   * The start date that has been selected. When not a range
   * selection, this is the single selected date
   */
  startDate?: string;
  /**
   * Flag to change the behaviour from a single
   * selectable date to a range
   */
  withRangeDate?: boolean;

  /**
   * Flag to change if dates in the past can be
   * selected
   */
  withSelectablePast?: boolean;
}

const DatePicker: React.ForwardRefRenderFunction<any, DatePickerProps> = (
  {
    onChange,
    endDate: dirtyEndDate,
    startDate: dirtyStartDate,
    withRangeDate,
    withSelectablePast,
    ...rest
  },
  ref
) => {
  const [startDate, endDate] = useValidDateInputs(dirtyStartDate, dirtyEndDate);

  const [activeDateTime, setActiveDateTime] = useState(
    DateTime.now().startOf('month')
  );

  const handleChangeActiveDateTime = (direction: -1 | 1) => {
    setActiveDateTime(activeDateTime.plus({ months: direction }));
  };

  useEffect(() => {
    setActiveDateTime(startDate.startOf('month'));
  }, [startDate]);

  return (
    <Box flex="vertical" grow {...rest} ref={ref}>
      <Box alignChildren="middle" flex="horizontal" gap="x2" margin="x6">
        <Box>
          <Button
            borderRadius="full"
            onClick={() => handleChangeActiveDateTime(-1)}
            paddingHorizontal="x2"
            type="button"
            variant="tertiary"
          >
            <Icons.ChevronLeft />
          </Button>
        </Box>

        <Box grow minWidth="200px">
          <Text align="middle" size="x6" strong>
            {activeDateTime.toFormat('MMMM yyyy')}
          </Text>
        </Box>

        <Box>
          <Button
            borderRadius="full"
            onClick={() => handleChangeActiveDateTime(1)}
            paddingHorizontal="x2"
            type="button"
            variant="tertiary"
          >
            <Icons.ChevronRight />
          </Button>
        </Box>
      </Box>

      <Box flex="vertical" grow>
        <DatePickerCalendar
          dateTime={activeDateTime}
          onChange={onChange}
          selectedEndDateTime={endDate}
          selectedStartDateTime={startDate}
          withRangeDate={withRangeDate}
          withSelectablePast={withSelectablePast}
        />
      </Box>
    </Box>
  );
};

export default forwardRef(DatePicker);
