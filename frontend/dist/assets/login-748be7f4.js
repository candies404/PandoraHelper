import{r as e,x as t,m as s,j as a,p as n}from"./index-076c9e5b.js";import{s as r}from"./shareService-cc87b2c4.js";const o=()=>{const[o,i]=e.useState("Pandora"),[l,c]=e.useState("https://demo.fuclaude.com"),[d,u]=e.useState(""),[x,m]=e.useState(""),[h,g]=e.useState(""),[p,f]=e.useState(!1),[y,b]=e.useState(!1),[j,v]=e.useState(!1);e.useEffect((()=>{t.getLoginSetting().then((e=>{i(e.pageTitle),e.fuclaudeDomain&&c(e.fuclaudeDomain)})).catch((e=>{s.error("获取标题失败")}))}),[]);const N=e.useMemo((()=>/^sk-ant-.*/.test(d.trim())),[d]);return a.jsxs("div",{className:"min-h-screen max-h-screen bg-page-bg",children:[a.jsx("header",{className:"fixed top-0 left-0 right-0 bg-page-bg z-10",children:a.jsx("div",{className:"container mx-auto px-8 py-6",children:a.jsxs("div",{className:"flex items-center justify-center",children:[a.jsx("div",{className:"text-orange-500 text-3xl mr-2 text-[#da7756]",children:"✹"}),a.jsx("div",{className:"text-3xl font-serif",children:o})]})})}),a.jsxs("main",{className:"pt-12 flex flex-col items-center justify-center min-h-screen p-4",children:[a.jsxs("div",{className:"text-center mb-6",children:[a.jsxs("h1",{className:"font-light font-serif text-6xl",style:{fontFeatureSettings:"'ss01' on, 'liga' on",fontSmooth:"antialiased",letterSpacing:0,fontWeight:100},children:["Your ideas,",a.jsx("br",{}),"amplified"]}),a.jsx("p",{className:"flex flex-col gap-[0.3em] sm:gap-[0.15em] items-center text-center text-text-100 font-normal text-pretty tracking-tight font-tiempos mt-4 break-words leading-[1em] text-base md:text-lg [&_span]:[backface-visibility:hidden] leading-snug font-serif",children:"Privacy-first AI that helps you create in confidence."})]}),a.jsxs("div",{className:"bg-white rounded-3xl shadow-[0_4px_24px_0_#00000004,0_4px_32px_0_#00000004,0_2px_64px_0_#00000003,0_16px_32px_0_#00000003] p-6 w-full max-w-md bg-white border-1",style:{borderWidth:"0.5px",borderColor:"rgba(112, 107, 87, 0.25)",fontFamily:'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'},children:[a.jsxs("form",{onSubmit:p?e=>{e.preventDefault(),d&&x&&(y&&!h||(y?(v(!0),r.resetPassword(d,x,h).then((e=>{e&&(s.success("Password changed successfully"),b(!1),m(""))})).finally((()=>{v(!1)}))):(v(!0),r.chatLoginShare(d,x).then((e=>{e&&(window.location.href=e)})).catch((e=>{v(!1)})))))}:e=>{e.preventDefault(),N&&(window.location.href=`${l}/login_token?session_key=${d}`),d&&f(!0)},children:[a.jsxs("div",{className:"relative mb-4",children:[a.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600",children:a.jsx(n,{icon:"material-symbols-light:mail-outline-rounded",size:"1.35em"})}),a.jsx("input",{value:d,onChange:e=>{u(e.target.value)},placeholder:"Enter your uniqueName or sessionKey",className:"w-full pl-10 pr-10 p-3 border border-gray-300 rounded-lg bg-input-bg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",readOnly:p}),p&&a.jsx("button",{type:"button",onClick:()=>{f(!1),b(!1),m("")},className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700",children:a.jsx(n,{icon:"mdi:circle-edit-outline",size:"1.25em"})})]}),a.jsx("div",{className:"transform transition-all duration-300 ease-in-out overflow-hidden "+(p?"max-h-20 opacity-100 mb-4":"max-h-0 opacity-0"),children:a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600",children:a.jsx(n,{icon:"mdi:lock-outline",size:"1.25em"})}),a.jsx("input",{type:"password",value:x,onChange:e=>{m(e.target.value)},placeholder:y?"Enter your original password":"Enter your password",className:"w-full pl-10 p-3 border border-gray-300 rounded-lg bg-input-bg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"})]})}),a.jsx("div",{className:"transform transition-all duration-300 ease-in-out overflow-hidden "+(y?"max-h-20 opacity-100 mb-4":"max-h-0 opacity-0"),children:a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600",children:a.jsx(n,{icon:"mdi:lock-outline",size:"1.25em"})}),a.jsx("input",{type:"password",value:h,onChange:e=>{g(e.target.value)},placeholder:"Enter your new password",className:"w-full pl-10 p-3 border border-gray-300 rounded-lg bg-input-bg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"})]})}),a.jsx("button",{type:"submit",className:"w-full bg-button-primary text-gray-500 rounded-lg p-3 hover:opacity-90 transition-opacity font-bold",disabled:j,children:j?a.jsx(n,{icon:"line-md:loading-loop"}):p?"Log in":N?"Continue with SessionKey":"Continue with UniqueName"})]}),p?a.jsx("div",{children:a.jsxs("p",{className:"mt-6 text-center text-text-400 text-xs text-gray-600",children:["You can "," ",a.jsx("button",{className:"underline  text-gray-600 no-blue",onClick:()=>b(!y),style:{color:"inherit",textDecoration:"underline"},children:"change your password"})," ","at any time as long as you know your original password."]})}):a.jsx("div",{children:a.jsxs("p",{className:"mt-6 text-center text-text-400 text-xs text-gray-600",children:["By continuing, you agree to LINUX DO's"," ",a.jsx("a",{href:"#",className:"underline text-gray-600 no-blue",style:{color:"inherit",textDecoration:"underline"},children:"Consumer Terms"})," and"," ",a.jsx("a",{href:"#",className:"underline text-gray-600 no-blue",style:{color:"inherit",textDecoration:"underline"},children:"Usage Policy"}),", and acknowledge their"," ",a.jsx("a",{href:"#",className:"underline text-gray-600 no-blue",style:{color:"inherit",textDecoration:"underline"},children:"Privacy Policy"}),"."]})})]})]})]})};export{o as default};