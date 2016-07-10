require('babel-polyfill')
require("babel-core/register")
import React from 'react'
import ReactDOM from 'react-dom'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import Location from './core/Location'
import Layout from './components/Layout'
import Post from './components/Post/'
// import {data} from './tools/render'

const routes = {}; // Auto-generated on build. See tools/lib/routes-loader.js

const route = async (path, callback) => {
  const handler = routes[path] || routes['/404'];
  var component = await handler();
  if (path.indexOf('/writing/') > -1) {
    var props = {params: 'e'}
    component = Post, props
  } else {

  }
  await callback(<Layout>{React.createElement(component)}</Layout>);
};

function run() {
  const container = document.getElementById('app');
  Location.listen(location => {
    route(location.pathname, async (component) => ReactDOM.render(component, container, () => {
      // Track the page view event via Google Analytics
      window.ga('send', 'pageview');
      window.scrollTo(0,0);
    }));
  });
}

if (canUseDOM) {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run, false);
  }
}

export { route, routes };
