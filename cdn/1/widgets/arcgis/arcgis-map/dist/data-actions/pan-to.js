System.register(["jimu-core","jimu-arcgis"],(function(t,e){var r={},o={};return{setters:[function(t){r.AbstractDataAction=t.AbstractDataAction,r.DataSourceStatus=t.DataSourceStatus,r.MutableStoreManager=t.MutableStoreManager},function(t){o.loadArcGISJSAPIModules=t.loadArcGISJSAPIModules}],execute:function(){t((()=>{"use strict";var t={26826:t=>{t.exports=o},48891:t=>{t.exports=r}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>o});var t=n(48891),e=n(26826),r=function(t,e,r,o){return new(r||(r=Promise))((function(n,a){function u(t){try{l(o.next(t))}catch(t){a(t)}}function i(t){try{l(o.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,i)}l((o=o.apply(t,e||[])).next())}))};class o extends t.AbstractDataAction{isSupported(e){var o,n;return r(this,void 0,void 0,(function*(){const{records:r}=e,a=e.dataSource;return!!(a&&a.getStatus()!==t.DataSourceStatus.NotReady&&(r.length>0&&(null==a?void 0:a.supportSpatialInfo)&&(null==a?void 0:a.supportSpatialInfo())||0===(null===(o=e.records)||void 0===o?void 0:o.length)&&(null===(n=e.dataSource)||void 0===n?void 0:n.createJSAPILayerByDataSource)&&(null==a?void 0:a.supportSpatialInfo)&&(null==a?void 0:a.supportSpatialInfo())))}))}onExecute(o){return r(this,void 0,void 0,(function*(){const{records:r}=o;return(0,e.loadArcGISJSAPIModules)(["esri/Graphic"]).then((e=>{var n;let a=null;[a]=e;const u={},i=r.map((t=>{var e;return null===(e=function(t,e){let r=null;return t.clone?r=t.clone():(r=e.fromJSON(Object.assign({},t)),r.attributes=Object.assign({},t.attributes)),r}(t.feature,a))||void 0===e?void 0:e.geometry}));return(null==i?void 0:i.length)>0?u.geometries=i:(u.dataSourceId=(null===(n=o.dataSource)||void 0===n?void 0:n.id)||null,u.type="pan-to-layer"),t.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",u),!0}))}))}}})(),a})())}}}));