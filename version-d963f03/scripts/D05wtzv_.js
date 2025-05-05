import{d as e,m as t,a as r,r as n,j as o,u as i,c as a}from"./DBmdsNFu.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=e("p")`
  color: #bebebe;
`;s.displayName="Album";const c=e("article")`
  width: 550px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 5px 50px 5px 5px;
  box-shadow: 0px 0px 150px #000;
  overflow: hidden;
`;c.displayName="Card";const d=e("img")`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  animation: ${({$durationSec:e})=>`CoverRotate ${e}s linear infinite`};
  position: absolute;
`;d.displayName="Cover";const l=e("img")`
  width: 450px;
  height: 450px;
  filter: blur(50px);
  border-radius: 50%;
  animation: ${({$durationSec:e})=>`CoverRotate ${e}s linear infinite`};
`;l.displayName="BackgroundCover";const u=e("section")`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes CoverRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;u.displayName="CoverFather";const f=e("h3")`
  color: #fafafa;
  font-size: 25px;
`;f.displayName="Name";const p=t`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,m=e("p")`
  font-size: 15px;
  margin-bottom: 5px;
  font-style: italic;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #ff6ec4);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${p} 10s ease infinite;
  text-shadow: 0px 0px 10px #fafa;
`;m.displayName="RadioTitle";const x=e("section")`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 150px #000;
  backdrop-filter: blur(50px);
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: #000000a2;
  z-index: 1;
`;x.displayName="TrackCover";const g=e("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  background-color: #0110;
  transform: scale(1.5);
  transform-origin: center;
`;g.displayName="TrackFather";const y="/random",b=async(e,t=!0)=>{try{const n=await r.get(`http://127.0.0.1:9999${t&&y}`);e(n?.data)}catch(n){console.error(n)}},h=e=>{const[t,r]=e.split(":").map(Number);return 60*t+r},w=(e,t=null)=>{if("undefined"!=typeof window&&window.config){const r=window.config[e];return null!=r?r:t}return t},k=()=>{const[e,t]=n.useState(null),r=n.useRef(null),i=n.useRef(!1);return n.useEffect((()=>(i.current||(b(t),i.current=!0),()=>{r.current&&clearTimeout(r.current)})),[]),n.useEffect((()=>{if(!e)return;const n=e.data;if(!n||0===Object.keys(n).length)return void b(t);if(!n.duration)return;r.current&&clearTimeout(r.current);const o=1e3*h(n.duration);r.current=setTimeout((()=>{b(t)}),o)}),[e]),o.jsx(g,{children:e&&o.jsx($,{getDurationInSeconds:h,data:e.data},`TC[${e.data.title}]${Date.now()}`)})};k.displayName="Track";const j=e("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;j.displayName="AdditionalInfo";const v=e("p")`
  font-size: 10px;
  color: #fafafa;
  text-shadow: 0px 0px 10px #fafafa;
  margin-top: 4px;
  font-family: monospace;
  align-self: end;
  padding: 5px 15px;
  font-weight: bold;
  background-color: #1a1afa;
  border-radius: 15px;
`;v.displayName="Duration";const $=({data:e,getDurationInSeconds:t})=>{if(!e)return null;const{title:r,artist:a,album:d,duration:l,cover:u}=e,p=l?t(l):null,[g,y]=n.useState(0);n.useEffect((()=>{if(null==p)return;y(0);const e=setInterval((()=>{y((t=>t+1>=p?(clearInterval(e),p):t+1))}),1e3);return()=>clearInterval(e)}),[p,u]);const b=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`;return n.useEffect((()=>{if(!u)return;document.body.style.transition="background 0.8s ease";const e=new Image;e.crossOrigin="anonymous",e.src=u,e.onload=()=>{const[t,r,n]=(new i).getColor(e);document.body.style.background=((e,t,r)=>`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1).toUpperCase()}`)(t,r,n)}}),[u]),o.jsxs(c,{children:[o.jsxs(x,{children:[o.jsx(m,{children:w("brand")}),a&&r&&o.jsxs(f,{children:[a," — ",r]}),o.jsxs(j,{children:[d&&o.jsx(s,{children:d}),null!=p&&o.jsxs(v,{children:[b(g)," / ",b(p)]})]})]}),u&&o.jsx(N,{src:u,alt:r||"cover",durationSec:p||0})]})};$.displayName="TrackCard";const N=({src:e,alt:t,durationSec:r})=>{const i=n.useRef(`${t}]${Math.random().toString(36).slice(2)}`);return o.jsxs(u,{children:[o.jsx(l,{src:e,alt:t,loading:"lazy",$durationSec:r},`BG[${i.current}`),o.jsx(d,{src:e,alt:t,loading:"lazy",$durationSec:r},`FG[${i.current}`)]})};N.displayName="CoverWrapper";const S=()=>o.jsx(k,{});window.self!==window.top&&window.top&&(window.top.location=window.location.href),(()=>{const e="root",t=document.getElementById(e);if(!t)return console.error(`❌ Failed to find #${e} element ❌`),void(document.body.textContent=`❌ Failed to find #${e} element ❌`);a.createRoot(t).render(o.jsx(n.StrictMode,{children:o.jsx(S,{})}))})();
