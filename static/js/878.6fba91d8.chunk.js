"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{878:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(791),n=s(689),i=s(84),r=s(961),c=s(184);const l=e=>{var t;let{movie:s}=e;const{poster_path:a,overview:n,title:i,release_date:l,genres:o,vote_average:d}=null!==s&&void 0!==s?s:{},h=null===l||void 0===l?void 0:l.split("-")[0],u=null===(t=10*d)||void 0===t?void 0:t.toFixed(0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{children:[(0,c.jsx)("img",{height:500,weight:500,src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://i.imgur.com/jtwlswk.png",alt:n}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"".concat(i," (").concat(h,")")}),(0,c.jsxs)("p",{children:["User score: ",u,"%"]}),(0,c.jsx)("h3",{children:"Overwiew"}),(0,c.jsx)("p",{children:n}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("ul",{children:o.map((e=>{let{id:t,name:s}=e;return(0,c.jsx)("span",{children:s},t)}))})]})]}),(0,c.jsx)("span",{children:"Additional information:"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.F,{to:"cast",children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.F,{to:"reviews",children:"Reviews"})})]})]})},o=()=>{const[e,t]=(0,a.useState)(null),[s,o]=(0,a.useState)(!1),[d,h]=(0,a.useState)(null),{movieId:u}=(0,n.UO)();return(0,a.useEffect)((()=>{(async()=>{o(!0),h(null);try{const e=await(0,i.TP)(u);t(e)}catch({message:e}){h(e)}finally{o(!1)}})()}),[u,h,o]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.F,{to:"/",children:"<- Back"}),s?(0,c.jsx)("p",{children:"Loading..."}):d?(0,c.jsx)("p",{children:d}):e&&(0,c.jsx)(l,{movie:e}),(0,c.jsx)(n.j3,{})]})}},84:(e,t,s)=>{s.d(t,{Hg:()=>n,TP:()=>r,tx:()=>l,z1:()=>i,zv:()=>c});var a=s(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.Z.defaults.params={api_key:"5353ffa6d3e8c52fad3e3fb7502c3b42"};const n=async()=>{const{data:e}=await a.Z.get("/trending/movie/day");return e.results},i=async e=>{const{data:t}=await a.Z.get("search/movie?".concat(e));return t},r=async e=>{const{data:t}=await a.Z.get("movie/".concat(e));return t},c=async e=>{const{data:t}=await a.Z.get("movie/".concat(e,"/credits"));return t},l=async e=>{const{data:t}=await a.Z.get("movie/".concat(e,"/reviews"));return t}}}]);
//# sourceMappingURL=878.6fba91d8.chunk.js.map