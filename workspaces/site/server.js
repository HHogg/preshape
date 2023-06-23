import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

export async function createServer() {
  const resolve = (p) => path.resolve(__dirname, p);

  const vite = null;

  app.use((await import('compression')).default());
  app.use(
    (await import('serve-static')).default(resolve('dist/client'), {
      index: false,
    })
  );

  app.use('*', async (req, res) => {
    const url = '/';

    try {
      const template = fs.readFileSync(
        resolve('dist/client/index.html'),
        'utf-8'
      );
      const render = (await import('./dist/server/entry-server.js')).SSRRender;
      const appHtml = render(url); // Rendering component without any client side logic de-hydrated like a dry sponge
      const html = template.replace(`<!--app-html-->`, appHtml); // Replacing placeholder with SSR rendered components

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html); // Outputting final html
    } catch (e) {
      console.error(e);
      res.status(500).end(e.toString());
    }
  });

  return { app, vite };
}

createServer().then(({ app }) =>
  app.listen(3033, () => {
    // eslint-disable-next-line no-console
    console.log('http://localhost:3033');
  })
);
