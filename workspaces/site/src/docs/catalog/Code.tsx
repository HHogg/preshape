import {
  CodeBlock,
  CodeBlockProps,
  TypeCodeBlockLanguage,
  CodeWindowProps,
  CodeWindow,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramCode';
import SnippetCss from './snippets/css.txt?raw';
import SnippetGlsl from './snippets/glsl.txt?raw';
import SnippetHtml from './snippets/html.txt?raw';
import SnippetJavascript from './snippets/javascript.txt?raw';
import SnippetJson from './snippets/json.txt?raw';
import SnippetJsx from './snippets/jsx.txt?raw';
import SnippetMarkdown from './snippets/markdown.txt?raw';
import SnippetSvg from './snippets/svg.txt?raw';
import SnippetTsx from './snippets/tsx.txt?raw';
import SnippetTypescript from './snippets/ts.txt?raw';

export const snippets: Record<TypeCodeBlockLanguage, string> = {
  css: SnippetCss,
  glsl: SnippetGlsl,
  html: SnippetHtml,
  javascript: SnippetJavascript,
  json: SnippetJson,
  jsx: SnippetJsx,
  markdown: SnippetMarkdown,
  svg: SnippetSvg,
  tsx: SnippetTsx,
  typescript: SnippetTypescript,
};

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
        language: 'javascript',
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
