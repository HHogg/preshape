import * as React from 'react' ;
import { CodeBlock, CodeBlockProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';
import { snippets } from './Editor';

const Item: CatalogueItem<{
  CodeBlock: CodeBlockProps;
}> = {
  name: 'Code',
  description: 'A syntax highlighting code block component.',
  pictogram: require('../../../assets/pictogram-code.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <CodeBlock { ...props.CodeBlock }>
          { snippets[props.CodeBlock.language] }
        </CodeBlock>
      </Showcase>
    ),
    state: {
      CodeBlock: {
        language: 'javascript',
        wrap: true,
      },
    },
  },
  apis: [{
    module: '"Code/CodeBlock"',
    name: 'CodeBlockProps',
    rename: 'CodeBlock',
  }],
};

export default Item;
