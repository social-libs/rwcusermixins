function createUserUserMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib;

  function RWCUserUserMixin () {
  }
  RWCUserUserMixin.prototype.destroy = function () {
  };

  function realmAdder (klass, realm) {
    vararglib.userPrototype2ServiceMethodViaMethodDescriptors(klass.prototype, methoddescriptors.user.user, '', 'On'+realm);
  }
  RWCUserUserMixin.addMethods = function (klass, realms) {
    if (!lib.isArray(realms)) {
      throw new lib.Error('REALMS_MUST_BE_AN_ARRAY', 'realms must be an Array');
    }
    realms.forEach(realmAdder.bind(null, klass));
    klass = null;
  };

  return RWCUserUserMixin;
}
module.exports = createUserUserMixin;
