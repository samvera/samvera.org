(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8575:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(2570)}])},2570:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return D}});var s=i(1527),n=i(5641),r=i.n(n);i(7246);var a=i(579),o=i(242),u=i(4058),h=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,a.PN)(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(a.sk?1/0:3e5))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}},c=class extends h{constructor(t){super(),this.#e=!1,this.#i=t.defaultOptions,this.#s(t.options),this.#n=[],this.#r=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#a=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#a,this.scheduleGc()}#a;#o;#r;#u;#h;#n;#i;#e;get meta(){return this.options.meta}#s(t){this.options={...this.#i,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#n.length||"idle"!==this.state.fetchStatus||this.#r.remove(this)}setData(t,e){let i=(0,a.oE)(this.state.data,t,this.options);return this.#c({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#c({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u;return this.#h?.cancel(t),e?e.then(a.ZT).catch(a.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#a)}isActive(){return this.#n.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#n.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,a.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#n.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){let t=this.#n.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(t){this.#n.includes(t)||(this.#n.push(t),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#n.includes(t)&&(this.#n=this.#n.filter(e=>e!==t),this.#n.length||(this.#h&&(this.#e?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#n.length}invalidate(){this.state.isInvalidated||this.#c({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#h?.continueRetry(),this.#u}if(t&&this.#s(t),!this.options.queryFn){let t=this.#n.find(t=>t.options.queryFn);t&&this.#s(t.options)}let i=new AbortController,s={queryKey:this.queryKey,meta:this.meta},n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#e=!0,i.signal)})};n(s);let r={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#e=!1,this.options.persister)?this.options.persister(this.options.queryFn,s,this):this.options.queryFn(s):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};n(r),this.options.behavior?.onFetch(r,this),this.#o=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#c({type:"fetch",meta:r.fetchOptions?.meta});let a=t=>{(0,u.DV)(t)&&t.silent||this.#c({type:"error",error:t}),(0,u.DV)(t)||(this.#r.config.onError?.(t,this),this.#r.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#h=(0,u.Mz)({fn:r.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#r.config.onSuccess?.(t,this),this.#r.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode}),this.#u=this.#h.promise,this.#u}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:(0,u.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,u.DV)(i)&&i.revert&&this.#o)return{...this.#o,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),o.V.batch(()=>{this.#n.forEach(t=>{t.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:t})})}},l=i(962),d=class extends l.l{constructor(t={}){super(),this.config=t,this.#l=new Map}#l;build(t,e,i){let s=e.queryKey,n=e.queryHash??(0,a.Rm)(s,e),r=this.get(n);return r||(r=new c({cache:this,queryKey:s,queryHash:n,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(s)}),this.add(r)),r}add(t){this.#l.has(t.queryHash)||(this.#l.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#l.get(t.queryHash);e&&(t.destroy(),e===t&&this.#l.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){o.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#l.get(t)}getAll(){return[...this.#l.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,a._x)(t,e)):e}notify(t){o.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){o.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){o.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},f=class extends h{constructor(t){super(),this.mutationId=t.mutationId,this.#i=t.defaultOptions,this.#d=t.mutationCache,this.#n=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}#n;#i;#d;#h;setOptions(t){this.options={...this.#i,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#n.includes(t)||(this.#n.push(t),this.clearGcTimeout(),this.#d.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#n=this.#n.filter(e=>e!==t),this.scheduleGc(),this.#d.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#n.length||("pending"===this.state.status?this.scheduleGc():this.#d.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#c({type:"pending",variables:t}),await this.#d.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#c({type:"pending",context:e,variables:t})}let i=await (this.#h=(0,u.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#h.promise);return await this.#d.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#d.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#c({type:"success",data:i}),i}catch(e){try{throw await this.#d.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#d.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#c({type:"error",error:e})}}}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,u.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),o.V.batch(()=>{this.#n.forEach(e=>{e.onMutationUpdate(t)}),this.#d.notify({mutation:this,type:"updated",action:t})})}},p=class extends l.l{constructor(t={}){super(),this.config=t,this.#f=[],this.#p=0}#f;#p;#y;build(t,e,i){let s=new f({mutationCache:this,mutationId:++this.#p,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){this.#f.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#f=this.#f.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){o.V.batch(()=>{this.#f.forEach(t=>{this.remove(t)})})}getAll(){return this.#f}find(t){let e={exact:!0,...t};return this.#f.find(t=>(0,a.X7)(e,t))}findAll(t={}){return this.#f.filter(e=>(0,a.X7)(t,e))}notify(t){o.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#y=(this.#y??Promise.resolve()).then(()=>{let t=this.#f.filter(t=>t.state.isPaused);return o.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(a.ZT)),Promise.resolve()))}).then(()=>{this.#y=void 0}),this.#y}},y=i(8648),m=i(2334);function v(t,{pages:e,pageParams:i}){let s=e.length-1;return t.getNextPageParam(e[s],e,i[s],i)}var g=class{#m;#d;#i;#v;#g;#b;#w;#C;constructor(t={}){this.#m=t.queryCache||new d,this.#d=t.mutationCache||new p,this.#i=t.defaultOptions||{},this.#v=new Map,this.#g=new Map,this.#b=0}mount(){this.#b++,1===this.#b&&(this.#w=y.j.subscribe(()=>{y.j.isFocused()&&(this.resumePausedMutations(),this.#m.onFocus())}),this.#C=m.N.subscribe(()=>{m.N.isOnline()&&(this.resumePausedMutations(),this.#m.onOnline())}))}unmount(){this.#b--,0===this.#b&&(this.#w?.(),this.#w=void 0,this.#C?.(),this.#C=void 0)}isFetching(t){return this.#m.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#d.findAll({...t,status:"pending"}).length}getQueryData(t){return this.#m.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let s=this.#m.find({queryKey:t}),n=s?.state.data,r=(0,a.SE)(e,n);if(void 0===r)return;let o=this.defaultQueryOptions({queryKey:t});return this.#m.build(this,o).setData(r,{...i,manual:!0})}setQueriesData(t,e,i){return o.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){return this.#m.find({queryKey:t})?.state}removeQueries(t){let e=this.#m;o.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#m,s={type:"active",...t};return o.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(s,e)))}cancelQueries(t={},e={}){let i={revert:!0,...e};return Promise.all(o.V.batch(()=>this.#m.findAll(t).map(t=>t.cancel(i)))).then(a.ZT).catch(a.ZT)}invalidateQueries(t={},e={}){return o.V.batch(()=>{if(this.#m.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let i={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(i,e)})}refetchQueries(t={},e){let i={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(o.V.batch(()=>this.#m.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,i);return i.throwOnError||(e=e.catch(a.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#m.build(this,e);return i.isStaleByTime(e.staleTime)?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a.ZT).catch(a.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,i)=>{let s=async()=>{let i;let s=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,r=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},c=t.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`))),l=async(e,i,s)=>{if(u)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:i,direction:s?"backward":"forward",meta:t.options.meta};h(n);let r=await c(n),{maxPages:o}=t.options,l=s?a.Ht:a.VX;return{pages:l(e.pages,r,o),pageParams:l(e.pageParams,i,o)}};if(n&&r.length){let t="backward"===n,e={pages:r,pageParams:o},a=(t?function(t,{pages:e,pageParams:i}){return t.getPreviousPageParam?.(e[0],e,i[0],i)}:v)(s,e);i=await l(e,a,t)}else{i=await l({pages:[],pageParams:[]},o[0]??s.initialPageParam);let t=e??r.length;for(let e=1;e<t;e++){let t=v(s,i);i=await l(i,t)}}return i};t.options.persister?t.fetchFn=()=>t.options.persister?.(s,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i):t.fetchFn=s}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a.ZT).catch(a.ZT)}resumePausedMutations(){return this.#d.resumePausedMutations()}getQueryCache(){return this.#m}getMutationCache(){return this.#d}getDefaultOptions(){return this.#i}setDefaultOptions(t){this.#i=t}setQueryDefaults(t,e){this.#v.set((0,a.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#v.values()],i={};return e.forEach(e=>{(0,a.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){this.#g.set((0,a.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#g.values()],i={};return e.forEach(e=>{(0,a.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t?._defaulted)return t;let e={...this.#i.queries,...t?.queryKey&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,a.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),void 0===e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#i.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#m.clear(),this.#d.clear()}},b=i(2225),w=i(3001),C=i.n(w),O=i(3684),q=i.n(O);let S="/images/1200px-Samvera_logo.png",F="Samvera - a vibrant and welcoming community developing repository software tools",P={"og:description":"Samvera™ is a vibrant and welcoming community of information and technology professionals who share challenges, build expertise, and create sustainable, best-in-class solutions, making the world’s digital collections accessible now and into the future. Samvera’s suite of repository software tools offers flexible and rich user interfaces tailored to distinct content types on top of a robust back end – giving adopters the best of both worlds.","og:image":S,"og:image:secure_url":S,"og:site_name":F,"og:title":F,"og:type":"website","og:url":"https://samvera.org"},E=new g;function D(t){let{Component:e,pageProps:i}=t,{openGraphData:n={}}=i,a={...P,...n};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C(),{children:[(0,s.jsx)("title",{children:a["og:title"]}),Object.keys(a).map(t=>(0,s.jsx)("meta",{property:t,content:a[t]},t))]}),(0,s.jsx)(q(),{src:"https://www.googletagmanager.com/gtag/js?id=G-8T5XY480BE",afterInteractive:!0}),(0,s.jsx)(q(),{id:"google-analytics",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-8T5XY480BE');\n          "}),(0,s.jsx)("div",{className:"".concat(r().variable),children:(0,s.jsx)(b.aH,{client:E,children:(0,s.jsx)(e,{...i})})})]})}},7246:function(){},5641:function(t){t.exports={style:{fontFamily:"'__Open_Sans_8299a1', '__Open_Sans_Fallback_8299a1'",fontStyle:"normal"},className:"__className_8299a1",variable:"__variable_8299a1"}},3001:function(t,e,i){t.exports=i(5585)},3684:function(t,e,i){t.exports=i(6750)},8648:function(t,e,i){"use strict";i.d(e,{j:function(){return r}});var s=i(962),n=i(579),r=new class extends s.l{#O;#q;#S;constructor(){super(),this.#S=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#q||this.setEventListener(this.#S)}onUnsubscribe(){this.hasListeners()||(this.#q?.(),this.#q=void 0)}setEventListener(t){this.#S=t,this.#q?.(),this.#q=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#O!==t&&(this.#O=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#O?this.#O:globalThis.document?.visibilityState!=="hidden"}}},242:function(t,e,i){"use strict";i.d(e,{V:function(){return s}});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>setTimeout(t,0),r=s=>{e?t.push(s):n(()=>{i(s)})},a=()=>{let e=t;t=[],e.length&&n(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||a()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{n=t}}}()},2334:function(t,e,i){"use strict";i.d(e,{N:function(){return r}});var s=i(962),n=i(579),r=new class extends s.l{#F=!0;#q;#S;constructor(){super(),this.#S=t=>{if(!n.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#q||this.setEventListener(this.#S)}onUnsubscribe(){this.hasListeners()||(this.#q?.(),this.#q=void 0)}setEventListener(t){this.#S=t,this.#q?.(),this.#q=t(this.setOnline.bind(this))}setOnline(t){this.#F!==t&&(this.#F=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#F}}},4058:function(t,e,i){"use strict";i.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return c}});var s=i(8648),n=i(2334),r=i(579);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||n.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function c(t){let e,i,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{i=t,h=e}),p=()=>!s.j.isFocused()||"always"!==t.networkMode&&!n.N.isOnline(),y=s=>{d||(d=!0,t.onSuccess?.(s),e?.(),i(s))},m=i=>{d||(d=!0,t.onError?.(i),e?.(),h(i))},v=()=>new Promise(i=>{e=t=>{let e=d||!p();return e&&i(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),g=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let i=t.retry??(r.sk?0:3),s=t.retryDelay??a,n="function"==typeof s?s(l,e):s,o=!0===i||"number"==typeof i&&l<i||"function"==typeof i&&i(l,e);if(c||!o){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(n).then(()=>{if(p())return v()}).then(()=>{c?m(e):g()})})}};return o(t.networkMode)?g():v().then(g),{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>e?.()?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},962:function(t,e,i){"use strict";i.d(e,{l:function(){return s}});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},579:function(t,e,i){"use strict";i.d(e,{Ht:function(){return w},Kp:function(){return o},PN:function(){return a},Rm:function(){return c},SE:function(){return r},VS:function(){return f},VX:function(){return b},X7:function(){return h},Ym:function(){return l},ZT:function(){return n},_v:function(){return v},_x:function(){return u},oE:function(){return g},sk:function(){return s},to:function(){return d}});var s="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(a){if(s){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function h(t,e){let{exact:i,status:s,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(l(e.options.mutationKey)!==l(r))return!1}else if(!d(e.options.mutationKey,r))return!1}return(!s||e.state.status===s)&&(!n||!!n(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>y(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!d(t[i],e[i]))}function f(t,e){if(t&&!e||e&&!t)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(m(i)&&i.hasOwnProperty("isPrototypeOf"))}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return new Promise(e=>{setTimeout(e,t)})}function g(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=p(e)&&p(i);if(s||y(e)&&y(i)){let n=s?e:Object.keys(e),r=n.length,a=s?i:Object.keys(i),o=a.length,u=s?[]:{},h=0;for(let r=0;r<o;r++){let o=s?r:a[r];!s&&void 0===e[o]&&void 0===i[o]&&n.includes(o)?(u[o]=void 0,h++):(u[o]=t(e[o],i[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return r===o&&h===r?e:u}return i}(t,e):e}function b(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function w(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}},2225:function(t,e,i){"use strict";i.d(e,{NL:function(){return r},aH:function(){return a}});var s=i(959),n=s.createContext(void 0),r=t=>{let e=s.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=({client:t,children:e})=>(s.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),s.createElement(n.Provider,{value:t},e))}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(8575),e(5981)}),_N_E=t.O()}]);