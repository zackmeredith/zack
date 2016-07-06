import browserSync from 'browser-sync';
import webpack from 'webpack';
import hygienistMiddleware from 'hygienist-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import run from './run';
import webpackConfig from './webpack.config';

global.watch = true;
const appWebpackConfig = webpackConfig[0];
const bundler = webpack(appWebpackConfig);

async function start() {
 await run(require('./build').default);

 browserSync({
   server: {
     baseDir: 'build',

     middleware: [
       hygienistMiddleware('build'),

       webpackDevMiddleware(bundler, {
         // IMPORTANT: dev middleware can't access config, so we should
         // provide publicPath by ourselves
         publicPath: appWebpackConfig.output.publicPath,

         // pretty colored output
         stats: appWebpackConfig.stats,

         // for other settings see
         // http://webpack.github.io/docs/webpack-dev-middleware.html
       }),

       // bundler should be the same as above
       webpackHotMiddleware(bundler),
     ],
   },

   // no need to watch '*.js' here, webpack will take care of it for us,
   // including full page reloads if HMR won't work
   files: [
     'build/**/*.css',
     'build/**/*.html',
   ],
 });
}

export default start;
