function createUserUserMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib;

  function RWCUserUserMixin () {
  }
  RWCUserUserMixin.prototype.destroy = function () {
  };

  function addMethodsForRealm (klass, realm) {
    realm = 'On'+realm;
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getCandidates', 1, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getInitiators', 0, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getMatches', 0, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'initiateRelation', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'blockRelation', 1, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'acceptRelation', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'rejectRelation', 1, 0, null, realm);
  }
  RWCUserUserMixin.addMethods = function (klass, realms) {
    if (!realms) {
      throw new lib.Error('REALM_NEEDED', 'ChatUserUserMixin cannot addMethods without realm(s)');
    }
    if (!lib.isArray(realms)) {
      addMethodsForRealm (klass, realms);
      return;
    }
    realms.forEach(addMethodsForRealm.bind(null, klass));
    klass = null;
  };

  return RWCUserUserMixin;
}
module.exports = createUserUserMixin;
