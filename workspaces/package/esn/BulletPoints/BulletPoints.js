import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './BulletPoints.css';
const BulletPoints = (props, ref) => {
    const { numbered, ...rest } = props;
    const classes = classnames('BulletPoints', {
        'BulletPoints--numbered': numbered,
    });
    return (React.createElement(Box, Object.assign({}, rest, { className: classes, ref: ref, tag: numbered ? 'ol' : 'ul' })));
};
export default React.forwardRef(BulletPoints);
//# sourceMappingURL=BulletPoints.js.map