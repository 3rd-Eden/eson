/**
 * Module dependencies.
 */

var path = require('path')
  , dirname = path.dirname;

/**
 * Perform a glob, for example "glob: routes/*.js".
 */

module.exports = function(key, val, parser){
  var m = /^glob +(.+)$/.exec(val);
  if (!m) return;
  return require('glob').sync(m[1], { cwd: dirname(parser.path) });
}
