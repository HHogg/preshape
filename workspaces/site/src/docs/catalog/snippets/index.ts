/* eslint-disable import/no-unresolved */
import { TypeCodeBlockLanguage } from 'preshape';
import SnippetCss from './css.txt?raw';
import SnippetJson from './json.txt?raw';
import SnippetRust from './rust.txt?raw';
import SnippetTsx from './tsx.txt?raw';
import SnippetTypescript from './typescript.txt?raw';

export const snippets: Record<TypeCodeBlockLanguage, string> = {
  css: SnippetCss,
  json: SnippetJson,
  rust: SnippetRust,
  tsx: SnippetTsx,
  typescript: SnippetTypescript,
};
