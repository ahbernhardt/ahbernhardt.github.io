(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1506)}])},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let n=r(8754),i=r(1757),o=i._(r(7294)),a=n._(r(2636)),s=r(5471),l=r(3735),c=r(3341);r(4210);let d=n._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,r,n,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function m(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:l,className:c,style:d,fetchPriority:u,placeholder:h,loading:g,unoptimized:p,fill:b,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,onLoad:j,onError:_,...S}=e;return o.default.createElement("img",{...S,...m(u),loading:g,width:s,height:a,decoding:l,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&f(e,h,v,x,y,p))},[r,h,v,x,y,_,p,t]),onLoad:e=>{let t=e.currentTarget;f(t,h,v,x,y,p)},onError:e=>{w(!0),"blur"===h&&y(!0),_&&_(e)}})}),g=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=u||r||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:i,onLoadingComplete:f}=e,g=(0,o.useRef)(i);(0,o.useEffect)(()=>{g.current=i},[i]);let p=(0,o.useRef)(f);(0,o.useEffect)(()=>{p.current=f},[f]);let[b,v]=(0,o.useState)(!1),[x,y]=(0,o.useState)(!1),{props:w,meta:j}=(0,s.getImgProps)(e,{defaultLoader:d.default,imgConf:n,blurComplete:b,showAltText:x});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...w,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:y,ref:t}),j.priority?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+w.src+w.srcSet+w.sizes,rel:"preload",as:"image",href:w.srcSet?void 0:w.src,imageSrcSet:w.srcSet,imageSizes:w.sizes,crossOrigin:w.crossOrigin,referrerPolicy:w.referrerPolicy,...m(w.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(4210);let n=r(7757),i=r(3735);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:h,className:g,quality:p,width:b,height:v,fill:x=!1,style:y,onLoad:w,onLoadingComplete:j,placeholder:_="empty",blurDataURL:S,fetchPriority:E,layout:k,objectFit:C,objectPosition:P,lazyBoundary:z,lazyRoot:I,...O}=e,{imgConf:N,showAltText:A,blurComplete:M,defaultLoader:R}=t,B=N||i.imageConfigDefault;if("allSizes"in B)s=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);s={...B,allSizes:e,deviceSizes:t}}let F=O.loader||R;delete O.loader,delete O.srcSet;let T="__next_img_default"in F;if(T){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!u&&(u=t)}let W="",D=a(b),L=a(v);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,W=e.src,!x){if(D||L){if(D&&!L){let t=D/e.width;L=Math.round(e.height*t)}else if(!D&&L){let t=L/e.height;D=Math.round(e.width*t)}}else D=e.width,L=e.height}}let q=!m&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,q=!1),s.unoptimized&&(f=!0),T&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),m&&(E="high");let G=a(p),U=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},A?{}:{color:"transparent"},y),V="blur"===_&&S&&!M?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:L,blurWidth:l,blurHeight:c,blurDataURL:S,objectFit:U.objectFit})+'")'}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:s,src:d,unoptimized:f,width:D,quality:G,sizes:u,loader:F}),X={...O,loading:q?"lazy":h,fetchPriority:E,width:D,height:L,decoding:"async",className:g,style:{...U,...V},sizes:H.sizes,srcSet:H.srcSet,src:H.src},J={unoptimized:f,priority:m,placeholder:_,fill:x};return{props:X,meta:J}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n||t,l=i||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return l}});let n=r(8754),i=r(5471),o=r(4210),a=r(8872),s=n._(r(7746)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1506:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),i=r(1189),o=r.n(i);r(7294);var a=r(9008),s=r.n(a),l=e=>{let{site:t}=e,r="".concat(t.title," | Anh Bernhardt");return t?(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"description",content:t.description}),(0,n.jsx)("meta",{name:"author",content:"Anh Bernhardt"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{property:"og:title",content:t.title}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:t.url}),(0,n.jsx)("meta",{property:"og:description",content:t.description}),(0,n.jsx)("meta",{property:"og:image",content:t.image}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{name:"twitter:image",content:t.image}),(0,n.jsx)("link",{rel:"icon",href:"/favicon/favicon.ico"})]}):(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("title",{children:"Anh Bernhardt"}),(0,n.jsx)("meta",{name:"description",content:"Welcome to my portfolio - Anh Bernhardt"}),(0,n.jsx)("meta",{name:"author",content:"Anh Bernhardt"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{property:"og:title",content:"Welcome to my portfolio - Anh Bernhardt"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://ahbernhardt.github.io/"}),(0,n.jsx)("meta",{property:"og:description",content:"Welcome to my portfolio - Anh Bernhardt"}),(0,n.jsx)("link",{rel:"icon",href:"https://ahbernhardt.github.io/favicon/favicon.ico"})]})},c=r(5675),d=r.n(c);function u(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{site:{title:"Home",author:"Anh Bernhardt",description:"Welcome to my portfolio",url:"https://ahbernhardt.github.io/",social:{cardType:"summary_large_image",url:"https://ahbernhardt.github.io"},image:""}}),(0,n.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-around ".concat(o().className),children:(0,n.jsxs)("div",{className:"relative text-center flex flex-col place-items-center before:absolute before:aspect-square before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:aspect-square after:w-[240px] after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:[(0,n.jsx)("div",{className:"relative aspect-square w-1/3 bg-contain justify-center object-contain",children:(0,n.jsx)(d(),{src:"/favicon/android-chrome-192x192.png",layout:"fill",objectFit:"contain"})}),(0,n.jsx)("h1",{className:"font-bold",children:"Xin Ch\xe0o or Hello"}),(0,n.jsx)("h3",{children:"Thank you for checking out my portfolio. This version is in-process."}),(0,n.jsxs)("h3",{children:["In the mean time, please visit "," ",(0,n.jsx)("a",{href:"https://anhbernhardt.com",target:"_blank",rel:"noreferrer",className:"text-orange-300 hover:text-orange-400",children:"anhbernhart.com"})]})]})})]})}},1189:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(2555)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);