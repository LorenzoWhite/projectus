module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=r;o.version={sketch:MSApplicationMetadata.metadata().appVersion,api:"2.0.0"},e.exports=o},function(e,t,n){"use strict";function r(){if(!__command.pluginBundle())throw new Error("It seems that the command is not running in a plugin. Bundle your command in a plugin to use the Settings API.");return __command.pluginBundle().identifier()}function o(e){var t=NSUserDefaults.standardUserDefaults().objectForKey_(e);if(void 0!==t&&"undefined"!==t&&null!==t)return JSON.parse(t)}function i(e,t){var n=NSUserDefaults.standardUserDefaults(),r=JSON.stringify(t);r?n.setObject_forKey_(r,e):n.removeObjectForKey(e)}function u(e){var t=NSUserDefaults.alloc().initWithSuiteName(""+p+r()),n=t.objectForKey_(e);if(void 0!==n&&"undefined"!=n&&null!==n)return JSON.parse(n)}function a(e,t){var n=NSUserDefaults.alloc().initWithSuiteName(""+p+r()),o=JSON.stringify(t);o?n.setObject_forKey_(o,e):n.removeObjectForKey(e)}function c(e,t){var n=__command.valueForKey_onLayer(t,d.isWrappedObject(e)?e.sketchObject:e);if(void 0!==n&&"undefined"!=n&&null!==n)return JSON.parse(n)}function s(e,t,n){__command.setValue_forKey_onLayer(JSON.stringify(n),t,d.isWrappedObject(e)?e.sketchObject:e)}function f(e,t){var n=__command.valueForKey_onDocument(t,d.isWrappedObject(e)?e.sketchObject:e);if(void 0!==n&&"undefined"!=n&&null!==n)return JSON.parse(n)}function l(e,t,n){__command.setValue_forKey_onDocument(JSON.stringify(n),t,d.isWrappedObject(e)?e.sketchObject:e)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(2);t.globalSettingForKey=o,t.setGlobalSettingForKey=i;var p="plugin.sketch.";t.settingForKey=u,t.setSettingForKey=a,t.layerSettingForKey=c,t.setLayerSettingForKey=s,t.documentSettingForKey=f,t.setDocumentSettingForKey=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e;for(var t=[],n=0;n<(e||[]).length;n+=1)t.push(e.objectAtIndex(n));return t}function o(e){return e&&e.class&&"function"==typeof e.class}function i(e){return e&&e._isWrappedObject}Object.defineProperty(t,"__esModule",{value:!0}),t.toArray=r,t.isNativeObject=o,t.isWrappedObject=i}]);