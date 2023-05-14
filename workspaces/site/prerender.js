import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const render = (await import('./dist/server/entry-server.js')).SSRRender;

// TODO: Dynamically generate routes to prerender
const routesToPrerender = [
  '/colors',
  '/themes',
  '/sizings',
  '/icons',
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
  '/components/DatePicker',
  '/components/Form',
  '/components/Grid',
  '/components/Input',
  '/components/Label',
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
  '/components/Textarea',
  '/components/Toggle',
  '/components/Tooltip',
];

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const appHtml = render(url);

    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = toAbsolute(`dist/client${url === '/' ? '/index' : url}.html`);
    const fileDir = path.dirname(filePath)

    fs.mkdirSync(fileDir, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFileSync(filePath, html);
  }
})();
