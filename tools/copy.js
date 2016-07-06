import cp from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
function copy() {
  return cp('static', 'build');
}

export default copy;
