import * as React from 'react';
import ace from 'brace';
import useResizeObserver from '../hooks/useResizeObserver';
import Flex, { FlexProps } from '../Flex/Flex';
import './Editor.css';

// Define has no definition.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const define = (ace as any).define as (module: string, callback: (require: any, exports: any) => void) => void;

export type TypeEditorLanguage =
  'css' |
  'glsl' |
  'html' |
  'javascript' |
  'json' |
  'jsx' |
  'markdown' |
  'svg' |
  'tsx' |
  'typescript';

define('ace/theme/preshape', (_, exports) => {
  exports.isDark = true;
  exports.cssClass = 'ace-preshape';
});

/**
 * Code editing component powered by Ace Editor.
 */
export interface EditorProps extends FlexProps {
  /**
   * Language of the content to be edited. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   *
   * import 'ace/mode/javascript';
   **/
  language: TypeEditorLanguage;
  /** Callback for when the value changes */
  onChange?: (value: string) => void;
  /** Value for the content to be edited */
  value: string;
}

const Editor: React.FC<EditorProps> = (props) => {
  const { language, onChange, value, ...rest } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const refEditor = React.useRef<ace.Editor>();
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

  return (
    <Flex { ...rest }
        className="Editor"
        container
        grow
        ref={ refContainer }>
      <Flex absolute="fullscreen" direction="vertical">
        <Flex grow ref={ ref } />
      </Flex>
    </Flex>
  );
};

export default Editor;
