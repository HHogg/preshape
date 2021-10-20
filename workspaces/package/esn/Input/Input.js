import classnames from 'classnames';
import * as React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import './Input.css';
import { InputWrapperContext } from './InputWrapper';
const Input = (props, ref) => {
    const { size = 'x1', ...rest } = props;
    if (rest.disabled !== undefined) {
        // eslint-disable-next-line no-console
        console.error('Preshape [Input]: Pass "disabled" to InputWrapper');
    }
    const { disabled } = React.useContext(InputWrapperContext);
    const classes = classnames('Input', {
        [`Input--${size}`]: size,
    });
    return (React.createElement(Box, { basis: "0", grow: true },
        React.createElement(Text, Object.assign({}, rest, { className: classes, disabled: disabled, ref: ref, strong: true, tag: "input" }))));
};
export default React.forwardRef(Input);
//# sourceMappingURL=Input.js.map