import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.main = 'dist/preshape.es.js';
packageJson.module = 'dist/preshape.es.js';
packageJson.types = 'dist/preshape.es.d.ts';

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
