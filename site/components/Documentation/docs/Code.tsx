import * as React from 'react' ;
import { CodeBlock, CodeBlockProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const css = `/**
 * CSS Example
 **/

  @charset "utf-8";

  .Button {
    padding: 8px 12px;
    border: 2px solid currentColor;
    color: #1E1B18;
  }
`;

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Preshape</title>
  </head>
  <body>
    <div class="Base Flex Flex--align-horz-middle Flex--align-vert-middle Flex--horizontal Flex--gap-x4">
      <div class="Base Flex">
        <div class="Base Text Text--strong">Lorem</div>
      </div>

      <div class="Base Flex">
        <div class="Base Text Text--strong">Ipsum</div>
      </div>
    </div>
  </body>
</html>`;

const js = `import Two from 'two.js';

// Javascript example

const two = new Two({
  autostart: true,
  type: 'CanvasRenderer',
  height: 600,
  width: 1000,
}).appendTo(document.getElementById('TwoContainer'));

const circle = two.makeCircle(72, 100, 50);
const square = two.makeRectangle(213, 100, 100, 100);`;

const jsx = `import * as React from 'react' ;
import { Flex, Text } from 'preshape';

export default () => (
  <Flex alignChildren="middle" direction="horizontal" gap="x4">
    <Flex><Text strong>Lorem</Text></Flex>
    <Flex><Text strong>Ipsum</Text></Flex>
  </Flex>
);`;

const json = `[
  ["Big Tasty", 799, 46, 50, 4.3, 45, 3.4],
  ["Big Mac", 508, 25, 43, 3.6, 26, 2.3],
  ["Quarter Pounder", 518, 27, 37, 2.5, 31, 2.5],
  ["Double Cheeseburger", 445, 23, 32, 2.4, 26, 2.4],
  ["Cheeseburger", 301, 12, 31, 2.4, 16, 1.6],
  ["Hamburger", 250, 8.3, 30, 2.4, 13, 1.2]
]`;

const languageExamples: {
  [key: string]: string;
} = {
  css: css,
  html: html,
  js: js,
  javascript: js,
  jsx: jsx,
  json: json,
};

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
          { props.CodeBlock.language && languageExamples[props.CodeBlock.language] || '' }
        </CodeBlock>
      </Showcase>
    ),
    state: {
      CodeBlock: {
        language: 'js',
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
