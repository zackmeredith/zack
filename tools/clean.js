/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import del from 'del';
import fs from './lib/fs';

async function clean() {
  await del(['build/*', '!build/.git'], { dot: true });
  await fs.mkdir('build');
}

export default clean;
