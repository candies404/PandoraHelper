import{L as e,H as s,F as a,C as t,S as r,a as l,u as n,b as o,c as x,g as i,d as c,j as d,N as m,e as p,f as j,h as f}from"./index-f7ab5e13.js";import g from"./LoginForm-b46ce682.js";import{T as h}from"./index-8e537eef.js";import"./index-49b42c3a.js";import"./row-5814c07b.js";import"./CheckOutlined-cb1ec32b.js";const u=e;u.Header=s,u.Footer=a,u.Content=t,u.Sider=r,u._InternalSiderContext=l;const E=u,{VITE_APP_HOMEPAGE:P}={VITE_GLOB_APP_TITLE:"Vite React TS Template",VITE_APP_BASE_API:"/api",VITE_APP_HOMEPAGE:"/home",BASE_URL:"/admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function T(){const{t:e}=n(),s=o(),{colorBgElevated:a}=x();if(s.accessToken&&i(c.Token))return d.jsx(m,{to:P,replace:!0});const t=p(a).alpha(.9).toString(),r=`linear-gradient(${t}, ${t}) center center / cover no-repeat,url(/admin/assets/overlay_2-613a921a.jpg)`;return d.jsxs(E,{className:"relative flex !min-h-screen !w-full !flex-row",children:[d.jsxs("div",{className:"hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex",style:{background:r},children:[d.jsx("div",{className:"text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl",children:"PandoraNext Helper"}),d.jsx("img",{className:"max-w-[480px] xl:max-w-[560px]",src:"/admin/assets/dashboard-63c403eb.png",alt:""}),d.jsx(h.Text,{className:"flex flex-row gap-[16px] text-2xl",children:e("sys.login.signInSecondTitle")})]}),d.jsx("div",{className:"m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]",children:d.jsx(j,{children:d.jsx(g,{})})}),d.jsx("div",{className:"absolute right-2 top-0",children:d.jsx(f,{})})]})}export{T as default};