(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{1424:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(1351),o=r(5815),n=r(1527),l=o._(r(959)),s=i._(r(422)),a=i._(r(5585)),u=r(4736),d=r(1508),c=r(2335);r(2649);let f=r(8837),g=i._(r(179)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,i,o,n){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=l.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:s,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:p,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:S,setShowAltText:_,onLoad:j,onError:x,...C}=e;return(0,n.jsx)("img",{...C,...h(f),loading:p,width:a,height:s,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:o,srcSet:i,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,g,w,y,S,v))},[r,g,w,y,S,x,v,t]),onLoad:e=>{m(e.currentTarget,g,w,y,S,v)},onError:e=>{_(!0),"empty"!==g&&S(!0),x&&x(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),i=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=p||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:a}=e,m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[w,y]=(0,l.useState)(!1),[S,_]=(0,l.useState)(!1),{props:j,meta:x}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:w,showAltText:S});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,ref:t}),x.priority?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(2649);let i=r(5911),o=r(1508);function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:b,fill:w=!1,style:y,onLoad:S,onLoadingComplete:_,placeholder:j="empty",blurDataURL:x,fetchPriority:C,layout:z,objectFit:P,objectPosition:E,lazyBoundary:O,lazyRoot:R,...M}=e,{imgConf:I,showAltText:k,blurComplete:A,defaultLoader:N}=t,D=I||o.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}let B=M.loader||N;delete M.loader,delete M.srcSet;let G="__next_img_default"in B;if(G){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let L="",F=l(v),W=l(b);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,L=e.src,!w){if(F||W){if(F&&!W){let t=F/e.width;W=Math.round(e.height*t)}else if(!F&&W){let t=W/e.height;F=Math.round(e.width*t)}}else F=e.width,W=e.height}}let Z=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,Z=!1),s.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let T=l(h),U=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:E}:{},k?{}:{color:"transparent"},y),V=A||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:F,heightInt:W,blurWidth:a,blurHeight:u,blurDataURL:x||"",objectFit:U.objectFit})+'")':'url("'+j+'")',q=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,i)=>s({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:n,width:a[d]})}}({config:s,src:d,unoptimized:f,width:F,quality:T,sizes:c,loader:B});return{props:{...M,loading:Z?"lazy":p,fetchPriority:C,width:F,height:W,decoding:"async",className:m,style:{...U,...q},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:f,priority:g,placeholder:j,fill:w}}}},5911:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:l}=e,s=i?40*i:t,a=o?40*o:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return a}});let i=r(1351),o=r(4736),n=r(1424),l=i._(r(179)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=n.Image},179:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8766:function(e,t,r){e.exports=r(6835)},4911:function(e,t,r){"use strict";var i=r(959);let o=i.forwardRef(function({title:e,titleId:t,...r},o){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z",clipRule:"evenodd"}))});t.Z=o}}]);