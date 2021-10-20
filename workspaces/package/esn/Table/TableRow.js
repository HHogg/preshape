import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
const TableRow = (props, ref) => {
    const { active, clickable, ...rest } = props;
    const classes = classnames('Table__row', {
        'Table__row--active': active,
        'Table__row--clickable': clickable,
    });
    return (React.createElement(Box, Object.assign({}, rest, { className: classes, clickable: clickable, ref: ref, tag: "tr" })));
};
export default React.forwardRef(TableRow);
//# sourceMappingURL=TableRow.js.map