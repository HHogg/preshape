import * as React from 'react';
import ace from 'brace';
import useResizeObserver from '../hooks/useResizeObserver';
import Box from '../Box/Box';
import './Editor.css';
// Define has no definition.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const define = ace.define;
define('ace/theme/preshape', (_, exports) => {
    exports.isDark = true;
    exports.cssClass = 'ace-preshape';
});
const Editor = (props) => {
    const { language, onChange, value, ...rest } = props;
    const ref = React.useRef(null);
    const refEditor = React.useRef();
    const [size, refContainer] = useResizeObserver();
    React.useLayoutEffect(() => {
        if (ref.current) {
            refEditor.current = ace.edit(ref.current);
            refEditor.current.$blockScrolling = Infinity;
            refEditor.current.setOptions({ tabSize: 2, useSoftTabs: true });
            refEditor.current.setShowFoldWidgets(false);
            refEditor.current.setShowPrintMargin(false);
            refEditor.current.setTheme('ace/theme/preshape');
            refEditor.current?.getSession().setMode(`ace/mode/${language}`);
            refEditor.current.getSession().setUndoManager(new ace.UndoManager());
        }
    }, []);
    React.useEffect(() => {
        refEditor.current?.resize();
    }, [size]);
    React.useEffect(() => {
        if (value !== refEditor.current?.getValue()) {
            refEditor.current?.setValue(value, 1);
        }
    }, [value]);
    React.useEffect(() => {
        refEditor.current?.getSession().setMode(`ace/mode/${language}`);
    }, [language]);
    React.useEffect(() => {
        const handleChange = () => {
            if (onChange) {
                onChange(refEditor.current?.getValue() || '');
            }
        };
        if (refEditor.current) {
            refEditor.current.on('change', handleChange);
        }
        return () => {
            if (refEditor.current) {
                refEditor.current.off('change', handleChange);
            }
        };
    }, [onChange]);
    return (React.createElement(Box, Object.assign({}, rest, { className: "Editor", container: true, grow: true, ref: refContainer }),
        React.createElement(Box, { absolute: "edge-to-edge", flex: "vertical" },
            React.createElement(Box, { grow: true, ref: ref }))));
};
export default Editor;
//# sourceMappingURL=Editor.js.map