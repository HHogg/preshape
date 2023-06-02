import { DateTime } from 'luxon';
import { DatePicker, DatePickerProps } from 'preshape';
import { useState } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramDatepicker';

const Item: CatalogueItem<{
  DatePicker: DatePickerProps;
}> = {
  name: 'DatePicker',
  description: 'Simple inline date range picker with a calendar view.',
  Pictogram,
  apis: [
    {
      module: '"DatePicker/DatePicker"',
      name: 'DatePickerProps',
      rename: 'DatePicker',
    },
  ],
  showcase: {
    state: {
      DatePicker: {
        onChange: () => null,
        range: true,
        earliestSelectableDate: DateTime.now()
          .startOf('year')
          .toJSDate()
          .toDateString(),
        latestSelectableDate: DateTime.now()
          .endOf('year')
          .toJSDate()
          .toDateString(),
      },
    },
    Component: (props) => {
      const dateStart = DateTime.now().startOf('month').plus({ days: 10 });
      const dateEnd = dateStart.plus({ days: 9 });

      const [{ startDate, endDate }, onChange] = useState({
        startDate: dateStart.toJSDate().toDateString(),
        endDate: dateEnd.toJSDate().toDateString(),
      });

      return (
        <DatePicker
          endDate={endDate}
          startDate={startDate}
          {...props.DatePicker}
          onChange={(startDate, endDate) => onChange({ startDate, endDate })}
        />
      );
    },
    code: `
import { DatePicker } from 'preshape';

<DatePicker
  endDate="04/04/2023"
  startDate"05/04/2023"
  onChange={() => {}}
  range
  earliestSelectableDate="01/01/2023"
  latestSelectableDate="31/12/2023"
/>
    `,
  },
};

export default Item;
