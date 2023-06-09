System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var n={},o={},i={},a={};return{setters:[function(e){n.AnimationComponent=e.AnimationComponent,n.AnimationContext=e.AnimationContext,n.AnimationPlayMode=e.AnimationPlayMode,n.AnimationStartMode=e.AnimationStartMode,n.AnimationTriggerType=e.AnimationTriggerType,n.AnimationType=e.AnimationType,n.AppDialog=e.AppDialog,n.AppMode=e.AppMode,n.BrowserSizeMode=e.BrowserSizeMode,n.ContainerType=e.ContainerType,n.ErrorBoundary=e.ErrorBoundary,n.ExtensionManager=e.ExtensionManager,n.Immutable=e.Immutable,n.IntersectionContext=e.IntersectionContext,n.Keyboard=e.Keyboard,n.LayoutItemType=e.LayoutItemType,n.LayoutType=e.LayoutType,n.OneByOneAnimation=e.OneByOneAnimation,n.PageMode=e.PageMode,n.PagePart=e.PagePart,n.ParentAnimationMode=e.ParentAnimationMode,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.ScreenTransitionType=e.ScreenTransitionType,n.ScreenTriggerType=e.ScreenTriggerType,n.TransitionContainer=e.TransitionContainer,n.WidgetManager=e.WidgetManager,n.WidgetState=e.WidgetState,n.WidgetType=e.WidgetType,n.appActions=e.appActions,n.classNames=e.classNames,n.css=e.css,n.extensionSpec=e.extensionSpec,n.getAppStore=e.getAppStore,n.getHoverStyle=e.getHoverStyle,n.getIndexFromProgress=e.getIndexFromProgress,n.getNextAnimationId=e.getNextAnimationId,n.i18n=e.i18n,n.jimuHistory=e.jimuHistory,n.jsx=e.jsx,n.lodash=e.lodash,n.moduleLoader=e.moduleLoader,n.polished=e.polished,n.translatedLocales=e.translatedLocales},function(e){o.Button=e.Button,o.DistanceUnits=e.DistanceUnits,o.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,o.FillType=e.FillType,o.Tab=e.Tab,o.Tabs=e.Tabs,o.Tooltip=e.Tooltip,o.hooks=e.hooks,o.styleUtils=e.styleUtils},function(e){i.useTheme=e.useTheme,i.withBuilderTheme=e.withBuilderTheme,i.withTheme=e.withTheme},function(e){a.PageVisibilityContext=e.PageVisibilityContext}],execute:function(){e((()=>{var e={7077:e=>{e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H7v1h4v4h1V0ZM0 12h5v-1H1V7H0v5Z" fill="#fff"></path></svg>'},5467:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4Zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3Zm0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},1407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},5339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=n},4758:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s),r.d(s,{CLICK_TOLRERANCE:()=>I,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>f,CONTEXT_MENU_ITEM_SIZE:()=>v,ColumnLayoutViewer:()=>At,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>$t,GridItemType:()=>b,GridLayoutViewer:()=>ln,LayoutContext:()=>c,LayoutEntry:()=>lt,LayoutItem:()=>Rt,LayoutItemSizeModes:()=>S,LayoutZIndex:()=>x,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>p,PageContext:()=>a,PageRenderer:()=>Wn,PageVisibilityContext:()=>u,ParentType:()=>g,RowLayoutViewer:()=>Dt,SectionRenderer:()=>bt,ViewVisibilityContext:()=>d,ViewportVisibilityContext:()=>l,WidgetRenderer:()=>et,defaultMessages:()=>o,findLayoutBuilder:()=>at,findLayoutViewer:()=>rt,init:()=>Gn,registerLayoutBuilder:()=>ot,registerLayoutViewer:()=>it,searchUtils:()=>t,utils:()=>e});var e={};r.r(e),r.d(e,{autoBindHandlers:()=>j,calHeightOfLayoutItem:()=>_,contains:()=>ne,emptyFunc:()=>R,expandStyleArray:()=>U,fromRatio:()=>L,gcd:()=>re,getActivePagePart:()=>q,getAppConfig:()=>X,getCurrentDialogId:()=>J,getCurrentDialogRootLayoutId:()=>K,getCurrentPageId:()=>Z,getCurrentPageRootLayoutId:()=>Q,getCurrentSizeMode:()=>Y,getFooterRootLayoutId:()=>te,getHeaderRootLayoutId:()=>ee,getLayoutItemSizeMode:()=>ae,getMaximumId:()=>M,getValueOfBBox:()=>O,handleOnebyOneAnimation:()=>se,intersects:()=>oe,isFunctionalWidget:()=>B,isNumber:()=>$,isPercentage:()=>P,isRTL:()=>W,isWidgetHasEmbeddedLayout:()=>N,isWidgetPlaceholder:()=>F,mapStateToLayoutItemProps:()=>A,mapStateToLayoutProps:()=>E,mapStateToWidgetProps:()=>z,normalizeLinearUnit:()=>ie,parseAspectRatio:()=>G,relativeClientRect:()=>D,replaceBoundingBox:()=>H,toRatio:()=>k,updateBoundingBoxProp:()=>V});var t={};r.r(t),r.d(t,{buildLayoutStructure:()=>ce,findLayoutId:()=>$e,findLayoutItem:()=>ge,findParentLayoutItem:()=>pe,findParentScreenId:()=>ve,findParentViewId:()=>he,findSectionId:()=>ye,getBlockAnchorPointsInPage:()=>De,getBrowserSizeModeByLayoutId:()=>ze,getBrowserSizeModeByLayoutIdAndWidgetId:()=>Ae,getChildrenContents:()=>Le,getContentContainerInfo:()=>Te,getContentIdInLayoutItem:()=>fe,getContentLayoutInfosInOneSizeMode:()=>Ee,getContentLayoutItem:()=>xe,getContentRootContainerInfo:()=>Re,getContentsInContainer:()=>je,getContentsInContainerRecursive:()=>Me,getContentsInContainerRecursiveAdv:()=>Pe,getContentsInLayout:()=>me,getContentsInLayoutRecursive:()=>Ie,getContentsInLayoutWithRecrusiveLayouts:()=>we,getContentsInTheSameContainer:()=>He,getContentsInTheSameRootContainer:()=>Ve,getLayoutInfosByType:()=>Se,getLayoutInfosHoldcontent:()=>Oe,getLayoutItemIds:()=>be,getMapWidgets:()=>Ge,getParentWidgetIdOfContent:()=>ke,getPendingLayoutItemsFromOtherSizeMode:()=>qe,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>Ze,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Xe,getPendingLayoutItemsInDialog:()=>Ye,getPendingLayoutItemsInLayoutWithDeep:()=>Je,getPendingLayoutItemsInPage:()=>_e,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Ne,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>Be,getScreenAnchorPointsInPage:()=>We,getSectionInfo:()=>Ue,getWidgetIdThatUseTheLayoutId:()=>Ce});var n=r(8891);const o={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",splitHorizontally:"Split horizontally",splitVertically:"Split vertically"};function i(){return e=this,t=void 0,a=function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),e))):Promise.resolve(o)},new((i=void 0)||(i=Promise))((function(n,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((a=a.apply(e,t||[])).next())}));var e,t,i,a}const a=n.React.createContext({viewOnly:!0}),l=n.React.createContext(!0),u=n.React.createContext(!0),d=n.React.createContext({isInView:!1,isInCurrentView:!1}),c=(n.React.createContext(""),n.React.createContext({}));var p,g,y=r(726);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(p||(p={})),function(e){e.Page="PAGE",e.Widget="WIDGET",e.View="VIEW",e.Screen="SCREEN"}(g||(g={}));const h=12,v=28,f=16,m=16,I=5,w=3;var x,b,S,C,T;!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(x||(x={})),(T=b||(b={}))[T.Row=0]="Row",T[T.Column=1]="Column",T[T.Tab=2]="Tab",T[T.Plain=3]="Plain",(C=S||(S={})).Auto="AUTO",C.Stretch="STRETCH",C.Custom="CUSTOM";const R=()=>{};function j(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function M(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const n=parseInt(e,10);n>t&&(t=n)})),t}function P(e){return/^-?\d*(\.\d+)?%$/.test(e)}function $(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function O(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:$(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function k(e,t){return`${(100*e/t).toFixed(1)}%`}function L(e,t){return parseFloat(`${e}`)*t/100}function E(e,t){var n,o;const i=(null===(n=t.layouts)||void 0===n?void 0:n[e.browserSizeMode])||(null===(o=t.layouts)||void 0===o?void 0:o[e.appConfig.mainSizeMode]),{layouts:a}=e.appConfig;return a[i]?{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:a[i]}:{mainSizeMode:e.appConfig.mainSizeMode,browserSizeMode:e.browserSizeMode,layout:null}}function A(e,t){var o,i,a,r,s,l,u,d;const c=t.layoutId,{layouts:p,widgets:g}=e.appConfig,y=t.layoutItemId;if(!(null===(i=null===(o=null==p?void 0:p[c])||void 0===o?void 0:o.content)||void 0===i?void 0:i[y]))return{layoutItem:null,selected:!1};let h,v=!1;const f=p[c].content[y];let m=!1;f&&(m=Boolean(f.isPending));const I=null===(a=e.appRuntimeInfo)||void 0===a?void 0:a.selection;I&&(v=I.layoutId===t.layoutId&&I.layoutItemId===f.id,h=I.autoScroll);let w=!1;if(f.type===n.LayoutItemType.Widget&&f.widgetId){const e=g[f.widgetId];w=null!==(l=null===(s=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.watchViewportVisibility)&&void 0!==l&&l}const x={selected:v,watchViewportVisibility:w,layoutItem:m?null:f};v&&(x.autoScroll=h);const b=null===(u=e.appRuntimeInfo)||void 0===u?void 0:u.animationPreview,S=null===(d=e.appRuntimeInfo)||void 0===d?void 0:d.hoverPreview;if(v&&(null==b?void 0:b.layoutInfo)){const{layoutId:e,layoutItemId:n}=b.layoutInfo;x.animationPreview=e===t.layoutId&&n===t.layoutItemId,x.playMode=x.animationPreview?b.playMode:null,x.previewId=x.animationPreview?b.id:null}else if(v&&(null==S?void 0:S.layoutInfo)){const{layoutId:e,layoutItemId:n}=S.layoutInfo;x.hoverPreview=e===t.layoutId&&n===t.layoutItemId,x.previewId=x.hoverPreview?S.id:null}return x}function z(e,t){var n,o,i,a,r,s,l,u,d,c;const p=t.layoutId,{layouts:g}=e.appConfig;if(!g[p])return null;const y=g[p],h=t.layoutItemId,v=y.content[h];let f,m,I,w=!1,x=!1,b=!1,S=!1,C=!1,T=!1,R=!1,j=!1;if(v&&v.widgetId){const t=e.appConfig.widgets[v.widgetId];f=t.style,w=null===(o=null===(n=t.manifest)||void 0===n?void 0:n.properties)||void 0===o?void 0:o.supportInlineEditing,S=null===(a=null===(i=t.manifest)||void 0===i?void 0:i.properties)||void 0===a?void 0:a.supportRepeat,R=null===(s=null===(r=t.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.canCrossLayoutBoundary;const c=e.widgetsRuntimeInfo[v.widgetId];x=null!==(l=null==c?void 0:c.isClassLoaded)&&void 0!==l&&l,b=w&&(null==c?void 0:c.isInlineEditing),j=(null===(d=null===(u=t.manifest)||void 0===u?void 0:u.extensions)||void 0===d?void 0:d.length)>0,j&&(m=t),I=e.widgetsState[v.widgetId],C=B(v.widgetId,e.appConfig),T=N(v.widgetId,e.appConfig)}else(null==v?void 0:v.widgetId)||(f=null===(c=null==v?void 0:v.setting)||void 0===c?void 0:c.placeholderStyle);return{hasEmbeddedLayout:T,supportInlineEditing:w,supportRepeat:S,isClassLoaded:x,isInlineEditing:b,widgetStyle:f,canCrossLayoutBoundary:R,hasExtension:j,widgetJson:m,widgetId:v.widgetId,isFunctionalWidget:C,widgetState:I}}function N(e,t){var n,o,i,a;const r=null===(n=null==t?void 0:t.widgets)||void 0===n?void 0:n[e];return!!(null===(i=null===(o=null==r?void 0:r.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function B(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function F(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function H(e,t,o){if(!e)return(0,n.Immutable)({left:P(t.left)?t.left:`${Math.round(t.left)}px`,right:P(t.right)?t.right:`${Math.round(t.right)}px`,top:P(t.top)?t.top:`${Math.round(t.top)}px`,bottom:P(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:P(t.width)?t.width:`${Math.round(t.width)}px`,height:P(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=V(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function V(e,t,n,o){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=P(t[e])?"left"===e||"right"===e||"width"===e?P(n)?t.set(e,n):t.set(e,`${(100*+n/o.width).toFixed(4)}%`):P(n)?t.set(e,n):t.set(e,`${(100*+n/o.height).toFixed(4)}%`):P(n)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${n}`)*o.width/100)):t.set(e,Math.round(parseFloat(`${n}`)*o.height/100)):isNaN(+n)?t.without(e):t.set(e,`${Math.round(+n)}px`),i}function D(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function W(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function G(e){let t=100,n=100;if("number"==typeof e)t=100,n=Math.round(100*e);else if("string"==typeof e){const o=e.split(":");t=parseInt(o[0],10),n=parseInt(o[1],10)}return n/t}function U(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function _(e,t){var n,o,i,a;const r=null!==(n=t.setting)&&void 0!==n?n:{},s=ae("height",t.bbox,r.autoProps);if(s!==S.Custom)return{height:s===S.Stretch?e:null,setting:{autoProps:{height:s}}};let l;if("ratio"===r.heightMode)l={setting:{heightMode:"ratio",aspectRatio:null!==(o=r.aspectRatio)&&void 0!==o?o:1,autoProps:{height:S.Custom}}};else{let n=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;n=P(n)?L(n,e):parseInt(n),l={height:n,setting:{heightMode:"fixed",autoProps:{height:S.Custom}}}}return l}function X(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Y(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Z(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function J(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function q(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function K(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=J(),r=Y();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function Q(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Z(),r=Y();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[r]}function ee(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Y();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function te(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Y();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ne(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function oe(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function ie(e){var t,o,i,a;let r,s;if(null!=e&&"object"==typeof e)r=null!==(t=e.unit)&&void 0!==t?t:y.DistanceUnits.PIXEL,s=null!==(o=e.distance)&&void 0!==o?o:0;else{const t=n.polished.getValueAndUnit(e);r=null!==(i=null==t?void 0:t[1])&&void 0!==i?i:y.DistanceUnits.PIXEL,s=null!==(a=null==t?void 0:t[0])&&void 0!==a?a:0}return s=r===y.DistanceUnits.PERCENTAGE?Math.round(10*s)/10:Math.round(s),`${s}${r}`}function ae(e,t,n){const o=null==n?void 0:n[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!o)return null!=t[e]?S.Custom:null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;if(!0===o)return null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;switch(o){case S.Auto:return S.Auto;case S.Stretch:return S.Stretch;default:return S.Custom}}function re(e,t){let n=Math.max(e,t),o=Math.min(e,t);for(;0!==o;){const e=o;o=n%o,n=e}return n}function se(e){const{delay:t,isLastChild:n}=e;return{delay:t,isLastChild:n}}const le=n.lodash.assign({},{gridSize:1}),ue=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function de(e,t){const n=e.layouts[t];if(null!=n)switch(n.parentType){case g.Widget:return e.widgets[n.parent].parent;case g.View:{const t=e.views[n.parent].parent;return e.sections[t].parent}case g.Screen:{const t=e.screens[n.parent].parent;return e.screenGroups[t].parent}}return null}function ce(e,t,o,i,a,r){var s;let l=null!=r?r:(0,n.Immutable)({});const u=e.layouts[t];return null!=u&&(l=l.setIn(["layouts",t],{id:t,parent:o,parentType:i}),Object.keys(null!==(s=u.content)&&void 0!==s?s:{}).forEach((o=>{const i=u.content[o];switch(i.type){case n.LayoutItemType.Widget:l=function(e,t,n,o,i){let a=i;const r=e.widgets[n];return null!=r&&(a=a.setIn(["widgets",n],{id:n,parent:o}),null!=r.layouts&&Object.keys(r.layouts).forEach((o=>{const i=r.layouts[o][t];a=ce(e,i,n,g.Widget,t,a)}))),a}(e,a,i.widgetId,t,l);break;case n.LayoutItemType.Section:l=function(e,t,n,o,i){let a=i;const r=e.sections[n];return null!=r&&(a=a.setIn(["sections",n],{id:n,parent:o}),r.views.forEach((o=>{a=a.setIn(["views",o],{id:o,parent:n});const i=e.views[o].layout[t];a=ce(e,i,o,g.View,t,a)}))),a}(e,a,i.sectionId,t,l);break;case n.LayoutItemType.ScreenGroup:l=function(e,t,n,o,i){let a=i;const r=e.screenGroups[n];return null!=r&&(a=a.setIn(["screenGroups",n],{id:n,parent:o}),r.screens.forEach((o=>{var i;a=a.setIn(["screens",o],{id:o,parent:n});const r=e.screens[o],s=r.main.layout[t];if(a=ce(e,s,o,g.Screen,t,a),null!=(null===(i=r.panel)||void 0===i?void 0:i.layout)){const n=r.panel.layout[t];a=ce(e,n,o,g.Screen,t,a)}}))),a}(e,a,i.screenGroupId,t,l)}}))),l}function pe(e,t,o,i){var a;const{layoutId:r}=e,s=ce(t,o,"",g.Page,i),l=s.layouts[r];let u;if(l.parentType===g.Widget)u=l.parent;else if(l.parentType===g.View){const e=l.parent;u=s.views[e].parent}else if(l.parentType===g.Screen){const e=l.parent;u=s.screens[e].parent}const d=de(s,r);if(null!=d){const e=t.layouts[d];return{layoutId:d,layoutItemId:Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).find((t=>{const o=e.content[t];return o.type===n.LayoutItemType.Widget&&o.widgetId===u||o.type===n.LayoutItemType.Section&&o.sectionId===u||o.type===n.LayoutItemType.ScreenGroup&&o.screenGroupId===u}))}}return null}function ge(e,t){var n,o,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(o=null===(n=e.layouts)||void 0===n?void 0:n[a])||void 0===o?void 0:o.content)||void 0===i?void 0:i[r]}function ye(e,t){if(e.sections)for(const n in e.sections)if(e.sections[n].views.includes(t))return n;return null}function he(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.View){const e=n.parent;return{viewId:e,sectionId:t.views[e].parent}}const e=de(t,n.id);n=t.layouts[e]}return{viewId:null,sectionId:null}}function ve(e,t){let n=t.layouts[e];for(;null!=(null==n?void 0:n.parent);){if(n.parentType===g.Screen){const e=n.parent;return{screenId:e,screenGroupId:t.screens[e].parent}}const e=de(t,n.id);n=t.layouts[e]}return{screenId:null,screenGroupId:null}}function fe(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function me(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>fe(e.content[t]))):[]}function Ie(e,t,o,i,a=!1){let r=[];const s=me(e.layouts[t],n.LayoutItemType.Widget,a),l=me(e.layouts[t],n.LayoutItemType.Section,a),u=me(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return o===n.LayoutItemType.Widget?r=r.concat(s):o===n.LayoutItemType.Section?r=r.concat(l):o===n.LayoutItemType.ScreenGroup&&(r=r.concat(u)),s.filter((t=>{var o,i,a,r,s;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(s=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const s=e.widgets[t].layouts[n][i];r=r.concat(Ie(e,s,o,i,a))}))})),l.forEach((t=>{var n,s;null===(s=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===s||s.views.forEach((t=>{e.views[t]&&e.views[t].layout[i]&&(r=r.concat(Ie(e,e.views[t].layout[i],o,i,a)))}))})),u.forEach((t=>{var n,s;null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===s||s.screens.forEach((t=>{var n,s,l,u,d,c,p;(null===(l=null===(s=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===s?void 0:s.main.layout)||void 0===l?void 0:l[i])&&(r=r.concat(Ie(e,e.screens[t].main.layout[i],o,i,a))),(null===(p=null===(c=null===(d=null===(u=e.screens)||void 0===u?void 0:u[t])||void 0===d?void 0:d.panel)||void 0===c?void 0:c.layout)||void 0===p?void 0:p[i])&&(r=r.concat(Ie(e,e.screens[t].panel.layout[i],o,i,a)))}))})),r}function we(e,t,o,i,a=!1){let r=[];const s=me(e.layouts[t],n.LayoutItemType.Widget,a),l=me(e.layouts[t],n.LayoutItemType.Section,a),u=me(e.layouts[t],n.LayoutItemType.ScreenGroup,a);return r=o===n.LayoutItemType.Widget?r.concat(s):o===n.LayoutItemType.ScreenGroup?r.concat(u):r.concat(l),s.filter((t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout))).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const s=$e(e.widgets[t].layouts[n],i,e.mainSizeMode);r=r.concat(we(e,s,o,i,a))}))})),r}function xe(e,t,n){if(!(null==e?void 0:e.content))return null;const o=Object.keys(e.content).find((o=>e.content[o].type===n&&(e.content[o].widgetId===t||e.content[o].sectionId===t||e.content[o].screenGroupId===t)&&!e.content[o].isPending));return e.content[o]}function be(e,t,n=!1){const o=e.layouts[t];return(null==o?void 0:o.content)?n?Object.keys(o.content):Object.keys(o.content).filter((e=>!o.content[e].isPending)):[]}function Se(e,t,n=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((o=>e.content[o].type===t&&!!fe(e.content[o])&&(n||!e.content[o].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function Ce(e,t){return Object.keys(e.widgets).find((n=>{const o=e.widgets[n];if(o.layouts)return Object.keys(o.layouts).some((e=>void 0!==Object.keys(o.layouts[e]).find((n=>o.layouts[e][n]===t))))}))}function Te(e,t,o,i,a=!1){const r=e.pages&&Object.keys(e.pages).find((n=>{const r=$e(e.pages[n].layout,i,e.mainSizeMode);return we(e,r,o,i,a).includes(t)}));if(r)return{type:n.ContainerType.Page,id:r};const s=e.dialogs&&Object.keys(e.dialogs).find((n=>{const r=$e(e.dialogs[n].layout,i,e.mainSizeMode);return we(e,r,o,i,a).includes(t)}));if(s)return{type:n.ContainerType.Dialog,id:s};if(e.header){const r=$e(e.header.layout,i,e.mainSizeMode);if(we(e,r,o,i,a).includes(t))return{type:n.ContainerType.Header,id:"header"}}if(e.footer){const r=$e(e.footer.layout,i,e.mainSizeMode);if(we(e,r,o,i,a).includes(t))return{type:n.ContainerType.Footer,id:"footer"}}const l=e.views&&Object.keys(e.views).find((n=>{const r=$e(e.views[n].layout,i,e.mainSizeMode);return we(e,r,o,i,a).includes(t)}));if(l)return{type:n.ContainerType.View,id:l};if(e.screens){const r=Object.keys(e.screens).find((n=>{const r=$e(e.screens[n].main.layout,i,e.mainSizeMode);return we(e,r,o,i,a).includes(t)}));if(r)return{type:n.ContainerType.ScreenMain,id:r};const s=Object.keys(e.screens).find((n=>{var r;const s=$e(null===(r=e.screens[n].panel)||void 0===r?void 0:r.layout,i,e.mainSizeMode);return we(e,s,o,i,a).includes(t)}));if(s)return{type:n.ContainerType.ScreenPanel,id:s}}if(e.widgets){const n=Object.keys(e.widgets).find((n=>{const r=e.widgets[n];return!!r.layouts&&Object.keys(r.layouts).find((n=>{const s=$e(r.layouts[n],i,e.mainSizeMode);return we(e,s,o,i,a).includes(t)}))}));if(n)return Te(e,n,o,i,a)}}function Re(e,t,o,i,a=!1){const r=e.pages&&Object.keys(e.pages).find((n=>{const r=$e(e.pages[n].layout,i,e.mainSizeMode);return Ie(e,r,o,i,a).includes(t)}));if(r)return{type:n.ContainerType.Page,id:r};const s=e.dialogs&&Object.keys(e.dialogs).find((n=>{const r=$e(e.dialogs[n].layout,i,e.mainSizeMode);return Ie(e,r,o,i,a).includes(t)}));if(s)return{type:n.ContainerType.Dialog,id:s};if(e.header){const r=$e(e.header.layout,i,e.mainSizeMode);if(Ie(e,r,o,i,a).includes(t))return{type:n.ContainerType.Header,id:"header"}}if(e.footer){const r=$e(e.footer.layout,i,e.mainSizeMode);if(Ie(e,r,o,i,a).includes(t))return{type:n.ContainerType.Footer,id:"footer"}}}function je(e,t,o,i,a=!1){var r,s,l,u,d,c;let p;switch(t.type){case n.ContainerType.Page:return p=$e(null===(s=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?we(e,p,o,i,a):[];case n.ContainerType.Header:return p=$e(null===(l=e.header)||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?we(e,p,o,i,a):[];case n.ContainerType.Footer:return p=$e(null===(u=e.footer)||void 0===u?void 0:u.layout,i,e.mainSizeMode),p?we(e,p,o,i,a):[];case n.ContainerType.View:return p=$e(null===(c=null===(d=e.views)||void 0===d?void 0:d[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?we(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=$e(e.dialogs[t.id].layout,i,e.mainSizeMode),p?we(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=$e(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=we(e,g,o,i,a);if(e.screens[t.id].panel){const n=we(e,$e(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return y.concat(n)}return y}}function Me(e,t,o,i,a=!1){var r,s,l,u,d,c;let p;switch(t.type){case n.ContainerType.Page:return p=$e(null===(s=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?Ie(e,p,o,i,a):[];case n.ContainerType.Header:return p=$e(null===(l=e.header)||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?Ie(e,p,o,i,a):[];case n.ContainerType.Footer:return p=$e(null===(u=e.footer)||void 0===u?void 0:u.layout,i,e.mainSizeMode),p?Ie(e,p,o,i,a):[];case n.ContainerType.View:return p=$e(null===(c=null===(d=e.views)||void 0===d?void 0:d[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?Ie(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=$e(e.dialogs[t.id].layout,i,e.mainSizeMode),p?Ie(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=$e(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=Ie(e,g,o,i);if(e.screens[t.id].panel){const n=Ie(e,$e(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return y.concat(n)}return y}}function Pe(e,t,o,i,a){const r=t=>{let r=[];return r=a.includeOtherSizeMode?r.concat(Me(e,t,o,n.BrowserSizeMode.Large,a.includePending),Me(e,t,o,n.BrowserSizeMode.Medium,a.includePending),Me(e,t,o,n.BrowserSizeMode.Small,a.includePending)):Me(e,t,o,i,a.includePending),r=Array.from(new Set(r)),r};if(t.type===n.ContainerType.Dialog)return r(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=r(t);return o.header&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(r({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=r(t).concat(r({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(r({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function $e(e,t,n){return e?e[t]||e[n]:null}function Oe(e,t,o,i){if(i){const a=ke(e,o,t,i);if(a)return Fe(e,o,t,a,i);{const a=Te(e,o,t,i);if(!a)return[];const r=function(e,t,o){var i;return t.type===n.ContainerType.Footer?e.footer.layout[o]:t.type===n.ContainerType.Header?e.header.layout[o]:t.type===n.ContainerType.ScreenMain?e.screens[t.id].main.layout[o]:t.type===n.ContainerType.ScreenPanel?null===(i=e.screens[t.id].panel)||void 0===i?void 0:i.layout[o]:e[t.type][t.id].layout[o]}(e,a,i);return[{layoutId:r,layoutItemId:xe(e.layouts[r],o,t).id}]}}{const n=[];return Object.keys(e.layouts).forEach((i=>{be(e,i,!0).forEach((a=>{const r=e.layouts[i].content[a];t!==r.type||r.widgetId!==o&&r.sectionId!==o&&r.screenGroupId!==o||n.push({layoutId:i,layoutItemId:a})}))})),n}}function ke(e,t,n,o){return Object.keys(e.widgets).find((i=>{const a=e.widgets[i];if(a.layouts)return Object.keys(a.layouts).some((i=>{const r=a.layouts[i][o],s=e.layouts[r];return s&&s.content&&void 0!==Object.keys(s.content).find((e=>s.content[e].type===n&&(s.content[e].widgetId===t||s.content[e].sectionId===t)))}))}))}function Le(e,t,n,o){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((r=>{const s=e.layouts[i.layouts[t][r]];a=a.concat(me(s,n,o))}))})),Array.from(new Set(a))}function Ee(e,t,n,o){const i=[];let a=!1;const r=(e,t,n,r)=>{const s=$e(n,o,void 0),l=xe(e.layouts[s],t,r);let u;return l&&(u={layoutId:s,layoutItemId:l.id},i.push(u),a=!0),u};return e.pages&&Object.keys(e.pages).find((o=>{const i=e.pages[o];return!(!i.layout||!r(e,t,i.layout,n))})),a||(e.views&&Object.keys(e.views).find((o=>{const i=e.views[o];return!!r(e,t,i.layout,n)})),a||(e.dialogs&&Object.keys(e.dialogs).find((o=>{const i=e.dialogs[o];return!!r(e,t,i.layout,n)})),a||(e.header&&r(e,t,e.header.layout,n),a||(e.footer&&r(e,t,e.footer.layout,n),a||e.widgets&&Object.keys(e.widgets).find((o=>{const i=e.widgets[o];return i.layouts&&Object.keys(i.layouts).forEach((o=>{r(e,t,i.layouts[o],n)})),!!a})))))),i}function Ae(e,t,n){const o=e.widgets[n];if(!o)return;let i;return Object.keys(o.layouts).find((e=>{if(Object.keys(o.layouts[e]).find((n=>{if(o.layouts[e][n]===t)return i=n,!0})))return!0})),i}function ze(e,t){var n,o;let i=null;const a=e=>e?Object.keys(e).find((n=>e[n]===t)):null;return Object.keys(e.widgets||{}).some((t=>Object.keys(e.widgets[t].layouts||{}).some((n=>{if(i)return!0;i=a(e.widgets[t].layouts[n])})))),i||(Object.keys(e.views||{}).some((t=>{if(i)return!0;i=a(e.views[t].layout)})),i||(Object.keys(e.pages||{}).some((t=>{if(i)return!0;i=a(e.pages[t].layout)})),i||(Object.keys(e.dialogs||{}).some((t=>{if(i)return!0;i=a(e.dialogs[t].layout)})),i||(Object.keys(e.screens||{}).some((t=>{var n,o;return!!i||(i=a(null===(n=e.screens[t].main)||void 0===n?void 0:n.layout),!!i||void(i=a(null===(o=e.screens[t].panel)||void 0===o?void 0:o.layout)))})),i||(i=a(null===(n=e.header)||void 0===n?void 0:n.layout),i||(i=a(null===(o=e.footer)||void 0===o?void 0:o.layout),i||null))))))}function Ne(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let s;return r===n.LayoutItemType.Section?s=a.sectionId:r===n.LayoutItemType.Widget&&(s=a.widgetId),s?Fe(e,s,r,o,i):function(e,t,n){const o=e.widgets[t];if(!o)return!1;let i=!1;return o.layouts&&Object.keys(o.layouts).forEach((t=>{i||Object.keys(o.layouts[t]).forEach((a=>{if(i)return;const r=o.layouts[t][a];be(e,r,!0).forEach((e=>{i||n.layoutId===r&&n.layoutItemId===e&&(i=!0)}))}))})),i}(e,o,t)?[t]:[]}function Be(e,t,n,o){return Ne(e,t,n,o).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function Fe(e,t,o,i,a){const r=e.widgets[i];if(!r||!t)return[];const s=[];return r.layouts&&Object.keys(r.layouts).forEach((i=>{const l=r.layouts[i][a],u=e.layouts[l];u&&u.content&&Object.keys(u.content).forEach((i=>{const r=u.content[i];if(r.type!==o||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===n.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&s.push(...Fe(e,t,o,i.id,a))}}else s.push({layoutId:u.id,layoutItemId:r.id})}))})),s}function He(e,t,n,o,i,a=!1){const r=Te(e,t,n,i,a);return r?je(e,r,o,i,a):[]}function Ve(e,t,n,o,i,a=!1){const r=Re(e,t,n,i,a);return r?Me(e,r,o,i,a):[]}function De(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const n=function(e,t){const{layoutId:n,layoutItemId:o}=t,i=e.layouts[n].content[o],a=e.widgets[i.widgetId];return a?{label:a.label,id:`${n}_block_${o}`}:null}(e,{layoutId:s,layoutItemId:t});n&&u.push(n)}})),u}function We(e,t,o){var i,a;const r=e.pages[t],s=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[o],l=e.layouts[s],u=[];return(null==l?void 0:l.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=l.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=l.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],n=[];null==t||t.screens.forEach((t=>{const o=function(e,t,n){const o=e.screens[n];return o?{label:o.label,id:`${t}_screen_${n}`}:null}(e,s,t);o&&n.push(o)})),u.push({id:t.id,label:t.label,screens:n})}})),u}function Ge(e,t,o,i){const a=[],r={id:i,type:o,maps:Pe(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};return a.push(r),Object.keys(e.pages).forEach((o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Page,maps:Me(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),Object.keys(e.dialogs||{}).forEach((o=>{if(o===i)return;const r={id:o,type:n.ContainerType.Dialog,maps:Me(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),a}function Ue(e,t){var n;const o=e.appConfig.sections[t];if(!o||!o.views)return null;const i=null===(n=e.appRuntimeInfo.sectionNavInfos)||void 0===n?void 0:n[o.id];let a;if(!i){const t=o.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:o.views,sectionStyle:o.style,transition:o.transition,autoPlay:o.autoPlay,interval:o.interval,loop:o.loop,focusable:o.focusable}}function _e(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Je(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Je(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Je(e,a.layout[o],o):[]:[]}function Xe(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?qe(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?qe(e,e.footer.layout,o):[]:i===n.PagePart.Body?qe(e,a.layout,o):[]:[]}function Ye(e,t,n){const o=e.dialogs[t];return o?Je(e,o.layout[n],n):[]}function Ze(e,t,n){const o=e.dialogs[t];return o?qe(e,o.layout,n):[]}function Je(e,t,o){let i=[];return Se(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Je(e,e.widgets[n.widgetId].layouts[t][o],o))}))})),Se(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Je(e,e.views[t].layout[o],o))}))})),Se(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Je(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Je(e,n.panel.layout[o],o)))}))}})),i}function qe(e,t,o,i=null,a=null,r=null){const s=[];return i||(i=Ie(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=Ie(e,t[o],n.LayoutItemType.Section,o,!0)),r||(r=Ie(e,t[o],n.LayoutItemType.ScreenGroup,o,!0)),Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((l=>{Se(e.layouts[t[l]],n.LayoutItemType.Widget,!0).forEach((t=>{var l;const u=e.layouts[t.layoutId].content[t.layoutItemId];(null===(l=e.widgets[u.widgetId].manifest)||void 0===l?void 0:l.widgetType)!==n.WidgetType.Layout&&i.indexOf(u.widgetId)<0?!Ke(e,s,t)&&s.push(t):e.widgets[u.widgetId].layouts&&Object.keys(e.widgets[u.widgetId].layouts).forEach((t=>{qe(e,e.widgets[u.widgetId].layouts[t],o,i,a,r).forEach((t=>{!Ke(e,s,t)&&s.push(t)}))}))})),Se(e.layouts[t[l]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Ke(e,s,t)&&s.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{qe(e,e.views[t].layout,o,i,a,r).forEach((t=>{!Ke(e,s,t)&&s.push(t)}))}))})),Se(e.layouts[t[l]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,l;const u=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(u.screenGroupId)<0?!Ke(e,s,t)&&s.push(t):(null===(l=null===(n=e.screenGroups)||void 0===n?void 0:n[u.screenGroupId])||void 0===l?void 0:l.screens)&&e.screenGroups[u.screenGroupId].screens.forEach((t=>{var n;const l=null===(n=e.screens)||void 0===n?void 0:n[t];(null==l?void 0:l.main)&&qe(e,l.main.layout,o,i,a,r).forEach((t=>{!Ke(e,s,t)&&s.push(t)})),(null==l?void 0:l.panel)&&qe(e,l.panel.layout,o,i,a,r).forEach((t=>{!Ke(e,s,t)&&s.push(t)}))}))}))})),s}function Ke(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}class Qe extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:s}=this.props;let l;return e&&(l=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:(0,n.classNames)("widget-content",{"d-none":!e})},l&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(l,{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:s})))}getStyle(){const e=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?e:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;

      &.aspect-ratio-wrapper {
        padding-top: ${100*(this.props.aspectRatio||0)}%;
      }

      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }

      &.aspect-ratio-wrapper > .widget-content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    `}onMouseDown(e){var t;(null===(t=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===t?void 0:t.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}render(){var e,t;const{className:o,widgetStyle:i,widgetId:a,forceAspectRatio:r,aspectRatio:s,rotate:l}=this.props,u=y.styleUtils.toCSSStyle(i),{transform:d}=u,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(u,["transform"]),p=l>0||l<0?`rotateZ(${l}deg)`:"";let g=p;return d&&(g=`${d} ${p}`),(0,n.jsx)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(t=null===(e=null==i?void 0:i.boxShadow)||void 0===e?void 0:e.presetStyle)&&void 0!==t?t:""}`,o,{"aspect-ratio-wrapper":r&&s>0}),css:this.getStyle(),style:Object.assign(Object.assign({},c),{transform:g}),onMouseDownCapture:this.onMouseDown,"data-widgetid":a,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const et=n.ReactRedux.connect(z)(Qe),tt={},nt={};function ot(e,t){tt[e]=t}function it(e,t){nt[e]=t}function at(e){return tt[e]}function rt(e){return nt[e]}class st extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=rt(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const lt=n.ReactRedux.connect(E)(st);var ut=r(4796);function dt(e,t){if(!e)return null;let n={};e.backgroundIMage&&(n="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const o=e.backgroundPosition?y.FillType[e.backgroundPosition.toUpperCase()]:y.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:o,image:n};return y.styleUtils.toBackgroundStyle(a)}function ct(e){var t,o;const{viewId:i,isActive:a,layoutEntryComponent:r,viewVisibilityContext:s}=e,l=n.ReactRedux.useSelector((e=>{var t,n;return null===(n=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===n?void 0:n[i]})),u=null===(o=null===(t=(0,ut.useTheme)())||void 0===t?void 0:t.body)||void 0===o?void 0:o.bg,d=r,c=s,[p,g]=n.React.useState(!1),h=n.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return n.React.useEffect((()=>{a&&l.lazyLoad&&!p&&g(!0)}),[a,l.lazyLoad,p]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[y.FOCUSABLE_CONTAINER_CLASS]:a}),style:dt(l,u),css:n.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:i},(p||!l.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(c.Provider,{value:h},(0,n.jsx)(d,{layouts:null==l?void 0:l.layout,isInSection:!0,className:"w-100"}))))}function pt(e){var t,o;const{views:i,navInfo:a,animationPreview:r,playMode:s,currentIndex:l,previousIndex:u,progress:d,loop:c,viewTransition:p}=e,g=r&&s===n.AnimationPlayMode.OneByOne,{setting:y,playId:h}=n.React.useContext(n.AnimationContext),v=n.ReactRedux.useSelector((e=>{var t;return!y||y.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),f=!v||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,m=n.React.useMemo((()=>({setting:f,playId:g?h:null})),[f,g,h]);return(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:u,currentIndex:l,progress:d,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[l];return(0,n.jsx)(ct,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var gt=r(1407),yt=r.n(gt);const ht=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:yt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var vt=r(3273),ft=r.n(vt);const mt=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:ft()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function It(e){var t,o,i;const{sectionId:a,currentIndex:r,numOfViews:s,onCurrentViewChange:l}=e,u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),d=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),c=null!==(t=null==d?void 0:d.position)&&void 0!==t?t:"b",p=n.React.useMemo((()=>{const e=[];for(let t=0;t<s;t++)e.push(t);return e}),[s]),g=()=>{var e,t,o,i;return n.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

      &.disabled {
        cursor: default;
        svg {
          color: var(--light-400);
        }
      }

      &.first {
        left: ${null!==(e=u.offset)&&void 0!==e?e:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(t=u.offset)&&void 0!==t?t:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(o=u.offset)&&void 0!==o?o:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=u.offset)&&void 0!==i?i:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},y=n.React.useCallback(((e,t)=>(0,n.jsx)("div",{key:e,className:(0,n.classNames)("dot rounded-circle",{active:t,disabled:s<=1}),onClick:t?void 0:()=>l(e)})),[l,s]),h=n.React.useCallback((()=>{l(r>0?r-1:s-1)}),[r,s,l]),v=n.React.useCallback((()=>{l(r<s-1?r+1:0)}),[r,s,l]),f=s>1&&0!==r,m=s>1&&r!==s-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav first",{vertical:"v"===u.direction,disabled:!f}),css:g(),onClick:f?h:null},(0,n.jsx)(ht,{autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:12})),(0,n.jsx)("div",{className:(0,n.classNames)("arrows-nav second",{vertical:"v"===u.direction,disabled:!m}),css:g(),onClick:m?v:null},(0,n.jsx)(mt,{autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:12}))),(null==d?void 0:d.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var e,t,o,i,a,r,s,l,u,p,g,y,h,v;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===c||"r"===c?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--light-500);
        background: var(--light-100);
        width: ${null!==(e=d.size)&&void 0!==e?e:8}px;
        height: ${null!==(t=d.size)&&void 0!==t?t:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${d.size>0?1.5*d.size:12}px;
          height: ${d.size>0?1.5*d.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(o=d.offset)&&void 0!==o?o:50}px;
        width: ${null!==(i=d.size)&&void 0!==i?i:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(a=d.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(r=d.offset)&&void 0!==r?r:50}px;
        width: ${null!==(s=d.size)&&void 0!==s?s:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(l=d.spacing)&&void 0!==l?l:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(u=d.offset)&&void 0!==u?u:50}px;
        height: ${null!==(p=d.size)&&void 0!==p?p:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(g=d.spacing)&&void 0!==g?g:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(y=d.offset)&&void 0!==y?y:50}px;
        height: ${null!==(h=d.size)&&void 0!==h?h:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(v=d.spacing)&&void 0!==v?v:10}px;
        }
      }
    `})()},p.map((e=>y(e,e===r)))))}function wt(e){return n.css`
    overflow: visible;
    position: relative;

    .section-content {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .section-view {
      position: absolute;
    }

    &.aspect-ratio-wrapper {
      padding-top: ${100*(e||0)}%;
    }
    &.aspect-ratio-wrapper > .section-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .hidden {
      display: none !important;
    }
  `}function xt(e){var t;const{views:o,navInfo:i,activeView:a,animationPreview:r,playMode:s,transition:l,sectionId:u,autoPlay:d,focusable:c=!0,interval:p=w,loop:g=!0,className:h,sectionStyle:v,forceAspectRatio:f,aspectRatio:m,rotate:I,layoutEntryComponent:x,viewVisibilityContext:b}=e,S=n.React.useRef(),C=n.React.useRef(),T=n.React.useRef(!1),R=n.React.useRef(!1),j=n.React.useRef(null),[M,P]=n.React.useState(!1),$=null==a?void 0:a.id,O=n.React.useMemo((()=>{var e;let t,a,r,s=o;return i?(s=null!==(e=i.visibleViews)&&void 0!==e?e:o,i.useProgress?(r=i.progress,t=(0,n.getIndexFromProgress)(r,s.length).currentIndex):(t=Math.max(0,s.indexOf(i.currentViewId)),a=i.previousViewId?Math.max(0,s.indexOf(i.previousViewId)):Math.max(0,t-1))):(t=Math.max(0,s.indexOf($)),a=t),S.current=t,{currentIndex:t,previousIndex:a,progress:r}}),[$,i,o]),k=n.React.useMemo((()=>y.styleUtils.toCSSStyle(v)),[v]),{transform:L}=k,E=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(k,["transform"]),A=I>0||I<0?`rotateZ(${I}deg)`:"";let z=A;L&&(z=`${L} ${A}`);const N=n.React.useCallback((()=>{P(!0)}),[]),B=n.React.useCallback((()=>{P(!1)}),[]),F=n.React.useCallback((e=>{T.current=!0,R.current=e.target===C.current,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&P(!0)}),[d]),H=n.React.useCallback((e=>{T.current=!1,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&(j.current=setTimeout((()=>{P(!1)}),500))}),[d]),V=d&&!M;!function(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,r=n.React.useRef(),s=n.ReactRedux.useSelector((e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),l=n.React.useRef(s),u=n.React.useCallback((()=>{r.current&&(clearInterval(r.current),r.current=null)}),[]),d=n.React.useCallback((()=>{u(),r.current=setInterval((()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),r=a.appConfig.sections[e].views,s=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e],l=(null==s?void 0:s.currentViewId)?r.indexOf(s.currentViewId):0,u=l<r.length-1?l+1:0;return!(!t&&0===u||(n.jimuHistory.changeView(e,r[u]),0))}(t,a);e||u()}),1e3*i)}),[t,a,i,u]);n.React.useEffect((()=>{if(!l.current){if(!o)return void u();d()}return()=>{u()}}),[o,i,a,u,d]),n.React.useEffect((()=>{if(l.current!==s&&null!==s){if(l.current=s,s)return void u();o&&d()}}),[s,d,u,o])}({sectionId:u,interval:p,loop:g,autoPlay:V});const D=n.React.useCallback((e=>{n.jimuHistory.changeView(u,o[e])}),[u,o]);return(0,n.jsx)("div",{className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==v?void 0:v.boxShadow)||void 0===t?void 0:t.presetStyle}`,h,{"aspect-ratio-wrapper":f&&m>0}),css:wt(m),"data-sectionid":u,style:Object.assign(Object.assign({},E),{transform:z}),onMouseEnter:d?N:null,onMouseLeave:d?B:null,onTouchStart:d?N:null,onTouchEnd:d?B:null,onFocus:F,onBlur:H,tabIndex:c?0:void 0,ref:C},(0,n.jsx)(pt,{views:o,navInfo:i,animationPreview:r,playMode:s,currentIndex:O.currentIndex,previousIndex:O.previousIndex,progress:O.progress,loop:V&&g,viewTransition:l,layoutEntryComponent:x,viewVisibilityContext:b}),(0,n.jsx)(It,{sectionId:u,numOfViews:o.length,currentIndex:O.currentIndex,onCurrentViewChange:D}))}class bt extends n.React.PureComponent{render(){return n.React.createElement(xt,Object.assign({},this.props,{layoutEntryComponent:lt,viewVisibilityContext:d}))}}var St=r(4758);function Ct(e,t){const[o,i]=n.React.useState(null),a=n.React.useContext(St.PageVisibilityContext),r=n.React.useRef(!1);n.React.useEffect((()=>{null==e||t||r.current===a||(r.current=a,i((0,n.getNextAnimationId)()))}),[a,t,e]);const s=n.React.useCallback((()=>{i(null)}),[]);return[o,!a,s]}function Tt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Rt(e){var t,o,i,a,r,s,u,d,c;const p=n.ReactRedux.useSelector((t=>function(e,t){const o=A(e,t);if(!o.layoutItem)return o;if(o.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:i,layoutItemId:a}=t,r=function(e,t,o){var i;const a=e.appConfig.layouts[t].content[o];if(a.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[a.widgetId],n=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(n)return n[e.browserSizeMode]}return null}(e,i,a),s=Object.assign({},o);return r&&(s.innerLayoutId=r),s}const i=Ue(e,o.layoutItem.sectionId);return Object.assign(Object.assign({},o),i)}(t,e)),n.ReactRedux.shallowEqual),g=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==n&&n})),y=Object.assign(Object.assign({},e),p),h=n.React.useRef(),{layoutId:v,layoutItemId:f,layoutItem:I}=y,{className:w,children:x,id:b,isLastChild:S}=y,C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(y,["className","children","id","isLastChild"]),T=(null==I?void 0:I.type)===n.LayoutItemType.Widget,R=(null==I?void 0:I.type)===n.LayoutItemType.Section,{effect:j,oneByOneEffect:M,hoverEffect:P}=g?{}:null!==(o=null===(t=y.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{};let $=null===(i=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.type;$=$&&$!==n.AnimationType.None?$:null;let O=null===(a=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;O=O&&O!==n.AnimationType.None?O:null;const[k,L]=n.React.useState(!1),[E,z]=n.React.useState({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],playId:null,oid:p.innerLayoutId,revert:null}),N=function(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),t&&e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:Tt(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}(h.current,y.watchViewportVisibility);n.React.useEffect((()=>{L(!0)}),[]);const{setting:B}=n.React.useContext(n.AnimationContext),[F,H,V]=Ct($,null!=(null==B?void 0:B.type)&&B.type!==n.AnimationType.None),[D,W,G]=Ct(O,null!=(null==B?void 0:B.type)&&B.type!==n.AnimationType.None);n.React.useEffect((()=>{null==F&&D&&z({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],playId:D,oid:p.innerLayoutId,revert:W,onContextAnimationEnd:W?null:()=>{G(),z({setting:null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],oid:p.innerLayoutId,playId:-1})}})}),[F,D]);const U=n.React.useCallback((()=>{var e;const t=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView],o=(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious;z({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:o,onContextAnimationEnd:o?null:()=>{z({setting:t,oid:p.innerLayoutId,playId:-1})}})}),[O]),_=n.React.useCallback((()=>{var e;const t=null==M?void 0:M[n.AnimationTriggerType.ScrollIntoView];(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious&&z({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:!1,onContextAnimationEnd:()=>{z({setting:t,oid:p.innerLayoutId,playId:-1})}}),F>0&&(null==V||V())}),[O,F]);if(!y.layoutItem||R&&!I.sectionId)return null;const X=null===(r=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,Y=null!==(c=null===(d=null===(u=null===(s=I.setting)||void 0===s?void 0:s.style)||void 0===u?void 0:u.transform)||void 0===d?void 0:d.rotate)&&void 0!==c?c:0;return(0,n.jsx)(l.Provider,{value:N},(0,n.jsx)(n.AnimationComponent,{id:b,parentId:v,type:$,configType:null==X?void 0:X.configType,direction:null==X?void 0:X.direction,revert:H,delay:e.delay,isLastChild:S,playId:F,onAnimationStart:U,onAnimationEnd:_,ref:h,css:n.css`
          ${(0,n.getHoverStyle)(null==P?void 0:P.type,null==P?void 0:P.setting)};
          position: relative;
          overflow: visible;
          min-width: ${m}px;
          min-height: ${m}px;
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",w,{"is-widget":T,"is-section":R}),"data-layoutitemid":f,"data-layoutid":v},(0,n.jsx)(n.AnimationContext.Provider,{value:E},T&&(0,n.jsx)(et,Object.assign({rotate:Y},C)),R&&(0,n.jsx)(bt,Object.assign({rotate:Y},C))),e.children))}function jt(e){return"ratio"===e.heightMode}class Mt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var n,o,i,a,r;const s={};let l=null!==(n=null==t?void 0:t.autoProps)&&void 0!==n?n:{},u=e;const d=ae("height",e,l),c=ae("width",e,l);if(d===S.Stretch)s.top=u.top,s.bottom=u.bottom;else{const n=null!==(o=l.top)&&void 0!==o&&o,a=null!==(i=l.bottom)&&void 0!==i&&i;d===S.Custom&&(s.height=u.height),n!==a&&!a||null==e.top?s.bottom=u.bottom:s.top=u.top,t.vCenter&&"50%"===u.top&&(s.top="50%")}if(c===S.Stretch)s.left=u.left,s.right=u.right;else{const e=null!==(a=l.left)&&void 0!==a&&a,n=null!==(r=l.right)&&void 0!==r&&r;c===S.Custom&&(s.width=u.width),e===n?null!=u.left?s.left=u.left:s.right=u.right:e&&null!=u.right?s.right=u.right:s.left=u.left,t.hCenter&&"50%"===u.left&&(s.left="50%")}return s}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,n=!1){const o={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,r=W()?-1:1;return i&&a?(o.right="auto",o.bottom="auto",o.transform=`translate(${-50*r}%, -50%)`):i?(o.right="auto",o.transform=`translateX(${-50*r}%)`):a&&(o.bottom="auto",o.transform="translateY(-50%)"),!n&&jt(t)&&(o.height="auto"),o}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${O(e,"left")};
      right: ${O(e,"right")};
      top: ${O(e,"top")};
      bottom: ${O(e,"bottom")};
      width: ${O(e,"width")};
      height: ${O(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},ue,e.setting),i=G(o.aspectRatio),a=jt(o),r=se(this.props),[s,l]=this.getPositionStyle(o),u=ae("width",e.bbox,o.autoProps),d=ae("height",e.bbox,o.autoProps);return(0,n.jsx)(Rt,Object.assign({css:s,style:{transform:l},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:u===S.Auto,autoHeight:d===S.Auto},r))}}class Pt extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(Mt,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e,s=!1;if(t[a]!==e.id&&this.layoutTransform){let n;Object.keys(t).some((o=>{if(t[o]===e.id)return n=o,!0})),r=this.layoutTransform(e,n,a),s=!0}const l=n.lodash.assign({},le,r.setting),u=r.order||[],d=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:d,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),y.styleUtils.toCSSStyle(l.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":r.id},u.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              `,oid:e.id,"data-layoutid":e.id},u.map(((e,t)=>this.createItem(r,e,t,s))))))}}const $t=n.ReactRedux.connect(E)(Pt);class Ot extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,n;return(null===(n=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===n?void 0:n.width)!==S.Custom}(e)}calHeight(e,t){return function(e,t){var n,o;return(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{index:o,layoutItem:i,space:a}=this.props,r=i.bbox||{},s=this.calHeight(e,r);return s.width=t?"auto":r.width,this.autoHeight="auto"===s.height,function(e,t,o,i,a){var r,s,l;const u=(null===(r=i.autoProps)||void 0===r?void 0:r.height)===S.Auto;return n.css`
    margin-top: ${e>0?`${t}px`:"unset"};
    align-self: ${a?"stretch":null!==(l=null===(s=i.style)||void 0===s?void 0:s.alignSelf)&&void 0!==l?l:"auto"};
    width: ${O(o,"width")};
    height: ${O(o,"height")};
    flex: ${o.flex};
    flex-shrink: ${o.flexShrink};
    min-height: ${u?"unset":null};
  `}(o,a,s,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,onClick:a}=this.props;if(!i||i.isPending)return null;const r=i.setting||{},s=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:S.Custom,l=(0,n.classNames)("flexbox-layout-item",{"d-flex":s!==S.Auto}),u=this.isStretchInCrossAxis(),d="ratio"===r.heightMode,c=G(r.aspectRatio),p=se(this.props);return(0,n.jsx)(Rt,Object.assign({css:this.getStyle(r,u),layoutId:o,layoutItemId:i.id,onClick:a,className:l,forceAspectRatio:d,aspectRatio:c,autoHeight:this.autoHeight},p))}}const kt={min:16,space:10},Lt=e=>n.css`
  height: 100%;
  overflow-x: hidden;
  justify-content: ${e.justifyContent};
  overflow-y: auto !important;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  &:hover {
    -ms-overflow-style: auto;  /* Internet Explorer 10+ */
    scrollbar-width: auto;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
`;class Et extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)(Ot,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},kt,e.setting),a={position:"relative",overflow:"hidden",padding:y.styleUtils.toCSSPadding(i.padding)},r=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:r,style:a,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0,layoutId:e.id}},(0,n.jsx)(n.OneByOneAnimation,{oid:e.id,className:"trail-container d-flex flex-column w-100",css:Lt(i)},o.asMutable().map(((e,t)=>this.createItem(e,t,i))))))}}const At=n.ReactRedux.connect(E)(Et),zt=n.css`
  width: 100%;
  display: flex;
  justify-content: center;

  .offset-1 {
    margin-left: 8.33333%;
    margin-right: 0;
  }
  .offset-2 {
    margin-left: 16.66667%;
    margin-right: 0;
  }
  .offset-3 {
    margin-left: 25%;
    margin-right: 0;
  }
  .offset-4 {
    margin-left: 33.33333%;
    margin-right: 0;
  }
  .offset-5 {
    margin-left: 41.66667%;
    margin-right: 0;
  }
  .offset-6 {
    margin-left: 50%;
    margin-right: 0;
  }
  .offset-7 {
    margin-left: 58.33333%;
    margin-right: 0;
  }
  .offset-8 {
    margin-left: 66.66667%;
    margin-right: 0;
  }
  .offset-9 {
    margin-left: 75%;
    margin-right: 0;
  }
  .offset-10 {
    margin-left: 83.33333%;
    margin-right: 0;
  }
  .offset-11 {
    margin-left: 91.66667%;
    margin-right: 0;
  }
`,Nt={space:10,style:{padding:{number:[10,10,10,10],unit:y.DistanceUnits.PIXEL}}},Bt={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class Ft extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,r=W()?-1:1,s=function(e,t,n){var o,i,a,r,s,l,u,d,c,p,g,y,h,v;return n?{height:(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(s=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==s?s:"flex-start"}:(null===(l=e.autoProps)||void 0===l?void 0:l.height)===S.Auto?{height:"auto",alignSelf:null!==(d=null===(u=e.style)||void 0===u?void 0:u.alignSelf)&&void 0!==d?d:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===S.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===S.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(v=null===(h=e.style)||void 0===h?void 0:h.alignSelf)&&void 0!==v?v:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var r,s,l,u;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${O(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*t}px, ${null!==(s=a.offsetY)&&void 0!==s?s:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${O(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(l=a.offsetX)&&void 0!==l?l:0)*t}px, ${null!==(u=a.offsetY)&&void 0!==u?u:0}px)`:null]}(i,r,t,s,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const r=n.lodash.assign({},Bt,a.setting),s=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),l=null===(e=r.autoProps)||void 0===e?void 0:e.height,u=G(r.aspectRatio),d=se(this.props),[c,p]=this.getStyle(r);return(0,n.jsx)(Rt,Object.assign({css:c,style:{transform:p},className:s,layoutId:i,layoutItemId:a.id,forceAspectRatio:"ratio"===r.heightMode,aspectRatio:u,onClick:this.props.onClick,autoHeight:l===S.Auto},d))}}class Ht extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=W()}collectBounds(){var e;const{transformedLayout:t}=this.props,n=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],n.forEach((e=>{var n,o;if(t.content[e].isPending)return;const i=null===(o=null===(n=t.content)||void 0===n?void 0:n[e])||void 0===o?void 0:o.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Nt}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:r}=this.props,s=this.getConfig(),l=e[t],u=null!==(i=s.space)&&void 0!==i?i:0;let d;if(0===t)d=l.left;else{const n=e[t-1];d=l.left-n.left-n.width}return(0,n.jsx)(Ft,{key:`${l.layoutId}_${l.id}`,offset:d,gutter:u,span:l.width,isMultiRow:r,layoutId:a.id,layoutItemId:l.id,layoutItem:a.content[l.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const r=this.childRects,s=this.getConfig(),l=null!==(e=s.style)&&void 0!==e?e:{},u=null!==(t=s.space)&&void 0!==t?t:0;return(0,n.jsx)(a.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:zt,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,n.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                  `},r.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:o.id,className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                          position: relative;
                          height: 100%;
                          overflow: ${this.props.isMultiRow?"auto":"unset"};
                        `},r.map(((e,t)=>this.createItem(r,t,l))))))))))}}class Vt extends n.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var n;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:o}=this.props;null!=(null===(n=window.runtimeInfo.widgets)||void 0===n?void 0:n[o])?window.runtimeInfo.widgets[o].height=t:window.runtimeInfo.widgets[o]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}transform(){const{layout:e,layouts:t,browserSizeMode:n,mainSizeMode:o}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[n]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,o,n)),this.finalLayout=i}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(Ht,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e})}render(){var e;const{layout:t,className:o}=this.props,i=null!==(e=t.setting)&&void 0!==e?e:Nt;return this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",o),css:n.css`
          width: 100%;
          padding: ${y.styleUtils.toCSSPadding(i.style.padding)};
        `,"data-layoutid":t.id},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const Dt=n.ReactRedux.connect(E)(Vt);var Wt=r(7077),Gt=r.n(Wt);const Ut=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Gt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var _t=r(5339),Xt=r.n(_t);const Yt=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Xt()},i)):n.React.createElement("svg",Object.assign({className:a},i))},Zt=n.css`
  & > .max-grid-item-btn {
    display: none;
    background: var(--light-500);
    width: 26px;
    height: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }

  &:hover > .max-grid-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Jt=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 20;
  background: var(--light);
`;function qt(e){const[t,o]=n.React.useState(!1),i=n.ReactRedux.useSelector((t=>function(e,t,n){var o,i,a,r;const s=e.appConfig.layouts[t];if(null!==(i=null===(o=null==s?void 0:s.setting)||void 0===o?void 0:o.expandable)&&void 0!==i&&!i)return!1;const l=null===(a=null==s?void 0:s.setting)||void 0===a?void 0:a.rootItem;let u=!1;if(l===n){const e=s.content[l];null!=(null===(r=e.setting)||void 0===r?void 0:r.children)&&0!==e.setting.children.length||(u=!0)}return!u}(t,e.layoutId,e.layoutItemId))),a=n.React.useCallback((()=>{o(!t)}),[t]);return(0,n.jsx)(Rt,Object.assign({},e,{css:n.css`${Zt};${t?Jt:""}`}),i&&(0,n.jsx)(y.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:a},t&&(0,n.jsx)(Yt,null),!t&&(0,n.jsx)(Ut,null)))}const Kt=32;function Qt(e,t,n,o,i,a){let r=o,s=i;if("row"===n){const n=a?t.width:e.width,i=a?e.width:t.width;o<0&&(r=n>Kt?-Math.min(Math.abs(o),n-Kt):0),o>0&&(r=i>Kt?Math.min(o,i-Kt):0)}else i<0&&(s=e.height>Kt?-Math.min(Math.abs(i),e.height-Kt):0),i>0&&(s=t.height>Kt?Math.min(i,t.height-Kt):0);return{x:r,y:s}}function en(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].setting.size}function tn(e){var t,o;const{referenceItemId:i,direction:a,layoutId:r,onResizeEnd:s}=e,l=n.React.useRef(),u=n.React.useRef(),d=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===n.AppMode.Design)),g=n.ReactRedux.useSelector((t=>{var n,o;return null===(o=null===(n=t.appConfig.layouts[e.layoutId].setting)||void 0===n?void 0:n.resizable)||void 0===o||o})),h=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitSize)&&void 0!==n?n:8})),v=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitColor)&&void 0!==n?n:"var(--light-500)"})),f=n.React.useMemo((()=>{const e=`${h}px`,t=!!p||g;return n.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${v};
      position: relative;
      z-index: 10;
      flex-shrink: 0;

      .horizontal-splitter {
        cursor: ${t?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${t?"row-resize":"default"};
      }
    `}),[a,g,p,h,v]);return y.hooks.useEffectOnce((()=>{let e,t,o,r,p,g,y,h,v,f,m,I,w;return n.moduleLoader.loadModule("jimu-core/dnd").then((n=>{const x=n.interact;d.current=x,l.current&&(u.current=x(l.current).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[x.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=l.current.parentElement.getBoundingClientRect(),r=l.current.previousElementSibling,p=r.getBoundingClientRect(),y=r.style.width,h=r.style.height,g=en(r),v=l.current.nextElementSibling,f=v.getBoundingClientRect(),I=v.style.width,w=v.style.height,m=en(v)},onmove:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:o,y:i}=Qt(p,f,a,e,t,c),s=c?-1:1;"row"===a?(r.style.width=`calc(${g}% + ${o*s}px)`,v.style.width=`calc(${m}% - ${o*s}px)`):(r.style.height=`calc(${g}% + ${i}px)`,v.style.height=`calc(${m}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:l,y:u}=Qt(p,f,a,e,t,c),d=c?-1:1;r.style.width=y,v.style.width=I,r.style.height=h,v.style.height=w,s(i,Math.round(l*d*1e4/o.width)/100,Math.round(1e4*u/o.height)/100)}}))})),()=>{var e;null===(e=u.current)||void 0===e||e.unset(),u.current=null}})),n.React.useEffect((()=>{null!=u.current&&d.current(l.current).draggable(!!p||g)}),[g,p]),(0,n.jsx)("div",{ref:l,css:f,className:"grid-split flex-shrink-0"},(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}function nn(e){const{layout:t,layoutItemId:o,isLast:i,className:a}=e,r=n.React.useMemo((()=>{const e=t.content[o];return null==e?void 0:e.setting}),[t,o]),s=n.React.useMemo((()=>(null==r?void 0:r.parent)?t.content[r.parent].setting.type:null),[t,r]),l=n.React.useContext(n.AnimationContext),u=n.React.useMemo((()=>{var e,t;return(null===(t=null===(e=null==l?void 0:l.setting)||void 0===e?void 0:e.option)||void 0===t?void 0:t.parentMode)===n.ParentAnimationMode.AllAtOnce?0:250}),[l]),d=n.React.useCallback((()=>s===b.Row?n.css`height: 100%; width: ${r.size}%`:s===b.Column?n.css`width: 100%; height: ${r.size}%`:n.css`width: 100%; height: 100%;`),[null==r?void 0:r.size,s]);if(!r)return null;if(r.type===b.Row)return(0,n.jsx)(on,{className:a,css:d(),layout:t,layoutItemId:o,items:r.children});if(r.type===b.Column)return(0,n.jsx)(an,{className:a,css:d(),layout:t,layoutItemId:o,items:r.children});if(r.type===b.Tab)return(0,n.jsx)(rn,{className:a,css:d(),layout:t,layoutItemId:o,items:r.children});const c=function(e,t){var n,o,i;let a=0;const r=e.setting.rootItem,s=e.content[r];if(s&&(null===(o=null===(n=s.setting)||void 0===n?void 0:n.children)||void 0===o?void 0:o.length)>0){const n=[...s.setting.children];for(;n.length>0;){const o=n.shift(),r=e.content[o],s=r.setting.parent,l=e.content[s];if(`${r.id}`===t||l.setting.type===b.Tab&&l.setting.children.indexOf(+t)>=0)return a;(null===(i=r.setting.children)||void 0===i?void 0:i.length)>0?n.unshift(...r.setting.children):(l.setting.type!==b.Tab||l.setting.type===b.Tab&&0===l.setting.children.indexOf(o))&&(a+=1)}}return a}(t,o),p=function(e,t){var n,o,i;let a=e.content[t];if((null===(o=null===(n=null==a?void 0:a.setting)||void 0===n?void 0:n.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=a;){const t=null===(i=a.setting)||void 0===i?void 0:i.parent;if(null==t)break;const n=e.content[t],o=n.setting.children.length;if(+n.setting.children[o-1]!=+a.id)return!1;a=n}return!0}(t,o);return(0,n.jsx)(qt,{css:d(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o,delay:c*u,isLastChild:p})}function on(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef();y.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const s=y.hooks.useEventCallback(((e,n)=>{const o=r.current(),a=i.indexOf(e),s=i[a+1],l=t.content[e],u=t.content[s];o.editLayoutItemSetting({layoutId:t.id,layoutItemId:e},l.setting.set("size",l.setting.size+n)),o.editLayoutItemSetting({layoutId:t.id,layoutItemId:s},u.setting.set("size",u.setting.size-n)),o.exec()}));return(0,n.jsx)("div",{className:`d-flex ${a}`,css:n.css`
      .is-last {
        width: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,r=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(nn,{key:a,layout:t,layoutItemId:a}),!r&&(0,n.jsx)(tn,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:s}));var a,r})))}function an(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=n.React.useRef();y.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const s=y.hooks.useEventCallback(((e,n,o)=>{const a=r.current(),s=i.indexOf(e),l=i[s+1],u=t.content[e],d=t.content[l];a.editLayoutItemSetting({layoutId:t.id,layoutItemId:e},u.setting.set("size",u.setting.size+o)),a.editLayoutItemSetting({layoutId:t.id,layoutItemId:l},d.setting.set("size",d.setting.size-o)),a.exec()}));return(0,n.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
      .is-last {
        height: auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
    `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,r=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(nn,{key:a,layout:t,layoutItemId:a}),!r&&(0,n.jsx)(tn,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:s}));var a,r})))}function rn(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,r=e=>{var o,i;const a=(0,n.getAppStore)().getState().appConfig,r=a.layouts[t.id].content[e];if((null==r?void 0:r.type)===n.LayoutItemType.Widget){const e=a.widgets[r.widgetId];return null!==(o=null==e?void 0:e.label)&&void 0!==o?o:r.id}return(null==r?void 0:r.type)===n.LayoutItemType.Section?a.sections[r.sectionId].label:null!==(i=null==r?void 0:r.id)&&void 0!==i?i:""};return(0,n.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o},(0,n.jsx)(y.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`& > .tab-content { overflow: hidden }`},i.map(((e,o)=>((e,o)=>(0,n.jsx)(y.Tab,{key:o,id:`${o}`,title:r(e)},(0,n.jsx)(nn,{layout:t,layoutItemId:e})))(e,o)))))}class sn extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.GridLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t,o,i;const{layouts:a,layout:r,browserSizeMode:s,mainSizeMode:l,className:u}=this.props;let d=r;a[s]!==r.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(d=this.layoutTransform(r,l,s)));const{rootItem:c}=null!==(e=d.setting)&&void 0!==e?e:{},p=null===(t=d.content)||void 0===t?void 0:t[c],g=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",u);return(0,n.jsx)("div",{className:g,css:n.css`overflow: hidden; padding: ${y.styleUtils.toCSSPadding(null===(i=null===(o=d.setting)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)};`,"data-layoutid":d.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:d.id,"data-layoutid":d.id,className:"trail-container d-flex w-100 h-100",css:n.css`
              width: 100%;
            `},p?(0,n.jsx)(nn,{className:"w-100 h-100",layout:d,layoutItemId:c}):this.props.children)))}}const ln=n.ReactRedux.connect(E)(sn);class un{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,n,o,i,a){return{index:t,item:e}}}class dn{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o){var i,a;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=function(e,t,n){var o;const i=Ce(e,n),a=function(e,t,n){var o,i,a,r,s,l,u;const d=e.widgets[n];if(null!=d){const c=Y(),p=e.mainSizeMode,g=d.layouts.DEFAULT[c],y=d.layouts.DEFAULT[p],h=U(null!==(s=null===(r=null===(a=null===(i=(null!==(o=e.layouts[g])&&void 0!==o?o:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==s?s:[0]),v=null!==(u=null===(l=null==t?void 0:t[n])||void 0===l?void 0:l.height)&&void 0!==u?u:0;let f=h[0],m=h[2];return P(f)&&(f=L(f,v)),P(m)&&(m=L(m,v)),v-f-m}return 0}(e,t,i);if(a>0){const t=null!==(o=e.layouts[n].order)&&void 0!==o?o:[],i={};return t.forEach((t=>{const o=e.layouts[n].content[t];i[t]=_(a,o)})),i}return null}(function(){const e=(0,n.getAppStore)().getState();return window.jimuConfig.isBuilder?null==e?void 0:e.appStateInBuilder:e}().appConfig,null===(i=window.runtimeInfo)||void 0===i?void 0:i.widgets,e.id);let o=0;Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).sort(((t,n)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[n].bbox.left,10))).forEach((i=>{var a,s,l;const u=e.content[i];if(!u.isPending){if(r=r.setIn(["content",i,"bbox"],{left:12*o,width:12,height:null!==(s=null===(a=u.bbox)||void 0===a?void 0:a.height)&&void 0!==s?s:"auto"}),null!=t){const e=null!==(l=u.setting)&&void 0!==l?l:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return r}transformLayoutItem(e,t,n,o,i,a){return{item:e,index:t}}}class cn{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout}transformLayout(e,t,o){var i,a;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem;if(o&&(null===(a=e.content)||void 0===a?void 0:a[o])){const n=[];Object.keys(e.content).forEach((i=>{if(i!==o&&!e.content[i].isPending){const a=e.content[i].setting;a.type!==b.Column&&a.type!==b.Row&&a.type!==b.Tab&&(n.push(i),t=t.setIn(["content",i,"setting","parent"],o))}})),n.length>0&&(t=t.setIn(["content",o,"setting","type"],b.Tab),t=t.setIn(["content",o,"setting","children"],n))}return t}return e}transformLayoutItem(e,t,n,o,i,a){return{index:t,item:e}}}const pn={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:y.DistanceUnits.PIXEL}}},gn={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0};function yn(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class hn extends n.React.PureComponent{calHeight(e){const t=function(e,t){const n=O(e.bbox||{},"height");if(!n||P(n))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return n}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=W()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${yn(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),r=n.lodash.assign({},gn,t.setting),s=se(this.props),[l,u]=this.getStyle(r);return(0,n.jsx)(Rt,Object.assign({id:`${e}_block_${t.id}`,css:l,style:{transform:u},layoutId:e,layoutItemId:t.id,onClick:o,className:a,autoHeight:this.autoHeight},s))}}const vn=n.ReactRedux.connect((function(e,t){var o,i,a,r;let s=!0,l=!1;const{layoutItem:u}=t,d=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;if(d&&(l=d.layoutId===t.layoutId&&d.layoutItemId===u.id),u.type===n.LayoutItemType.Widget){const t=u.widgetId,n=e.appConfig.widgets[t];let o=[0,0,0,0];if(n){o=y.styleUtils.expandStyleArray(null===(r=null===(a=null===(i=n.config)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number);const t=Object.keys(n.layouts)[0],l=$e(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),u=e.appConfig.layouts[l];u&&Object.keys(u.content||[]).length>0&&Object.keys(u.content||[]).some((e=>{if(!u.content[e].isPending)return s=!1,!0}))}return{isEmpty:s,selected:l,padding:o[0]+o[2]}}return{selected:l,isEmpty:!1,padding:0}}))(hn);class fn extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const r=e.setting,s=null!==(o=null==r?void 0:r.floatingArea)&&void 0!==o?o:1,l=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,u=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:d,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,h=W()?`translateX(calc(50% + ${l}))`:`translateX(calc(-50% + ${l}))`,v={};switch(s){case 1:v.left=l,v.top=u,v.transform=null;break;case 2:v.left="50%",v.top=u,v.transform=h;break;case 3:v.right=l,v.top=u,v.transform=null;break;case 4:v.left=l,v.top="50%",v.transform=`translateY(calc(-50% + ${u}))`;break;case 5:v.left="50%",v.top="50%",v.transform=`${h} translateY(calc(-50% + ${u}))`;break;case 6:v.right=l,v.top="50%",v.transform=`translateY(calc(-50% + ${u}))`;break;case 7:v.left=l,v.bottom=u,v.transform=null;break;case 8:v.left="50%",v.bottom=u,v.transform=h;break;case 9:v.right=l,v.bottom=u,v.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:O(e.bbox,"width")};
    height: ${y?`${g+d}px`:O(e.bbox,"height")};
    left: ${v.left};
    right: ${v.right};
    top: ${v.top};
    bottom: ${v.bottom};
    transform: ${v.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)(Rt,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}function mn(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function In(e){switch(e){case n.ScreenTriggerType.Top:return"0% 0% -98% 0%";case n.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case n.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}const wn=.33,xn=.25;function bn(e,t,o,i,a,r,s,l,u){const{side:d,size:c,offset:p,background:g,overlay:h=!0,padding:v}=e.panel||{},f=(0,n.getAppStore)().getState().appContext.isRTL?"left"===d?"-":"":"right"===d?"-":"",m=y.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const e=!h;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${s===n.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${l===n.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${l!==n.ScreenTransitionType.Fade&&e?`${Math.round(t*wn)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*wn)}px; */
      }

      .panel-content {
        width: 100%;
        ${h?"":m};
        /* margin-top: ${s===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${h?m:""};
          min-height: ${Math.round(t*xn)}px;
          padding: ${y.styleUtils.toCSSPadding(v)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${h?m:""};
        }

        .panel-spacing {
          height: ${Math.round(t*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${t}px;
      }

      body:not(.design-mode) & {
        min-height: ${l===n.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${l===n.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${l!==n.ScreenTransitionType.Fade&&e?"33vh":null};
        padding-top: ${l!==n.ScreenTransitionType.Fade&&e?"calc(var(--vh) * 33)":null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(25)}vh;
          min-height: calc(var(--vh) * ${Math.round(25)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});
        }
      }
    `}return n.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===d?"row-reverse":"row"};
    justify-content: ${"center"===d&&h?"center":"flex-start"};
    position: relative;
    opacity: ${s===n.ScreenTransitionType.Fade?i?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*t/3)}px; */
    }

    .panel-content {
      width: ${c};
      transform: ${h&&Math.abs(parseFloat(p))>0?`translateX(${f}${p})`:null};
      flex: 0 auto;
      min-height: ${r?`${t}px`:"unset"};
      ${h?"":m};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${h?m:""};
        min-height: ${Math.round(t*xn)}px;
        padding: ${y.styleUtils.toCSSPadding(v)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${h?m:""};
      }

      .panel-spacing {
        height: ${Math.round(t*I/100)}px;

        &.last-item {
          height: ${r?`${Math.round(t*I/100)}`:t}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?t:Math.round(t*xn)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: ${66.7}vh; */
      }

      .panel-content {
        min-height: ${r?o>0?`calc(100vh - ${o}px)`:"100vh":"unset"};
        min-height: ${r?o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${r?I:100}vh;
            height: calc(var(--vh) * ${r?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}function Sn(e){var t;const{index:o,screenId:i,onInterctionChange:a,onHeightChange:r,viewHeight:s,headerHeight:l,layoutEntry:u,isActive:d,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:h,verticalSpace:v="0"}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=f,I=n.React.useRef(),[w,x]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(r,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[r]);const C=n.React.useCallback(((e,t)=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return function(e,t,o,i){const a=n.React.useRef(),r=n.React.useRef();n.React.useEffect((()=>{if(a.current&&(a.current.unobserve(e),a.current=null),e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,n=e.rootBounds,o=Math.abs(t.bottom-n.top)>=Math.abs(t.top-n.top);e.isIntersecting?(r.current=!0,o&&i(!0)):r.current&&(r.current=!1,o)&&i(!1)})(e[0])}),{threshold:mn(),root:t||document,rootMargin:In(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{x(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=f.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:bn(f,s,l,d,v,h||null==m,p,g,c)},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(u,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:C}))}var Cn=r(5467),Tn=r.n(Cn);const Rn=e=>{const t=window.SVG,{className:o}=e,i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n}(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Tn()},i)):n.React.createElement("svg",Object.assign({className:a},i))},jn=(0,ut.withBuilderTheme)(y.Tooltip);function Mn(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:r,isAbsolute:s,isLast:l,isSmallSize:d,layoutEntry:c,isDesignMode:p,formatMessage:g,builderTheme:h}=e,v=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),f=n.ReactRedux.useSelector((e=>{var t,n,o;return null===(o=null===(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===n?void 0:n[a])||void 0===o||o})),{main:m}=v,{side:I,size:w,overlay:x=!0}=v.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]),C=(0,n.classNames)("screen-main-panel",{"is-active":r,"last-one":l});return(0,n.jsx)(u.Provider,{value:!s||r},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,r;if(d){const a=!x&&null!=v.panel,r=a?`${Math.round(o*wn)}px`:`${o}px`,s=a?`${Math.round(33)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${y.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=v.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${r} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${s}vh !important;
            height: calc(var(--vh) * ${s}) !important;
          }
        }

        .spacing-area {
          flex: 1;
          background: transparent;
          pointer-events: none;
        }

        .toggle-visible-btn {
          position: absolute;
          bottom: 0;
          right: left;
          pointer-events: auto;
        }
      `}let l="0px",u="0px";"none"!==I&&(x||"right"===I||(l=w),x||"right"!==I||(u=w));const c=h?n.css`
      color: ${h.colors.palette.dark[900]};
      background-color: ${h.colors.palette.light[400]};
      border-color: ${h.colors.palette.light[600]};
      &:hover {
        color: ${h.colors.black};
        background-color: ${h.colors.palette.light[600]};
      }
    `:null;return n.css`
      ${y.styleUtils.toBackgroundEmotionStyle(null!==(r=null===(a=v.main)||void 0===a?void 0:a.background)&&void 0!==r?r:{})};
      left: ${s?l:null};
      right: ${s?u:null};
      margin-left: ${s?null:l};
      margin-right: ${s?null:u};
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${o}px !important;
        background: transparent;
        border: none !important;
      }

      body:not(.design-mode) & {
        > .layout {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"} !important;
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"} !important;
        }
      }

      .spacing-area {
        flex: 1;
        background: transparent;
        pointer-events: none;
      }

      .toggle-visible-btn {
        position: absolute;
        bottom: 0;
        right: 0;

        > button {
          ${c};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(c,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(jn,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(y.Button,{type:"default",size:"sm",className:"rounded"},(0,n.jsx)(Rn,{size:"m"}))))))}function Pn(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
      position: sticky;
      height: ${t}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${o>0?`calc(100vh - ${o}px)`:"100vh"};
        height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"};
        top: ${o>0?`${o}px`:0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${i?null:"opacity 400ms"};
        top: 0;
        /* height: ${i?"unset":"100% !important"}; */

        .layout .exb-drop-area {
          pointer-events: none;
        }

        &.is-active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          z-index: 1;

          .layout .exb-drop-area {
            pointer-events: auto;
          }
        }
      }
    `:e===n.ScreenTransitionType.Cover?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${o>0?`${o}px`:0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===a?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:e===n.ScreenTransitionType.Push?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${o>0?`${o}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function $n(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===n.ScreenTransitionType.Cover||e===n.ScreenTransitionType.Push?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function On(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:r,transitionType:s,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:Pn(s,i,a,l,r.length)},r.map(((e,g)=>(0,n.jsx)(Mn,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:s===n.ScreenTransitionType.Fade,isLast:g===r.length-1,isSmallSize:l,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:$n(s,i)}))}function kn(e,t){return n.css`
    position: relative;
    width: 100%;

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(33)}vh;
        padding-top: calc(var(--vh) * ${Math.round(33)});
      }

      /* > div:nth-last-of-type(2) {
        min-height: 100vh;
      } */
    }

    &.small-size .main-panels {
      z-index: ${t?0:1};
    }

    &.small-size .side-panels {
      z-index: ${t?1:0};
    }

    &.print-preview {
      .screen-container {
        height: auto;
        position: relative;

        .screen-main-panel {
          position: relative;
          opacity: 1 !important;
        }
      }
      .screen-side-panel {
        min-height: calc(var(--vh) * 100);
        opacity: 1 !important;
        .panel-spacing {
          display: none;
        }
      }
      .screen-placeholder {
        display: none;
      }
    }
  `}function Ln(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:r}=e,{screenGroupId:s}=r,l=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[r.screenGroupId])),u=n.ReactRedux.useSelector((e=>{var t,n;return null!==(n=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==n&&n})),d=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[r.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=n.React.useContext(a),g=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const n=e.browserSizeMode,o=e.appConfig.mainSizeMode,i=t.height[n]||t.height[o]||75;return parseInt(i,10)}}return 0})),{screens:y,stretchPanel:h=!0,triggerType:v=n.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:m=n.ScreenTransitionType.Push}=l;let I=u?null:null!==(t=l.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;u||c!==n.BrowserSizeMode.Small||d||(I=n.ScreenTransitionType.Cover);const w=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[s]})),x=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(),[C,T]=n.React.useState(0),R=n.React.useMemo((()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[s])||void 0===t?void 0:t.screens;return!!(null==a?void 0:a[C])&&(null===(o=i.screens[a[C]].panel)||void 0===o?void 0:o.overlay)}),[s,C,c]);n.React.useEffect((()=>{null!=(null==w?void 0:w.activeIndex)&&w.activeIndex!==C&&T(w.activeIndex)}),[w,C]);const j=n.React.useCallback(((e,t)=>{t&&e!==C?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(s,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(s,e-1,!1))}),[C,s]),M=n.React.useCallback((()=>{if(!b.current)return;const e=b.current.children[0],t=b.current.children[1],n=t.childElementCount;for(let o=0;o<n;o++){const n=t.children[o],i=n.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=u?`${n.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[u]),P=n.React.useMemo((()=>n.lodash.debounce(M,200)),[M]),$=n.React.useCallback(((e,t)=>{if(!b.current)return;const o=b.current.children[0],i=b.current.children[1];if(I!==n.ScreenTransitionType.Fade)if(I!==n.ScreenTransitionType.Cover){if(I===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),n=i.item(e-1),o=a.item(e-1);t.style.marginTop=o.clientHeight-n.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`}),[c,I]);return y.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":u,"small-size":c===n.BrowserSizeMode.Small}),css:kn(0,R),"data-layoutitemid":i,"data-layoutid":o,ref:x},(0,n.jsx)("div",{className:"screen-group",ref:b},(0,n.jsx)("div",{className:"main-panels",ref:S},(0,n.jsx)(On,{rootLayoutId:o,activeIndex:C,screens:y,transitionType:I,layoutEntry:lt,headerHeight:g,isSmallSize:c===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels"},y.map(((e,t)=>(0,n.jsx)(Sn,{key:e,index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:lt,isActive:t===C,stretched:h,triggerType:v,verticalSpace:f,transitionType:m,screenTransitionType:I,onHeightChange:$,onInterctionChange:j,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:g}))),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:P})))):null}class En extends n.React.PureComponent{constructor(e){super(e);const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(Ln,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(fn,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(vn,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((n=>{if(i[n]===e.id)return t=n,!0})),r=this.layoutTransform(e,t,a)}const s=r.order||[],l=n.lodash.assign({},pn,r.setting),u=Object.assign(Object.assign(Object.assign({},o),y.styleUtils.toCSSStyle(l.style)),{position:"relative"}),d=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:d,style:u,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0}},(0,n.jsx)(n.OneByOneAnimation,{oid:r.id,"data-layoutid":r.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
              width: 100%;
            `},s.map(((e,t)=>this._createItem(r.content[e],t,l))))))}}const An=n.ReactRedux.connect(E)(En);function zn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:r,isPrintPreview:s,headerFooterHeight:l}=e,[d,c]=n.React.useState(),p=t.layout,g=n.React.useMemo((()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,l)),[l]),y=!s&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,h=y?!o:null;let v;n.React.useEffect((()=>{y&&c((0,n.getNextAnimationId)())}),[o]),n.React.useEffect((()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[o]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(v=t.maxWidth);const f=n.React.useMemo((()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=$e(t.layout,r,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:v,viewOnly:!0,rootLayoutId:o,pageId:t.id})}),[i,v,t.id]),m=n.React.useMemo((()=>({setting:y,revert:h,playId:y?d:null,oid:f.rootLayoutId,onContextAnimationEnd:()=>{c(-1)}})),[y,h,d]);if(p)return(0,n.jsx)(a.Provider,{key:t.id,value:f},(0,n.jsx)(u.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",css:n.css`
            display: ${o?"flex":"none"};
            background-color: ${t.bodyBackgroundColor||"transparent"};
            height: ${g};
            flex: 1 0 auto;
            z-index: 1;
          `},(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)(lt,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
              `})))))}function Nn(e){var t,o;const{headerJson:i,visible:r,browserSizeMode:s,theme:l,mainSizeMode:d,pageContext:c,onHeightChange:p}=e,g=i.height[s]||i.height[d]||50,y=i.layout;let h;i.backgroundIMage&&("string"==typeof i.backgroundIMage?h=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(h=i.backgroundIMage.url));const v=n.React.useMemo((()=>{var e;return n.css`
      display: ${r?"flex":"none"};
      position: ${i.sticky?"sticky":"relative"};
      z-index: ${i.sticky?2:"auto"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(g))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.header.bg||"transparent"};
      background-image: ${h};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.header)||void 0===e?void 0:e.color};
      flex: 0 0 auto;
    `}),[r,g,i.sticky,i.backgroundColor,h,i.backgroundPosition,null===(t=null==l?void 0:l.header)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.header)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]),m=n.React.useCallback(((e,t)=>{p(t)}),[p]);return(0,n.jsx)(a.Provider,{value:f},(0,n.jsx)(u.Provider,{value:r},(0,n.jsx)("div",{className:"header",css:v},(0,n.jsx)(lt,{layouts:y,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:m}))))}function Bn(e){var t,o;const{footerJson:i,visible:r,browserSizeMode:s,theme:l,mainSizeMode:d,pageContext:c,onHeightChange:p}=e,g=i.height[s]||i.height[d]||50,y=i.layout;let h;i.backgroundIMage&&("string"==typeof i.backgroundIMage?h=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(h=i.backgroundIMage.url));const v=n.React.useMemo((()=>{var e;return n.css`
      display: ${r?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(g))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.footer.bg||"transparent"};
      background-image: ${h};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.footer)||void 0===e?void 0:e.color};
      z-index: 0;
    `}),[r,g,i.backgroundColor,h,i.backgroundPosition,null===(t=null==l?void 0:l.footer)||void 0===t?void 0:t.bg,null===(o=null==l?void 0:l.footer)||void 0===o?void 0:o.color]),f=n.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]),m=n.React.useCallback(((e,t)=>{p(t)}),[p]);return(0,n.jsx)(a.Provider,{value:f},(0,n.jsx)(u.Provider,{value:r},(0,n.jsx)("div",{className:"footer",css:v},(0,n.jsx)(lt,{layouts:y,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:m}))))}const Fn=n.css`
  display: flex;
  height: 64px;
  background: var(--dark-700);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1500;

  .jimu-btn {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .label {
    white-space: nowrap;
  }

  @media print {
    & {
      display: none;
    }
  }
`;function Hn(){const e=n.i18n.getIntl(),t=n.React.useRef();n.React.useEffect((()=>{t.current.focus()}),[]);const o=n.React.useCallback((t=>e.formatMessage({id:t})),[e]),i=y.hooks.useEventCallback((()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())})),a=y.hooks.useEventCallback((()=>{window.print()}));return(0,n.jsx)("div",{className:"print-preview-tool shadow-lg",css:Fn},(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,n.jsx)(y.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a},o("printCurrentPage"))),(0,n.jsx)(y.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i},(0,n.jsx)(Yt,{color:"var(--white)"})))}it(n.LayoutType.FixedLayout,$t),it(n.LayoutType.FlowLayout,An),it(n.LayoutType.GridLayout,ln),it(n.LayoutType.ColumnLayout,At);class Vn extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new un}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new dn}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new cn}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){Dn(e.pageStatus)!==Dn(this.props.pageStatus)&&(document.getElementsByTagName("html")[0].scrollTop=0)}handlePrintEvent(e){(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:!0}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i}=this.props,a=Dn(e);if(!a||!(null==t?void 0:t[a]))return null;let r="100%";const s=t[a]||{};s&&!isNaN(+s.width)&&(r=+s.width+"px");const l=n.css`
      width: ${r};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      height: 100%;
      background-color: ${s&&s.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:l,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},i&&(0,n.jsx)(Hn,null),this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,o))),this.renderFooter(),(0,n.jsx)(n.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:o,theme:i,mainSizeMode:a}=this.props;return(0,n.jsx)(Nn,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:a,theme:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:o,mainSizeMode:i,theme:a}=this.props;return(0,n.jsx)(Bn,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:i,theme:a,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:i,isPrintPreview:a}=this.props,r=i[e];if(!r)return;const s=!!o[e];return(0,n.jsx)(zn,{key:r.id,pageJson:r,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:s,isPrintPreview:a,headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:r,pageDialogJson:s,pageDialogId:l}=this.props;return(0,n.jsx)(n.React.Fragment,null,t&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:t,runtime:!0})),!r&&s&&(null==t?void 0:t.id)!==s.id&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:s,runtime:!0,isOpenByPage:!0})),!i&&o&&(null==t?void 0:t.id)!==o.id&&(0,n.jsx)(a.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,runtime:!0})))}}function Dn(e){return Object.keys(e).find((t=>e[t]))}Vn.displayName="RuntimePageRenderer";const Wn=n.ReactRedux.connect(((e,t)=>{var n,o,i,a,r,s,l,u;const d=Dn(t.pageStatus);if(!d||!e.appConfig.pages[d])return{};const c=window.jimuConfig.isBuilder?e.appStateInBuilder:e,p=null===(n=null==c?void 0:c.appRuntimeInfo)||void 0===n?void 0:n.dialogInfos,g=null===(o=null==c?void 0:c.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,y=null===(a=null===(i=null==c?void 0:c.appConfig)||void 0===i?void 0:i.pages[g])||void 0===a?void 0:a.autoOpenDialogId,h=e.appConfig.dialogs,v=h[Object.keys(h).find((e=>h[e].isSplash))];return{pages:e.appConfig.pages,header:e.appConfig.header,headerVisible:!!e.appConfig.pages[d].header,footer:e.appConfig.footer,footerVisible:!!e.appConfig.pages[d].footer,browserSizeMode:e.browserSizeMode,mainSizeMode:e.appConfig.mainSizeMode,splashDialogJson:v,isSplashClosed:null===(r=null==p?void 0:p[null==v?void 0:v.id])||void 0===r?void 0:r.isClosed,pageDialogId:y,pageDialogJson:h[y],isPageDlgClosed:null===(s=null==p?void 0:p[g+"-"+y])||void 0===s?void 0:s.isClosed,urlDialogJson:h[t.dialogId],isPrintPreview:null!==(u=null===(l=e.appRuntimeInfo)||void 0===l?void 0:l.isPrintPreview)&&void 0!==u&&u}}))((0,ut.withTheme)(Vn));function Gn(){return e=this,t=void 0,o=function*(){return yield Promise.all([i()])},new((n=void 0)||(n=Promise))((function(i,a){function r(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}));var e,t,n,o}})(),s})())}}}));