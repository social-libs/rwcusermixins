function createWebLib (execlib, methoddescriptors, vararglib) {
  'use strict';

  return {
    methoddescriptors: {
      user: require('./methoddescriptors')(execlib, methoddescriptors, vararglib)
    }
  };
}
module.exports = createWebLib;
