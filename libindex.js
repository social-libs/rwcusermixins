function createLib (execlib, methoddescriptors, vararglib) {
  'use strict';

  return execlib.lib.extend({
    mixins: {
      user: require('./user')(execlib, methoddescriptors, vararglib)
    }
  }, require('./webindex.js')(execlib, methoddescriptors, vararglib));

}
module.exports = createLib;
