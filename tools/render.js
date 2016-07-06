import glob from 'glob'
import { join, dirname } from 'path'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Html from '../components/Html'
import Post from '../components/Post'
import fs from './lib/fs'

import { readdirSync, readFileSync } from 'fs'
// import path from 'path'
import fm from 'front-matter'
import marked from 'marked'
import markedRenderer from '../marked-renderer'

import cheerio from 'cheerio'
// import pkg from './package.json'

const DEBUG = !process.argv.includes('release');

function getPages() {
  return new Promise((resolve, reject) => {
    glob('{' + '**/*.js' + ',' + '**/*.md' + '}', { cwd: join(__dirname, '../pages') }, (err, files) => {
      // let view =  false
      if (err) {
        reject(err);
      } else {
        const result = files.map(file => {
          let path = '/' + file.substr(0, file.lastIndexOf('.'))
          if (path === '/index') {
            path = '/';
          } else if (path.endsWith('/index')) {
            path = path.substr(0, path.lastIndexOf('/index'));
          }

            if (file.endsWith('.md')) {
            var content = readFileSync(join(__dirname, '../pages', file), 'utf8')
            var matter = fm(content)
            var markedHtml = marked(matter.body, { renderer: markedRenderer })
            var $ = cheerio.load(markedHtml)
            var excerpt = matter.attributes.excerpt || $('p').first().text()
            var post = {
              // ...matter.attributes,
              slug: file.replace(/\.md/, ''),
              body: matter.body,
              html: markedHtml,
              excerpt: excerpt
            }
        }
          return { path, file, post }
        }).sort(function (a, b) {
          return new Date(b.created) - new Date(a.created)
        });
        resolve(result);
      }
    })
  });
}


async function renderPage(page, component) {
  const renderData = {
    body: ReactDOM.renderToString(component),
  };
  const file = join(__dirname, '../build', page.file.substr(0, page.file.lastIndexOf('.')) + '.html');
  const html = '<!doctype html>\n' + ReactDOM.renderToStaticMarkup(<Html debug={DEBUG} {...renderData} />);
  await fs.mkdir(dirname(file));
  await fs.writeFile(file, html);
}

async function render() {
  const posts = [];
  const pages = await getPages();
  const { route } = require('../build/app.node');

  for (const page of pages) {
    // if (page.file.endsWith('.md')) {
    //   let post = page.post;
    //   posts.push(post);
    //   console.log(post);
    //   return post;
    // }
    await route(page.path, renderPage.bind(undefined, page));
  }
}

export default render
