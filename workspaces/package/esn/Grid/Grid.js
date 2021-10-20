import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './Grid.css';
const Grid = (props, ref) => {
    const { alignChildren, className, gap, gapHorizontal = gap, gapVertical = gap, repeat = 'auto-fit', repeatWidth = 'max-content', repeatWidthMax = '1fr', repeatWidthMin, rowSize = 'max-content', ...rest } = props;
    const classes = classnames('Grid', {
        [`Grid--align-${alignChildren}`]: alignChildren,
        [`Grid--gap-horizontal-${gapHorizontal}`]: gapHorizontal,
        [`Grid--gap-vertical-${gapVertical}`]: gapVertical,
    }, className);
    const style = {
        gridTemplateColumns: `repeat(${repeat}, ${repeatWidthMin ? `minmax(${repeatWidthMin}, ${repeatWidthMax})` : repeatWidth})`,
        gridAutoRows: rowSize,
        ...rest.style,
    };
    return (React.createElement(Box, Object.assign({}, rest, { className: classes, ref: ref, style: style })));
};
export default React.forwardRef(Grid);
//# sourceMappingURL=Grid.js.map