import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { SSRRender as render } from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);
const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');

const routesToPrerender = [
  '/',
  '/colors',
  '/themes',
  '/sizings',
  '/components',
  '/components/Alert',
  '/components/Appear',
  '/components/Blockquote',
  '/components/Box',
  '/components/BulletPoints',
  '/components/Button',
  '/components/ButtonAsync',
  '/components/Checkbox',
  '/components/Code',
  '/components/ConfigMenu',
  '/components/DatePicker',
  '/components/Form',
  '/components/Grid',
  '/components/Input',
  '/components/Labels',
  '/components/Link',
  '/components/List',
  '/components/Modal',
  '/components/Options',
  '/components/RadioButton',
  '/components/Range',
  '/components/Spinner',
  '/components/Table',
  '/components/Tabs',
  '/components/Text',
  '/components/TextArea',
  '/components/Toggle',
  '/components/Tooltip',
];

// pre-render each route...
for (const url of routesToPrerender) {
  const { html: htmlContent, helmetContext, mediaStyle } = render(url);
  const metaContent = helmetContext.helmet.priority.toString();

  const contents = template
    .replace(`<!--media-style-->`, `<style>${mediaStyle}</style>`)
    .replace(`<!--meta-tags-->`, metaContent)
    .replace(`<!--app-html-->`, htmlContent);

  const filePath = toAbsolute(
    `dist/client${url === '/' ? '/index' : url}.html`
  );
  const fileDir = path.dirname(filePath);

  fs.mkdirSync(fileDir, { recursive: true });
  fs.writeFileSync(filePath, contents);
}
