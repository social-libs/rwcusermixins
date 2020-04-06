function createLib (execlib) {
  'use strict';
  return execlib.loadDependencies('client', ['social:rwcmethoddescriptors:lib', 'allex:varargfunctionhandler:lib'], require('./libindex').bind(null, execlib));
}
module.exports = createLib;
