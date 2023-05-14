import {
  CodeBlock,
  CodeBlockProps,
  CodeWindowProps,
  CodeWindow,
} from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramCode';
import { snippets } from './snippets';

const Item: CatalogueItem<{
  CodeBlock: CodeBlockProps;
  CodeWindow: CodeWindowProps;
}> = {
  name: 'Code',
  description: 'A syntax highlighting code block component.',
  Pictogram,
  apis: [
    {
      module: '"Code/CodeWindow"',
      name: 'CodeWindowProps',
      rename: 'CodeWindow',
    },
    {
      module: '"Code/CodeBlock"',
      name: 'CodeBlockProps',
      rename: 'CodeBlock',
    },
  ],
  showcase: {
    state: {
      CodeBlock: {
        language: 'typescript',
        wrap: true,
      },
      CodeWindow: {},
    },
    Component: (props) => (
      <CodeWindow size="x3" width="100%">
        <CodeBlock {...props.CodeBlock}>
          {snippets[props.CodeBlock.language]}
        </CodeBlock>
      </CodeWindow>
    ),
    code: `
import { CodeBlock, CodeWindow } from 'preshape';

<CodeWindow>
  <CodeBlock language="tsx">
      ...
  </CodeBlock>
</CodeWindow>
    `,
  },
};

export default Item;
