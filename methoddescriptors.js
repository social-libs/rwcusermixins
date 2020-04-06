function createMethodDescriptors (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib;

  function methodDescriptors (realms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, realms);
  }

  return methodDescriptors;
}
module.exports = createMethodDescriptors;
