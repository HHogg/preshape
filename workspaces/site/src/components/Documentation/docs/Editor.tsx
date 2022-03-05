import React from 'react';
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

export const snippets: Record<TypeEditorLanguage, string> = {
  css: require('bundle-text:../../../../../package/src/Tab/Tabs.css'),
  glsl: require('bundle-text:./snippets/glsl.txt'),
  html: require('bundle-text:./snippets/html.txt'),
  javascript: require('bundle-text:./snippets/javascript.txt'),
  json: require('bundle-text:./snippets/json.txt'),
  jsx: require('bundle-text:./snippets/jsx.txt'),
  markdown: require('bundle-text:../../../../../../README.md'),
  svg: require('bundle-text:../../../assets/svgs/pictogram-p.svg'),
  tsx: require('bundle-text:./snippets/tsx.txt'),
  typescript: require('bundle-text:./snippets/ts.txt'),
};

const Item: CatalogueItem<{
  Editor: EditorProps;
}> = {
  name: 'Editor',
  description: 'A code editor component powered by Ace Editor.',
  pictogram: require('../../SVGs/PictogramEditor').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Editor
          {...props.Editor}
          height="400px"
          value={snippets[props.Editor.language]}
        />
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
  apis: [
    {
      module: '"Editor/Editor"',
      name: 'EditorProps',
      rename: 'Editor',
    },
  ],
};

export default Item;
