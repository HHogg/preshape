import * as React from 'react';
import { BoxProps } from '../Box/Box';
import './Editor.css';
export declare type TypeEditorLanguage = 'css' | 'glsl' | 'html' | 'javascript' | 'json' | 'jsx' | 'markdown' | 'svg' | 'tsx' | 'typescript';
/**
 * Code editing component powered by Ace Editor.
 */
export interface EditorProps extends BoxProps {
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
declare const Editor: React.FC<EditorProps>;
export default Editor;
//# sourceMappingURL=Editor.d.ts.map