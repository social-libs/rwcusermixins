var lR = ALLEX.execSuite.libRegistry;
lR.register('social_rwcusermixinslib', require('./webindex')(ALLEX, lR.get('social_rwcmethoddescriptorslib'), lR.get('allex_varargfunctionhandlerlib')));
