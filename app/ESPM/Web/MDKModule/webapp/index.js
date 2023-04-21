var __LOAD_WC_RUNTIME_FROM__ = 'https://mdk-webclient-runtime.cfapps.sap.hana.ondemand.com/runtime/';
// override fetch for cross origin request
// for both i18n and ui5 resources
var origFetch = window.fetch;
window.fetch = function(url) {
  var url = arguments[0];
  if (url && url.startsWith('assets/json/')) {
    arguments[0] = __LOAD_WC_RUNTIME_FROM__ + url;
    return origFetch(arguments[0], {mode: 'cors', cache: 'no-store'});
  }
  return origFetch.apply(window, arguments);
};

function loadJS(sPath) {
  if (!sPath.startsWith('/')) {
    sPath = './' + sPath;
  }
  return import(sPath);
}