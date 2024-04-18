(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{7379:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nc}});var r={};t.r(r),t.d(r,{AttributionControl:function(){return S},Circle:function(){return M},CircleMarker:function(){return z},FeatureGroup:function(){return B},GeoJSON:function(){return H},ImageOverlay:function(){return G},LayerGroup:function(){return T},LayersControl:function(){return j},MapContainer:function(){return V},Marker:function(){return Z},Pane:function(){return J},Polygon:function(){return W},Polyline:function(){return Y},Popup:function(){return $},Rectangle:function(){return q},SVGOverlay:function(){return Q},ScaleControl:function(){return X},TileLayer:function(){return ne},Tooltip:function(){return nt},VideoOverlay:function(){return nr},WMSTileLayer:function(){return nu},ZoomControl:function(){return no},useMap:function(){return p},useMapEvent:function(){return d},useMapEvents:function(){return y}});var u=t(1527),o=t(959),l=t(3852),a=t.n(l);function i(n,e){return Object.freeze({...n,...e})}let c=(0,o.createContext)(null),f=c.Provider;function s(){let n=(0,o.useContext)(c);if(null==n)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function p(){return s().map}function d(n,e){let t=p();return(0,o.useEffect)(function(){return t.on(n,e),function(){t.off(n,e)}},[t,n,e]),t}function y(n){let e=p();return(0,o.useEffect)(function(){return e.on(n),function(){e.off(n)}},[e,n]),e}var m=t(422);function v(n){return(0,o.forwardRef)(function(e,t){let{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,()=>r),null==e.children?null:o.createElement(f,{value:u},e.children)})}function g(n){return(0,o.forwardRef)(function(e,t){let{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,()=>r),null})}function C(n){return function(e){let t=s(),r=n(e,t),{instance:u}=r.current,l=(0,o.useRef)(e.position),{position:a}=e;return(0,o.useEffect)(function(){return u.addTo(t.map),function(){u.remove()}},[t.map,u]),(0,o.useEffect)(function(){null!=a&&a!==l.current&&(u.setPosition(a),l.current=a)},[u,a]),r}}function w(n,e,t){return Object.freeze({instance:n,context:e,container:t})}function b(n,e){return null==e?function(e,t){let r=(0,o.useRef)();return r.current||(r.current=n(e,t)),r}:function(t,r){let u=(0,o.useRef)();u.current||(u.current=n(t,r));let l=(0,o.useRef)(t),{instance:a}=u.current;return(0,o.useEffect)(function(){l.current!==t&&(e(a,t,l.current),l.current=t)},[a,t,r]),u}}function h(n,e){let t=(0,o.useRef)(e);(0,o.useEffect)(function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e},[n,e])}function L(n,e){let t=(0,o.useRef)();(0,o.useEffect)(function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}},[n,e])}function E(n,e){let t=n.pane??e.pane;return t?{...n,pane:t}:n}function O(n,e){(0,o.useEffect)(function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){e.layerContainer?.removeLayer(n.instance),e.map.removeLayer(n.instance)}},[e,n])}function P(n){return function(e){let t=s(),r=n(E(e,t),t);return h(t.map,e.attribution),L(r.current,e.eventHandlers),O(r.current,t),r}}function k(n){return g(C(b(function(e,t){return w(n(e),t)})))}function I(n,e){return v(P(b(n,e)))}function x(n,e){var t,r;return t=b(n),r=function(n,r){let u=s(),o=t(E(n,u),u);return h(u.map,n.attribution),L(o.current,n.eventHandlers),e(o.current,u,n,r),o},(0,o.forwardRef)(function(n,e){let[t,u]=(0,o.useState)(!1),{instance:l}=r(n,u).current;(0,o.useImperativeHandle)(e,()=>l),(0,o.useEffect)(function(){t&&l.update()},[l,t,n.children]);let a=l._contentNode;return a?(0,m.createPortal)(n.children,a):null})}function R(n,e){var t;return v((t=b(n,e),function(n){let e=s(),r=t(E(n,e),e);return L(r.current,n.eventHandlers),O(r.current,e),function(n,e){let t=(0,o.useRef)();(0,o.useEffect)(function(){if(e.pathOptions!==t.current){let r=e.pathOptions??{};n.instance.setStyle(r),t.current=r}},[n,e])}(r.current,n),r}))}let S=k(function(n){return new l.Control.Attribution(n)});function _(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}let M=R(function({center:n,children:e,...t},r){let u=new l.Circle(n,t);return w(u,i(r,{overlayContainer:u}))},_),z=R(function({center:n,children:e,...t},r){let u=new l.CircleMarker(n,t);return w(u,i(r,{overlayContainer:u}))},_),B=R(function({children:n,...e},t){let r=new l.FeatureGroup([],e);return w(r,i(t,{layerContainer:r,overlayContainer:r}))}),H=R(function({data:n,...e},t){let r=new l.GeoJSON(n,e);return w(r,i(t,{overlayContainer:r}))},function(n,e,t){e.style!==t.style&&(null==e.style?n.resetStyle():n.setStyle(e.style))});function N(n,e,t){e.bounds instanceof l.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}let G=I(function({bounds:n,url:e,...t},r){let u=new l.ImageOverlay(e,n,t);return w(u,i(r,{overlayContainer:u}))},function(n,e,t){if(N(n,e,t),e.bounds!==t.bounds){let t=e.bounds instanceof l.LatLngBounds?e.bounds:new l.LatLngBounds(e.bounds);n.setBounds(t)}e.url!==t.url&&n.setUrl(e.url)}),T=I(function({children:n,...e},t){let r=new l.LayerGroup([],e);return w(r,i(t,{layerContainer:r}))}),j=v(C(b(function({children:n,...e},t){let r=new l.Control.Layers(void 0,void 0,e);return w(r,i(t,{layersControl:r}))},function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())})));function U(n){return function(e){let t=s(),r=(0,o.useRef)(e),[u,l]=(0,o.useState)(null),{layersControl:a,map:c}=t,p=(0,o.useCallback)(e=>{null!=a&&(r.current.checked&&c.addLayer(e),n(a,e,r.current.name),l(e))},[a,c]),d=(0,o.useCallback)(n=>{a?.removeLayer(n),l(null)},[a]),y=(0,o.useMemo)(()=>i(t,{layerContainer:{addLayer:p,removeLayer:d}}),[t,p,d]);return(0,o.useEffect)(()=>{null!==u&&r.current!==e&&(!0===e.checked&&(null==r.current.checked||!1===r.current.checked)?c.addLayer(u):!0===r.current.checked&&(null==e.checked||!1===e.checked)&&c.removeLayer(u),r.current=e)}),e.children?o.createElement(f,{value:y},e.children):null}}function A(){return(A=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}j.BaseLayer=U(function(n,e,t){n.addBaseLayer(e,t)}),j.Overlay=U(function(n,e,t){n.addOverlay(e,t)});let V=(0,o.forwardRef)(function({bounds:n,boundsOptions:e,center:t,children:r,className:u,id:a,placeholder:i,style:c,whenReady:s,zoom:p,...d},y){let[m]=(0,o.useState)({className:u,id:a,style:c}),[v,g]=(0,o.useState)(null);(0,o.useImperativeHandle)(y,()=>v?.map??null,[v]);let C=(0,o.useCallback)(r=>{if(null!==r&&null===v){let u=new l.Map(r,d);null!=t&&null!=p?u.setView(t,p):null!=n&&u.fitBounds(n,e),null!=s&&u.whenReady(s),g(Object.freeze({__version:1,map:u}))}},[]);(0,o.useEffect)(()=>()=>{v?.map.remove()},[v]);let w=v?o.createElement(f,{value:v},r):i??null;return o.createElement("div",A({},m,{ref:C}),w)}),Z=I(function({position:n,...e},t){let r=new l.Marker(n,e);return w(r,i(t,{overlayContainer:r}))},function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}),D=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function F(n,e){let{[e]:t,...r}=n;return r}let J=(0,o.forwardRef)(function(n,e){let[t]=(0,o.useState)(n.name),[r,u]=(0,o.useState)(null);(0,o.useImperativeHandle)(e,()=>r,[r]);let a=s(),i=(0,o.useMemo)(()=>({...a,pane:t}),[a]);return(0,o.useEffect)(()=>(u(function(n,e,t){if(-1!==D.indexOf(n))throw Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${n}`);if(null!=t.map.getPane(n))throw Error(`A pane with this name already exists: ${n}`);let r=e.pane??t.pane,u=r?t.map.getPane(r):void 0,o=t.map.createPane(n,u);return null!=e.className&&function(n,e){e.split(" ").filter(Boolean).forEach(e=>{l.DomUtil.addClass(n,e)})}(o,e.className),null!=e.style&&Object.keys(e.style).forEach(n=>{o.style[n]=e.style[n]}),o}(t,n,a)),function(){let n=a.map.getPane(t);n?.remove?.(),null!=a.map._panes&&(a.map._panes=F(a.map._panes,t),a.map._paneRenderers=F(a.map._paneRenderers,t))}),[]),null!=n.children&&null!=r?(0,m.createPortal)(o.createElement(f,{value:i},n.children),r):null}),W=R(function({positions:n,...e},t){let r=new l.Polygon(n,e);return w(r,i(t,{overlayContainer:r}))},function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)}),Y=R(function({positions:n,...e},t){let r=new l.Polyline(n,e);return w(r,i(t,{overlayContainer:r}))},function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)}),$=x(function(n,e){return w(new l.Popup(n,e.overlayContainer),e)},function(n,e,{position:t},r){(0,o.useEffect)(function(){let{instance:u}=n;function o(n){n.popup===u&&(u.update(),r(!0))}function l(n){n.popup===u&&r(!1)}return e.map.on({popupopen:o,popupclose:l}),null==e.overlayContainer?(null!=t&&u.setLatLng(t),u.openOn(e.map)):e.overlayContainer.bindPopup(u),function(){e.map.off({popupopen:o,popupclose:l}),e.overlayContainer?.unbindPopup(),e.map.removeLayer(u)}},[n,e,r,t])}),q=R(function({bounds:n,...e},t){let r=new l.Rectangle(n,e);return w(r,i(t,{overlayContainer:r}))},function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)}),X=k(function(n){return new l.Control.Scale(n)}),K=P(b(function(n,e){let{attributes:t,bounds:r,...u}=n,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach(n=>{o.setAttribute(n,t[n])}),w(new l.SVGOverlay(o,r,u),e,o)},N)),Q=(0,o.forwardRef)(function({children:n,...e},t){let{instance:r,container:u}=K(e).current;return(0,o.useImperativeHandle)(t,()=>r),null==u||null==n?null:(0,m.createPortal)(n,u)});function nn(n,e,t){let{opacity:r,zIndex:u}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=u&&u!==t.zIndex&&n.setZIndex(u)}let ne=g(P(b(function({url:n,...e},t){return w(new l.TileLayer(n,E(e,t)),t)},function(n,e,t){nn(n,e,t);let{url:r}=e;null!=r&&r!==t.url&&n.setUrl(r)}))),nt=x(function(n,e){return w(new l.Tooltip(n,e.overlayContainer),e)},function(n,e,{position:t},r){(0,o.useEffect)(function(){let u=e.overlayContainer;if(null==u)return;let{instance:o}=n,l=n=>{n.tooltip===o&&(null!=t&&o.setLatLng(t),o.update(),r(!0))},a=n=>{n.tooltip===o&&r(!1)};return u.on({tooltipopen:l,tooltipclose:a}),u.bindTooltip(o),function(){u.off({tooltipopen:l,tooltipclose:a}),null!=u._map&&u.unbindTooltip()}},[n,e,r,t])}),nr=I(function({bounds:n,url:e,...t},r){let u=new l.VideoOverlay(e,n,t);return!0===t.play&&u.getElement()?.play(),w(u,i(r,{overlayContainer:u}))},function(n,e,t){N(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);let r=n.getElement();null==r||(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())}),nu=g(P(b(function({eventHandlers:n,params:e={},url:t,...r},u){return w(new l.TileLayer.WMS(t,{...e,...E(r,u)}),u)},function(n,e,t){nn(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)}))),no=k(function(n){return new l.Control.Zoom(n)});t(5208);var nl=t(2980),na=t.n(nl);let{MapContainer:ni}=r;var nc=n=>{let{children:e,className:t,width:l,height:i,...c}=n,f=na().map;return t&&(f="".concat(f," ").concat(t)),(0,o.useEffect)(()=>{!async function(){delete a().Icon.Default.prototype._getIconUrl,a().Icon.Default.mergeOptions({iconRetinaUrl:"leaflet/images/marker-icon-2x.png",iconUrl:"leaflet/images/marker-icon.png",shadowUrl:"leaflet/images/marker-shadow.png"})}()},[]),(0,u.jsx)(ni,{className:f,...c,children:e(r,a())})}},5208:function(){},2980:function(n){n.exports={map:"Map_map__GYXkP"}}}]);