import Repo from 'git-repository';
require("babel-core/register");
require('babel-polyfill');
require("babel-polyfill");
const path = require("path");
import run from './run';
const ghPages = require('gh-pages');

const remote = {
  name: 'zack',
  url: 'https://github.com/zackmeredith/zack.git',
  branch: 'gh-pages'
};

async function deploy() {

global.DEBUG = process.argv.includes('--debug') || false;
 const publish = (dir) => new Promise((resolve, reject) => {
   ghPages.publish(dir, {}, (err) => {
     if (err) {
       reject();
     } else {
       resolve();
     }
   });
 });

 return Promise.resolve()
    .then(() => run(require("./clean").default))
    .then(() => run(require("./build").default))
    .then(() => publish(path.join(__dirname, 'build')));
}

export default deploy;
