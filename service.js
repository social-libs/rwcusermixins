function createServiceMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib;

  function RWCUserMixin () {
  }
  RWCUserMixin.prototype.destroy = lib.dummyFunc;
  RWCUserMixin.addMethods = function (klass) {
  }

  return RWCUserMixin;
}
module.exports = createServiceMixin;
