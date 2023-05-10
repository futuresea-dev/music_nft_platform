import{a as f,r as A,b as o,o as a,c as r,w as e,e as t,f as $,F as L,h as T,u as b,i as n,j as u,t as v,k as B,m as R,p as U,l as j,q}from"./entry.81bca5bf.js";import{_ as D}from"./nuxt-link.a738ebf0.js";import{l as z}from"./logo.c7b197ce.js";const V=""+globalThis.__publicAssetsURL("img/banner-1.jpg"),N=""+globalThis.__publicAssetsURL("img/banner-2.jpg"),M=""+globalThis.__publicAssetsURL("img/banner-3.jpg"),E=""+globalThis.__publicAssetsURL("img/banner-4.jpg");const G={class:"c-carousel-section"},H={class:"c-carousel-container"},P=["src"],W={__name:"Banner",setup(_){const c=A(["First","Second","Third","Forth"]),i=[V,N,M,E];return(s,l)=>{const d=o("v-carousel-item"),m=o("v-carousel"),p=o("v-container");return a(),r(p,null,{default:e(()=>[t(m,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":"hover"},{default:e(()=>[(a(!0),$(L,null,T(b(c),(g,h)=>(a(),r(d,{key:h},{default:e(()=>[n("div",G,[n("div",H,[n("img",{src:i[h+1],alt:"Carousel",class:"c-carousel-img"},null,8,P)])])]),_:2},1024))),128))]),_:1})]),_:1})}}},O=f(W,[["__scopeId","data-v-4157fbf2"]]);const J={},Q={class:"d-flex"};function K(_,c){const i=o("v-autocomplete"),s=o("v-btn"),l=o("v-container");return a(),r(l,{class:"c-container"},{default:e(()=>[n("div",Q,[t(i,{label:"Search for anything on Sound","prepend-inner-icon":"mdi-magnify",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],class:"c-search-input",variant:"solo","append-inner-icon":""}),t(s,{elevation:"2",height:"55"},{default:e(()=>[u("Sign In")]),_:1})])]),_:1})}const X=f(J,[["render",K],["__scopeId","data-v-b2d9766e"]]);const Y={class:"c-text"},Z={__name:"Title",props:{text:{type:String,required:!0},icon:{type:String,required:!1},seeAllLink:{type:String,required:!1}},setup(_){const c=_;return(i,s)=>{const l=o("v-icon"),d=o("v-layout"),m=o("v-btn"),p=D,g=o("v-container");return a(),r(g,{class:"c-container"},{default:e(()=>[t(d,null,{default:e(()=>[t(d,{class:"align-center"},{default:e(()=>[n("div",Y,v(c.text),1),t(l,{icon:c.icon},null,8,["icon"])]),_:1}),c.seeAllLink?(a(),r(p,{key:0,to:c.seeAllLink},{default:e(()=>[t(m,{elevation:"2",class:"c-btn"},{default:e(()=>[u("See All")]),_:1})]),_:1},8,["to"])):B("",!0)]),_:1})]),_:1})}}},S=f(Z,[["__scopeId","data-v-087adcac"]]),tt=""+globalThis.__publicAssetsURL("img/music-logo.jpg");const et={class:"mr-5"},nt=["src"],ot={class:"c-small-text"},st={class:"c-title-text"},ct={class:"c-small-text"},_t={__name:"MusicList",props:{creator:{type:String,required:!0},title:{type:String,required:!1},mints:{type:String,required:!1}},setup(_){const c=_,i=A([{title:"Add to playlist",icon:"mdi-playlist-music"},{title:"Add to queue",icon:"mdi-playlist-plus"},{title:"Copy Link",icon:"mdi-content-copy"},{title:"Share",icon:"mdi-export-variant"}]);return(s,l)=>{const d=o("v-layout"),m=o("v-btn"),p=o("v-icon"),g=o("v-list-item-title"),h=o("v-list-item"),w=o("v-list"),C=o("v-menu"),F=o("v-container");return a(),r(F,null,{default:e(()=>[t(d,{class:"align-center"},{default:e(()=>[t(d,{class:"align-center"},{default:e(()=>[n("div",et,[n("img",{src:b(tt),class:"c-avatar"},null,8,nt)]),n("div",null,[n("div",ot,v(c.creator),1),n("div",st,v(c.title),1),n("div",ct,v(c.mints)+" mints",1)])]),_:1}),t(C,null,{activator:e(({props:x})=>[t(m,R({variant:"text",icon:"mdi-dots-horizontal"},x,{width:"30",height:"30"}),null,16)]),default:e(()=>[t(w,null,{default:e(()=>[(a(!0),$(L,null,T(b(i),(x,I)=>(a(),r(h,{key:I},{prepend:e(()=>[t(p,{icon:x.icon},null,8,["icon"])]),default:e(()=>[t(g,null,{default:e(()=>[u(v(x.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}},y=f(_t,[["__scopeId","data-v-659972fb"]]),at={__name:"ViralSounds",setup(_){return(c,i)=>{const s=o("v-col"),l=o("v-row"),d=o("v-container");return a(),r(d,null,{default:e(()=>[t(S,{text:"Viral Sounds This Week",icon:"mdi-camera",seeAllLink:"/charts"}),t(l,null,{default:e(()=>[t(s,{sm:"6"},{default:e(()=>[t(y,{creator:"angelbaby",title:"im fine : ( : [Feat. GrimesAI",mints:"3,812"})]),_:1}),t(s,{sm:"6"},{default:e(()=>[t(y,{creator:"NOISE",title:"Dadabots - RUG THE BOTS",mints:"146"})]),_:1}),t(s,{sm:"6"},{default:e(()=>[t(y,{creator:"Josh Savage",title:"Bella",mints:"362"})]),_:1}),t(s,{sm:"6"},{default:e(()=>[t(y,{creator:"demotapes",title:"hold on",mints:"25"})]),_:1})]),_:1})]),_:1})}}},lt={__name:"UpcomingDrops",setup(_){return(c,i)=>{const s=o("v-container");return a(),r(s,null,{default:e(()=>[t(S,{text:"Upcoming Drops",seeAllLink:"/upcoming"})]),_:1})}}},it={__name:"TopCollectors",setup(_){return(c,i)=>{const s=o("v-container");return a(),r(s,null,{default:e(()=>[t(S,{text:"Top Collectors This Week",seeAllLink:"/charts/top/collectors/7d/mints"})]),_:1})}}},rt={__name:"RecentDrops",setup(_){return(c,i)=>{const s=o("v-container");return a(),r(s,null,{default:e(()=>[t(S,{text:"Recent Drops",seeAllLink:"recent"})]),_:1})}}};const k=_=>(U("data-v-47e16a44"),_=_(),j(),_),dt=["src"],ut=k(()=>n("div",null,[n("div",{class:"grey--text text-caption"},"© Copyright 2023 Sound.xyz"),n("div",{class:"grey--text text-caption"},"All rights reserved.")],-1)),mt=k(()=>n("div",null,[n("div",{class:"c-header-text"},"Company"),n("div",{class:"c-body-text"},"Careers"),n("div",{class:"c-body-text"},"Market"),n("div",{class:"c-body-text"},"Terms of Service"),n("div",{class:"c-body-text"},"Privacy Policy")],-1)),pt=k(()=>n("div",null,[n("div",{class:"c-header-text"},"Resources"),n("div",{class:"c-body-text"},"About"),n("div",{class:"c-body-text"},"Blog"),n("div",{class:"c-body-text"},"FAQ"),n("div",{class:"c-body-text"},"Docs")],-1)),vt=k(()=>n("div",{class:"c-header-text"},"Follow Us",-1)),ft={__name:"Footer",setup(_){return(c,i)=>{const s=o("v-layout"),l=o("v-icon");return a(),r(s,{class:"c-footer"},{default:e(()=>[t(s,null,{default:e(()=>[t(s,{class:"d-flex justify-space-between flex-column"},{default:e(()=>[n("img",{src:b(z),alt:"Logo",width:"200",height:"70"},null,8,dt),ut]),_:1}),t(s,{class:"d-flex justify-space-between"},{default:e(()=>[mt,pt,n("div",null,[vt,t(s,null,{default:e(()=>[t(l,{mdi:"",size:"30",class:"mr-2"},{default:e(()=>[u("mdi-twitter")]),_:1}),t(l,{mdi:"",size:"30",class:"mr-2"},{default:e(()=>[u("mdi-instagram")]),_:1}),t(l,{mdi:"",size:"30",class:"mr-2"},{default:e(()=>[u("mdi-mirror")]),_:1}),t(l,{mdi:"",size:"30",class:"mr-2"},{default:e(()=>[u("mdi-email")]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}}},gt=f(ft,[["__scopeId","data-v-47e16a44"]]),bt=q({__name:"index",setup(_){return(c,i)=>{const s=O,l=o("v-layout");return a(),$("div",null,[t(X),t(s),t(l,{class:"flex-column"},{default:e(()=>[t(at),t(lt),t(it),t(rt)]),_:1}),t(gt)])}}});export{bt as default};
