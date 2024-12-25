import{r as e,X as t,a1 as n,a0 as s,a2 as r,a4 as o,cr as l,cs as i}from"./index-076c9e5b.js";const a=e.createContext({}),f=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},c=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:s,gridColumns:r}=e,o={};for(let l=r;l>=0;l--)0===l?(o[`${s}${t}-${l}`]={display:"none"},o[`${s}-push-${l}`]={insetInlineStart:"auto"},o[`${s}-pull-${l}`]={insetInlineEnd:"auto"},o[`${s}${t}-push-${l}`]={insetInlineStart:"auto"},o[`${s}${t}-pull-${l}`]={insetInlineEnd:"auto"},o[`${s}${t}-offset-${l}`]={marginInlineStart:0},o[`${s}${t}-order-${l}`]={order:0}):(o[`${s}${t}-${l}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${l/r*100}%`,maxWidth:l/r*100+"%"}],o[`${s}${t}-push-${l}`]={insetInlineStart:l/r*100+"%"},o[`${s}${t}-pull-${l}`]={insetInlineEnd:l/r*100+"%"},o[`${s}${t}-offset-${l}`]={marginInlineStart:l/r*100+"%"},o[`${s}${t}-order-${l}`]={order:l});return o[`${s}${t}-flex`]={flex:`var(--${n}${t}-flex)`},o})(e,t),p=t("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),u=t("Grid",(e=>{const t=n(e,{gridColumns:24}),r={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[f(t),c(t,""),c(t,"-xs"),Object.keys(r).map((e=>((e,t,n)=>({[`@media (min-width: ${s(t)})`]:Object.assign({},c(e,n))}))(t,r[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})));var $=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function d(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const y=["xs","sm","md","lg","xl","xxl"],x=e.forwardRef(((t,n)=>{const{getPrefixCls:s,direction:l}=e.useContext(r),{gutter:i,wrap:f}=e.useContext(a),{prefixCls:c,span:p,order:x,offset:g,push:m,pull:b,className:j,children:h,flex:O,style:v}=t,w=$(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=s("col",c),[S,I,E]=u(C),P={};let M={};y.forEach((e=>{let n={};const s=t[e];"number"==typeof s?n.span=s:"object"==typeof s&&(n=s||{}),delete w[e],M=Object.assign(Object.assign({},M),{[`${C}-${e}-${n.span}`]:void 0!==n.span,[`${C}-${e}-order-${n.order}`]:n.order||0===n.order,[`${C}-${e}-offset-${n.offset}`]:n.offset||0===n.offset,[`${C}-${e}-push-${n.push}`]:n.push||0===n.push,[`${C}-${e}-pull-${n.pull}`]:n.pull||0===n.pull,[`${C}-rtl`]:"rtl"===l}),n.flex&&(M[`${C}-${e}-flex`]=!0,P[`--${C}-${e}-flex`]=d(n.flex))}));const N=o(C,{[`${C}-${p}`]:void 0!==p,[`${C}-order-${x}`]:x,[`${C}-offset-${g}`]:g,[`${C}-push-${m}`]:m,[`${C}-pull-${b}`]:b},j,M,I,E),A={};if(i&&i[0]>0){const e=i[0]/2;A.paddingLeft=e,A.paddingRight=e}return O&&(A.flex=d(O),!1!==f||A.minWidth||(A.minWidth=0)),S(e.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},A),v),P),className:N,ref:n}),h))}));var g=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function m(t,n){const[s,r]=e.useState("string"==typeof t?t:"");return e.useEffect((()=>{(()=>{if("string"==typeof t&&r(t),"object"==typeof t)for(let e=0;e<i.length;e++){const s=i[e];if(!n[s])continue;const o=t[s];if(void 0!==o)return void r(o)}})()}),[JSON.stringify(t),n]),s}const b=e.forwardRef(((t,n)=>{const{prefixCls:s,justify:f,align:c,className:u,style:$,children:d,gutter:y=0,wrap:x}=t,b=g(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:j,direction:h}=e.useContext(r),[O,v]=e.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,C]=e.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),S=m(c,w),I=m(f,w),E=e.useRef(y),P=l();e.useEffect((()=>{const e=P.subscribe((e=>{C(e);const t=E.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&v(e)}));return()=>P.unsubscribe(e)}),[]);const M=j("row",s),[N,A,R]=p(M),W=(()=>{const e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let s=0;s<i.length;s++){const r=i[s];if(O[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t})),e})(),L=o(M,{[`${M}-no-wrap`]:!1===x,[`${M}-${I}`]:I,[`${M}-${S}`]:S,[`${M}-rtl`]:"rtl"===h},u,A,R),k={},G=null!=W[0]&&W[0]>0?W[0]/-2:void 0;G&&(k.marginLeft=G,k.marginRight=G);const[T,X]=W;k.rowGap=X;const _=e.useMemo((()=>({gutter:[T,X],wrap:x})),[T,X,x]);return N(e.createElement(a.Provider,{value:_},e.createElement("div",Object.assign({},b,{className:L,style:Object.assign(Object.assign({},k),$),ref:n}),d)))}));export{x as C,b as R};
