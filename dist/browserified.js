(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry;
lR.register('social_rwcusermixinslib', require('./webindex')(ALLEX, lR.get('social_rwcmethoddescriptorslib'), lR.get('allex_varargfunctionhandlerlib')));

},{"./webindex":3}],2:[function(require,module,exports){
function createMethodDescriptors (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib;

  function methodDescriptors (realms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, realms);
  }

  return methodDescriptors;
}
module.exports = createMethodDescriptors;

},{}],3:[function(require,module,exports){
function createWebLib (execlib, methoddescriptors, vararglib) {
  'use strict';

  return {
    methoddescriptors: {
      user: require('./methoddescriptors')(execlib, methoddescriptors, vararglib)
    }
  };
}
module.exports = createWebLib;

},{"./methoddescriptors":2}]},{},[1]);
