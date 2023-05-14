import { DateTime } from 'luxon';
import Box from '../Box/Box';
import * as Icons from '../Icon';
import Label from '../Label/Label';
import Text, { TextProps } from '../Text/Text';
import React, { forwardRef } from 'react';
import useValidDateInputs from './useValidDateInputs';

interface DateRangeTextProps extends TextProps {
  /**
   * The start date that has been selected. When not a range
   * selection, this is the single selected date
   */
  startDate?: string;
  /**
   * The end date that has been selected. When not a range
   * selection, this is the single selected date
   */
  endDate?: string;
}

const DateRangeText: React.ForwardRefRenderFunction<any, DateRangeTextProps> =
  ({ endDate: dirtyEndDate, startDate: dirtyStartDate, ...rest }) => {
    const [startDateTime, endDateTime] = useValidDateInputs(
      dirtyStartDate,
      dirtyEndDate
    );

    let dateContent;

    if (dirtyStartDate && startDateTime?.equals(endDateTime)) {
      dateContent = (
        <Box alignChildren="middle" flex="horizontal" gap="x2">
          <Label
            backgroundColor="accent-shade-1"
            flex="horizontal"
            gap="x1"
            textColor="text-shade-1"
          >
            <Icons.Calendar />
            <Text>{startDateTime.toLocaleString(DateTime.DATE_FULL)}</Text>
          </Label>
        </Box>
      );
    } else if (dirtyStartDate && dirtyEndDate) {
      dateContent = (
        <Box alignChildren="middle" flex="horizontal" gap="x2">
          <Label
            backgroundColor="accent-shade-1"
            flex="horizontal"
            gap="x1"
            textColor="text-shade-1"
          >
            <Icons.Calendar />
            <Text>{startDateTime.toLocaleString(DateTime.DATE_FULL)}</Text>
          </Label>
          <Text>-</Text>
          <Label
            backgroundColor="accent-shade-1"
            flex="horizontal"
            gap="x1"
            textColor="text-shade-1"
          >
            <Icons.Calendar />
            <Text>{endDateTime.toLocaleString(DateTime.DATE_FULL)}</Text>
          </Label>
        </Box>
      );
    }

    return (
      <Text flex="horizontal" {...rest} gap="x2" size="x3" strong wrap>
        {dateContent}
      </Text>
    );
  };

export default forwardRef(DateRangeText);
