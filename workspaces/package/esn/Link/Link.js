import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';
import Text from '../Text/Text';
import './Link.css';
const isModifiedEvent = (event) => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = React.forwardRef((props, ref) => {
    const { active, navigate, target, to, isTextLink, ...rest } = props;
    const classes = classnames('Link', {
        'Link--active': active,
        'Link--text-link': isTextLink,
    });
    if (to) {
        return (React.createElement(RouterLink, Object.assign({}, props, { component: Link, ref: ref, to: to })));
    }
    if (navigate) {
        rest.onClick = (event) => {
            if (props.onClick) {
                props.onClick(event);
            }
            // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js
            if (!event.defaultPrevented && // onClick prevented default
                event.button === 0 && // ignore everything but left clicks
                (!target || target === '_self') && // let browser handle "target=_blank" etc.
                !isModifiedEvent(event) // ignore clicks with modifier keys
            ) {
                event.preventDefault();
                navigate();
            }
        };
    }
    return (React.createElement(Text, Object.assign({}, rest, { className: classes, ref: ref, tag: "a", target: target })));
});
export default Link;
//# sourceMappingURL=Link.js.map