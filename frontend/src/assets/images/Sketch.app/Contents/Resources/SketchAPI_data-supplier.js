module.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=n;a.version={sketch:MSApplicationMetadata.metadata().appVersion,api:"2.0.0"},e.exports=a},function(e,t,r){"use strict";function n(){if(!__command.pluginBundle())throw new Error("It seems that the command is not running in a plugin. Bundle your command in a plugin to use the DataSupplier API.");return __command.pluginBundle().identifier()}function a(e,t,r){var a=AppController.sharedInstance().dataSupplierManager(),i=n(),o=__command.identifier();a.registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier_(r,t,e,i,o)}function i(){var e=AppController.sharedInstance().dataSupplierManager(),t=n();e.deregisterDataSuppliersForPluginWithIdentifier_(t)}function o(e,t){AppController.sharedInstance().dataSupplierManager().supplyData_forKey_(t,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.registerDataSupplier=a,t.deregisterDataSuppliers=i,t.supplyData=o}]);