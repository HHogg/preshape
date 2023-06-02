import { DateTime } from 'luxon';
import { forwardRef, useEffect, useState } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Button } from '../Button/Button';
import * as Icons from '../Icon';
import { Text } from '../Text/Text';
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
  range?: boolean;
  /**
   * The latest selectable date
   */
  latestSelectableDate?: string;
  /**
   * The earliest selectable date
   */
  earliestSelectableDate?: string;
}

export const DatePicker = forwardRef<any, DatePickerProps>(
  (
    {
      onChange,
      endDate: dirtyEndDate,
      startDate: dirtyStartDate,
      range,
      earliestSelectableDate: earliestSelectableDateString,
      latestSelectableDate: latestSelectableDateString,
      ...rest
    },
    ref
  ) => {
    const [startDate, endDate] = useValidDateInputs(
      dirtyStartDate,
      dirtyEndDate
    );

    const earliestSelectableDate = earliestSelectableDateString
      ? DateTime.fromJSDate(new Date(earliestSelectableDateString))
      : undefined;
    const latestSelectableDate = latestSelectableDateString
      ? DateTime.fromJSDate(new Date(latestSelectableDateString))
      : undefined;

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
            range={range}
            latestSelectableDate={latestSelectableDate}
            earliestSelectableDate={earliestSelectableDate}
          />
        </Box>
      </Box>
    );
  }
);
