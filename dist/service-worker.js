if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let t={};const o=e=>s(e,l),a={module:{uri:l},exports:t,require:o};i[l]=Promise.all(r.map((e=>a[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"targemy-task"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/targemy-task/css/app.fd78b2b2.css",revision:null},{url:"/targemy-task/img/bookmark_icon.33b2536e.svg",revision:null},{url:"/targemy-task/img/cards_icon.7e239606.svg",revision:null},{url:"/targemy-task/img/close_icon.0353ddb3.svg",revision:null},{url:"/targemy-task/img/comment_icon-hover.6fbf758a.svg",revision:null},{url:"/targemy-task/img/comment_icon.ebf1bc30.svg",revision:null},{url:"/targemy-task/img/discussion_icon.3688079f.svg",revision:null},{url:"/targemy-task/img/feed_icon.9b3e77bb.svg",revision:null},{url:"/targemy-task/img/icon_comment_action.0eff9178.svg",revision:null},{url:"/targemy-task/img/icon_comment_normal.36a61801.svg",revision:null},{url:"/targemy-task/img/icon_like_action.22be89f9.svg",revision:null},{url:"/targemy-task/img/icon_like_normal.5957a0c4.svg",revision:null},{url:"/targemy-task/img/icon_share_action.bda6a3e4.svg",revision:null},{url:"/targemy-task/img/icon_share_normal.8faa3201.svg",revision:null},{url:"/targemy-task/img/like_icon-hover.560047d3.svg",revision:null},{url:"/targemy-task/img/like_icon.94e52da4.svg",revision:null},{url:"/targemy-task/img/logo.48b54b53.svg",revision:null},{url:"/targemy-task/img/notification_icon.2bdbbd36.svg",revision:null},{url:"/targemy-task/img/plus_icon.6b4f67b9.svg",revision:null},{url:"/targemy-task/img/post_icon.e02c56b4.svg",revision:null},{url:"/targemy-task/img/search_icon.ee4caedb.svg",revision:null},{url:"/targemy-task/img/share_icon-hover.dfd1c72f.svg",revision:null},{url:"/targemy-task/img/share_icon.d87b700a.svg",revision:null},{url:"/targemy-task/img/trends_icon.0680b4bb.svg",revision:null},{url:"/targemy-task/index.html",revision:"c9fff20e4889575be0f0293bc01665dc"},{url:"/targemy-task/js/app.d3a6b0ce.js",revision:null},{url:"/targemy-task/js/chunk-vendors.53b9fc38.js",revision:null},{url:"/targemy-task/manifest.json",revision:"288438dedcd230a779d7665ea95a0f36"},{url:"/targemy-task/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
