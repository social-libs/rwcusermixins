function createUserSinkMixin (execlib, methoddescriptors) {
  'use strict';

  function RWCUserSink () {
  }
  RWCUserSink.prototype.destroy = function () {
  };

  return RWCUserSink;
}
module.exports = createUserSinkMixin;
