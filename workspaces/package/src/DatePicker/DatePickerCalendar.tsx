import { DateTime } from 'luxon';
import { Grid } from '../Grid/Grid';
import { Text, TextProps } from '../Text/Text';
import DatePickerDay from './DatePickerDay';

interface Props extends Omit<TextProps, 'dateTime' | 'onChange'> {
  dateTime: DateTime;
  onChange: (startDate: string, endDate: string) => void;
  selectedStartDateTime: DateTime;
  selectedEndDateTime: DateTime;
  range?: boolean;
  latestSelectableDate?: DateTime;
  earliestSelectableDate?: DateTime;
}

const DatePickerCalendar: React.FC<Props> = ({
  dateTime,
  onChange,
  selectedStartDateTime,
  selectedEndDateTime,
  range,
  latestSelectableDate,
  earliestSelectableDate,
  ...rest
}) => {
  const prependDays = (dateTime.weekday - 1) % 7;
  const daysInMonth = dateTime.daysInMonth ?? 30;
  const appendDays = Math.max(
    7 - dateTime.endOf('month').weekday,
    42 - prependDays - daysInMonth
  );

  const handleSelectDate = (dateTime: DateTime) => {
    if (!range || !selectedStartDateTime.equals(selectedEndDateTime)) {
      return onChange(
        dateTime.toFormat('yyyy-MM-dd'),
        dateTime.toFormat('yyyy-MM-dd')
      );
    }

    if (dateTime < selectedStartDateTime) {
      return onChange(
        dateTime.toFormat('yyyy-MM-dd'),
        selectedStartDateTime.toFormat('yyyy-MM-dd')
      );
    }

    return onChange(
      selectedStartDateTime.toFormat('yyyy-MM-dd'),
      dateTime.toFormat('yyyy-MM-dd')
    );
  };

  return (
    <Text {...rest} flex="vertical" grow size="x3" strong uppercase>
      <Grid margin="x2" repeat="7" repeatWidth="1fr">
        <Text align="middle">Mon</Text>
        <Text align="middle">Tue</Text>
        <Text align="middle">Wed</Text>
        <Text align="middle">Thu</Text>
        <Text align="middle">Fri</Text>
        <Text align="middle">Sat</Text>
        <Text align="middle">Sun</Text>
      </Grid>

      <Grid gapVertical="x1" grow repeat="7" repeatWidth="1fr" rowSize="1fr">
        {Array.from({ length: prependDays }).map((_, index) => (
          <DatePickerDay
            dateTime={dateTime.plus({ days: (prependDays - index) * -1 })}
            key={dateTime.month + (prependDays - index) * -1}
            selectedStartDateTime={selectedStartDateTime}
            selectedEndDateTime={selectedEndDateTime}
            earliestSelectableDate={earliestSelectableDate}
            latestSelectableDate={latestSelectableDate}
          />
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => (
          <DatePickerDay
            dateTime={dateTime.plus({ days: index })}
            key={dateTime.month + index}
            onSelect={handleSelectDate}
            selectedStartDateTime={selectedStartDateTime}
            selectedEndDateTime={selectedEndDateTime}
            earliestSelectableDate={earliestSelectableDate}
            latestSelectableDate={latestSelectableDate}
          />
        ))}

        {Array.from({ length: appendDays }).map((_, index) => (
          <DatePickerDay
            dateTime={dateTime.plus({ days: daysInMonth + index })}
            key={dateTime.month + daysInMonth + index}
            selectedStartDateTime={selectedStartDateTime}
            selectedEndDateTime={selectedEndDateTime}
            earliestSelectableDate={earliestSelectableDate}
            latestSelectableDate={latestSelectableDate}
          />
        ))}
      </Grid>
    </Text>
  );
};

export default DatePickerCalendar;
