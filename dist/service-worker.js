if(!self.define){let i,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=e,document.head.appendChild(i)}else i=r,importScripts(r),e()})).then((()=>{let i=e[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(n,l)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let s={};const g=i=>r(i,o),m={module:{uri:o},exports:s,require:g};e[o]=Promise.all(n.map((i=>m[i]||g(i)))).then((i=>(l(...i),s)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"targemy-task"}),self.skipWaiting(),i.precacheAndRoute([{url:"/tergamy/css/app.0824de14.css",revision:null},{url:"/tergamy/img/bookmark_icon.33b2536e.svg",revision:null},{url:"/tergamy/img/cards_icon.7e239606.svg",revision:null},{url:"/tergamy/img/close_icon.0353ddb3.svg",revision:null},{url:"/tergamy/img/comment_icon-hover.6fbf758a.svg",revision:null},{url:"/tergamy/img/comment_icon.ebf1bc30.svg",revision:null},{url:"/tergamy/img/discussion_icon.3688079f.svg",revision:null},{url:"/tergamy/img/feed_icon.9b3e77bb.svg",revision:null},{url:"/tergamy/img/icon_comment_action.0eff9178.svg",revision:null},{url:"/tergamy/img/icon_comment_normal.36a61801.svg",revision:null},{url:"/tergamy/img/icon_like_action.22be89f9.svg",revision:null},{url:"/tergamy/img/icon_like_normal.5957a0c4.svg",revision:null},{url:"/tergamy/img/icon_share_action.bda6a3e4.svg",revision:null},{url:"/tergamy/img/icon_share_normal.8faa3201.svg",revision:null},{url:"/tergamy/img/like_icon-hover.560047d3.svg",revision:null},{url:"/tergamy/img/like_icon.94e52da4.svg",revision:null},{url:"/tergamy/img/logo.48b54b53.svg",revision:null},{url:"/tergamy/img/notification_icon.2bdbbd36.svg",revision:null},{url:"/tergamy/img/plus_icon.6b4f67b9.svg",revision:null},{url:"/tergamy/img/post_icon.e02c56b4.svg",revision:null},{url:"/tergamy/img/search_icon.ee4caedb.svg",revision:null},{url:"/tergamy/img/share_icon-hover.dfd1c72f.svg",revision:null},{url:"/tergamy/img/share_icon.d87b700a.svg",revision:null},{url:"/tergamy/img/trends_icon.0680b4bb.svg",revision:null},{url:"/tergamy/index.html",revision:"018ab5e90d28ccf726505999b51c1b3d"},{url:"/tergamy/js/app.e8663eb1.js",revision:null},{url:"/tergamy/js/chunk-vendors.53b9fc38.js",revision:null},{url:"/tergamy/manifest.json",revision:"288438dedcd230a779d7665ea95a0f36"},{url:"/tergamy/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
