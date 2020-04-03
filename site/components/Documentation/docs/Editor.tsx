import { readFileSync } from 'fs';
import * as React from 'react' ;
import { Editor, EditorProps, TypeEditorLanguage } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

import 'brace/mode/css';
import 'brace/mode/glsl';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/jsx';
import 'brace/mode/markdown';
import 'brace/mode/svg';
import 'brace/mode/tsx';
import 'brace/mode/typescript';

const snippets: {
  [key in TypeEditorLanguage]: string;
} = {
  css: readFileSync(__dirname + '/../../../../src/Tab/Tabs.css', 'utf8'),
  glsl: readFileSync(__dirname + '/snippets/glsl.glsl', 'utf8'),
  html: readFileSync(__dirname + '/../../../index.html', 'utf8'),
  javascript: readFileSync(__dirname + '/snippets/javascript.js', 'utf8'),
  json: readFileSync(__dirname + '/snippets/json.json', 'utf8'),
  jsx: readFileSync(__dirname + '/snippets/jsx.txt', 'utf8'),
  markdown: readFileSync(__dirname + '/../../../../CHANGELOG.md', 'utf8'),
  svg: readFileSync(__dirname + '/../../../assets/P-day.svg', 'utf8'),
  tsx: readFileSync(__dirname + '/../../Root.tsx', 'utf8'),
  typescript: readFileSync(__dirname + '/../../../../src/hooks/useResizeObserver.ts', 'utf8'),
};

const Item: CatalogueItem<{
  Editor: EditorProps;
}> = {
  name: 'Editor',
  description: 'A code editor component powered by Ace Editor.',
  pictogram: require('../../../assets/pictogram-editor.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Editor { ...props.Editor }
            height="400px"
            value={ snippets[props.Editor.language] } />
      </Showcase>
    ),
    state: {
      Editor: {
        language: 'javascript',
        onChange: () => {},
        value: '',
      },
    },
  },
  apis: [{
    module: '"Editor/Editor"',
    name: 'EditorProps',
    rename: 'Editor',
  }],
};

export default Item;
