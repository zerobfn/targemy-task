(function(){"use strict";var t={7356:function(t,s,e){var i=e(6369),o=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"main"},[s("router-view")],1),s("div",{staticClass:"login"})])},a=[],n=e(1001),r={},c=(0,n.Z)(r,o,a,!1,null,null,null),l=c.exports,d=e(5431);(0,d.z)("/targemy-task/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var u=e(2631),m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"MainContainer"},[s("header-component",{staticClass:"MainContainer_header"}),s("div",{staticClass:"MainContainer_body"},[s("router-view")],1),s("footer-component",{staticClass:"MainContainer_footer"})],1)},p=[],_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Header_wrapper"},[s("div",{staticClass:"Header"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e(9574)}})]),s("div",{staticClass:"search"},[s("img",{staticClass:"search_icon",attrs:{src:e(310)}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.postId,expression:"postId"}],staticClass:"search_text",attrs:{type:"text",placeholder:"Найти посты"},domProps:{value:t.postId},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.updatePostId()},input:function(s){s.target.composing||(t.postId=s.target.value)}}})]),t.isSignedIn?s("div",{staticClass:"signedin"}):s("div",{staticClass:"auth"},[s("div",{staticClass:"auth_button"},[t._v("Регистрация")]),s("div",{staticClass:"auth_button"},[t._v("Вход")])])])])},h=[],v={name:"HeaderComponent",data:()=>({postId:""}),computed:{isSignedIn(){return this.$store.getters.isSignedIn}},methods:{updatePostId(){this.$store.commit("setPostId",Number(this.postId))}}},f=v,g=(0,n.Z)(f,_,h,!1,null,"754f6021",null),C=g.exports,b=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Footer"})},y=[],x={name:"FooterComponent"},w=x,k=(0,n.Z)(w,b,y,!1,null,"46f53979",null),S=k.exports,I={name:"MainContainer",components:{HeaderComponent:C,FooterComponent:S}},P=I,$=(0,n.Z)(P,m,p,!1,null,"0bc894dc",null),M=$.exports,Z=function(){var t=this,s=t._self._c;return s("div",{staticClass:"MainPage"},[s("div",{staticClass:"MainPage_wrapper"},[s("side-bar"),s("post-page",{key:`post-${t.postId}`,attrs:{postId:t.postId}}),s("comments-view",{key:`comments-${t.postId}`,attrs:{postId:t.postId}})],1),s("related-posts")],1)},B=[],N=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Sidebar"},[t._e(),s("div",{staticClass:"Sidebar_section"},[s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(5698)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Лента ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(5092)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Тренды ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(998)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Закладки ")])])]),s("div",{staticClass:"Sidebar_section"},[s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(6018)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Создать пост ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(3818)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Уведомления ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(4453)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Мои карточки ")])])])])},O=[],U={name:"SideBar"},D=U,R=(0,n.Z)(D,N,O,!1,null,"6a66141c",null),T=R.exports,q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"PostPage"},[t.post?s("div",{staticClass:"post"},[s("img",{staticClass:"post_image",attrs:{src:t.post.photo_cover}}),t.author?s("div",{staticClass:"post_author"},[s("div",{staticClass:"post_author_wrapper"},[s("div",{staticClass:"post_author-image-container"},[s("img",{staticClass:"post_author-image",attrs:{src:t.author.photo_avatar}})]),s("div",{staticClass:"post_author-info"},[s("div",{staticClass:"post_author-info--fullname"},[t._v(" "+t._s(t.author.fullName)+" ")]),s("div",{staticClass:"post_author-info--subscribers"},[t._v(" "+t._s(`${t.author.subscribers} подписчиков`)+" ")])])])]):t._e(),s("div",{staticClass:"post_date"},[s("p",{staticClass:"post_date-timebefore"},[t._v(" "+t._s(t.post.postedDate)+" ")]),s("p",{staticClass:"post_date-readtime"},[t._v(" 1 мин на чтение ")])]),s("div",{staticClass:"post_title"},[t._v(" "+t._s(t.post.title)+" ")]),s("div",{staticClass:"post_annotation"},[t._v(" "+t._s(t.post.annotation)+" ")]),s("div",{staticClass:"post_content",domProps:{innerHTML:t._s(t.post.content)}}),s("div",{staticClass:"post_footer"},[s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])]),s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])]),s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])])])]):t._e(),t.author?s("div",{staticClass:"post_author"},[s("div",{staticClass:"post_author_wrapper"},[s("div",{staticClass:"post_author-image-container"},[s("img",{staticClass:"post_author-image",attrs:{src:t.author.photo_avatar}})]),s("div",{staticClass:"post_author-info"},[s("div",{staticClass:"post_author-info--fullname"},[t._v(" "+t._s(t.author.fullName)+" ")]),s("div",{staticClass:"post_author-info--subscribers"},[s("span",{staticClass:"author_subscribe"},[t._v(" Подписаться "),s("img",{attrs:{src:e(5178)}})]),t._v(" "+t._s(`${t.author.subscribers} подписчиков`)+" ")])])]),s("p",{staticClass:"post_author-about"},[t._v(" "+t._s(t.author.about)+" ")])]):t._e()])},E=[],j=e(680);const F="Token",L="token",V="https://api.stage.targemy.com",H=`${V}/v1`,A=()=>{const t=j.Z.get(L);return void 0!==t&&-1!==t.indexOf(F)},z=()=>{j.Z.remove(L)},G=()=>j.Z.get(L),J=({url:t,onSuccess:s,onError:e,doFinally:i,isSecureRequest:o=!1})=>{const a={};o&&(a.Authorization=G()),fetch(t,{method:"GET",headers:a}).then((t=>t.json())).then((t=>{s(t)})).catch((t=>{e&&e(t)})).finally((()=>{i&&i()}))},K=function(t){const s=Math.floor((new Date-new Date(t))/1e3);let e=s/31536e3,i="";return e>=5?i=`${Math.floor(e)} лет`:e>=2?i=`${Math.floor(e)} года`:e>=1?i="год":(e=s/2592e3,e>=5?i=`${Math.floor(e)} месяцев`:e>=2?i=`${Math.floor(e)} месяца`:e>=1?i="месяц":(e=s/86400,e>=5?i=`${Math.floor(e)} дней`:e>=2?i=`${Math.floor(e)} дня`:e>=1?i="один день":(e=s/3600,e>=5?i=`${Math.floor(e)} часов`:e>=2?i=`${Math.floor(e)} часа`:e>=1?i="час":(e=s/60,e=s/3600,i=e>=5?`${Math.floor(e)} минут`:e>=2?`${Math.floor(e)} минуты`:e>=1?"минуту":"меньше минуты")))),`${i} назад`};class Q{constructor({id:t,type:s,user_id:e,likes:i,card_id:o,collection_id:a,task_id:n,date_create:r,date_update:c,state:l,title:d,annotation:u,content:m,photo_cover:p,photo_grad:_,linkURL:h}){this.id=t,this.type=s,this.user_id=e,this.likes=i,this.card_id=o,this.collection_id=a,this.task_id=n,this.date_create=r,this.date_update=c,this.state=l,this.title=d,this.annotation=u,this.content=m,this.photo_cover=p,this.photo_grad=_,this.linkURL=h}get postedDate(){return K(this.date_create)}}class W{constructor(t,s=!1){this.id=t,this.first_name="",this.last_name="",this.is_company=0,this.status=0,this.created_at="",this.updated_at="",this.is_verified=0,this.city="",this.hobby="",this.about="",this.photo_cover="",this.photo_avatar="",this.profileLink="",this.info={postsCount:0,collectionsCount:0,targetsCount:0,challengeCount:0,participantCount:0,subscribersCount:0,subscribesCount:0,withTargemySince:""},this.getUser(),s&&this.getInfo()}getUser(){J({url:`${H}/user/${this.id}`,isSecureRequest:!1,onSuccess:t=>{this.setUser(t)},onError:t=>{console.log(t)}})}setUser({first_name:t,last_name:s,is_company:e,status:i,created_at:o,updated_at:a,is_verified:n,city:r,hobby:c,about:l,photo_cover:d,photo_avatar:u,profileLink:m}){this.first_name=t,this.last_name=s,this.is_company=e,this.status=i,this.created_at=o,this.updated_at=a,this.is_verified=n,this.city=r,this.hobby=c,this.about=l,this.photo_cover=d,this.photo_avatar=u,this.profileLink=m}getInfo(){J({url:`${H}/user/${this.id}/info`,isSecureRequest:!1,onSuccess:t=>{this.setInfo(t.data)},onError:t=>{console.log(t)}})}setInfo({postsCount:t,collectionsCount:s,targetsCount:e,challengeCount:i,participantCount:o,subscribersCount:a,subscribesCount:n,withTargemySince:r}){this.info.postsCount=t,this.info.collectionsCount=s,this.info.targetsCount=e,this.info.challengeCount=i,this.info.participantCount=o,this.info.subscribersCount=a,this.info.subscribesCount=n,this.info.withTargemySince=r}get fullName(){return`${this.first_name} ${this.last_name}`}get subscribers(){return this.info.subscribersCount}}var X={props:{postId:{type:Number,default:3}},data:()=>({post:null,author:null}),methods:{getPost(){J({url:`${H}/post/${this.postId}`,isSecureRequest:!1,onSuccess:t=>{this.post=new Q(t)},onError:t=>{console.log(t)},doFinally:()=>{this.author=new W(this.post.user_id,!0)}})}},mounted(){this.getPost()}},Y=X,tt=(0,n.Z)(Y,q,E,!1,null,"5d4f653b",null),st=tt.exports,et=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Comments"},[s("div",{staticClass:"Comments_title"},[s("img",{staticClass:"Comments_title-icon",attrs:{src:e(4294)}}),s("div",{staticClass:"Comments_title-text"},[t._v(" "+t._s(`${t.totalCount} комментариев`)+" ")])]),s("div",{staticClass:"Comments_new"},[t.newComment?s("div",{staticClass:"Comments_new-wrapper"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"new_comment-textarea",attrs:{placeholder:"Не более 1000 символов"},domProps:{value:t.comment},on:{input:function(s){s.target.composing||(t.comment=s.target.value)}}}),t._v(" "),s("img",{staticClass:"new_comment-close",attrs:{src:e(5608)},on:{click:function(s){return t.toggleNewComment()}}}),s("button",{staticClass:"new_comment-button"},[t._v(" Опубликовать ")])]):s("div",{staticClass:"Comments_new-placeholder",on:{click:function(s){return t.toggleNewComment()}}},[t._v(" Написать комментарий ")])]),t._l(t.comments,(function(e,i){return s("div",{key:`comment-${i}-${e}`,staticClass:"comment"},[s("div",{staticClass:"comment_author"},[s("div",{staticClass:"comment_author-image-container"},[s("img",{staticClass:"comment_author-image",attrs:{src:e.user.photo_avatar}})]),s("div",{staticClass:"comment_author-info"},[s("div",{staticClass:"comment_author-info--fullname"},[t._v(" "+t._s(e.user.fullName)+" ")]),s("div",{staticClass:"comment_author-info--timebefore"},[t._v(" "+t._s(e.commentDate)+" ")])])]),s("div",{staticClass:"comment_text"},[t._v(" "+t._s(e.content)+" ")])])})),t.nextUrl?s("div",{staticClass:"show_more",on:{click:function(s){return t.getComments()}}},[t._v("Показать еще")]):t._e()],2)},it=[];class ot{constructor({id:t,user_id:s,type:e,post_id:i,card_id:o,date_create:a,content:n}){this.id=t,this.user_id=s,this.type=e,this.post_id=i,this.card_id=o,this.date_create=a,this.content=n,this.user=new W(this.user_id)}get commentDate(){return K(this.date_create)}}var at={name:"CommentsView",props:{postId:{type:Number,default:3}},data:()=>({nextUrl:"",comments:[],totalCount:0,newComment:!1,comment:""}),methods:{getComments(){null!==this.nextUrl&&J({url:this.nextUrl,isSecureRequest:!1,onSuccess:t=>{t.items.forEach((t=>{this.comments.push(new ot(t))})),this.totalCount=t._meta.totalCount,this.nextUrl=t._links.next?t._links.next.href:null},onError:t=>{console.error(t)}})},toggleNewComment(){this.newComment=!this.newComment}},mounted(){this.nextUrl=`${H}/comments?filter%5Bpost_id%5D=${this.postId}&sort=-id&page=1&per-page=2`,this.getComments()}},nt=at,rt=(0,n.Z)(nt,et,it,!1,null,"ec47693a",null),ct=rt.exports,lt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"RelatedPosts"},[s("div",{staticClass:"RelatedPosts_title"},[t._v(" Похожие посты ")]),s("div",{staticClass:"posts"},t._l(t.posts,(function(t){return s("base-post",{key:t.post.id,attrs:{post:t}})})),1)])},dt=[],ut=function(){var t=this,s=t._self._c;return s("div",{staticClass:"BasePost",style:{"background-image":`url(${t.post.post.photo_cover})`}},[s("div",{staticClass:"BasePost_author"},[s("div",{staticClass:"BasePost_author-avatar"},[s("img",{staticClass:"BasePost_author-avatar--image",attrs:{src:t.post.user.photo_avatar}})]),s("div",{staticClass:"BasePost_author-info"},[s("div",{staticClass:"BasePost_author-info--fullname"},[t._v(" "+t._s(`${t.post.user.first_name} ${t.post.user.last_name}`)+" ")]),s("div",{staticClass:"BasePost_author-info--posttype"},[t._v(" Блог ")])])]),s("div",{staticClass:"BasePost_timebefore"},[t._v(" "+t._s(t.postTime)+" ")]),s("div",{staticClass:"BasePost_title"},[t._v(" "+t._s(t.post.post.title)+" ")]),s("div",{staticClass:"BasePost_footer"},[s("div",{staticClass:"BasePost_footer-users"},t._l(t.users,(function(i,o){return s("div",{key:`user-${o}`,staticClass:"user"},[s("div",{staticClass:"user_avatar"},[s("img",{staticClass:"user_avatar-image",attrs:{src:i.photo_avatar}})]),1===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(8091)}}):t._e(),2===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(6849)}}):t._e(),3===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(3967)}}):t._e()])})),0),s("div",{staticClass:"BasePost_footer-indicators"},[s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(9213)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])]),s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(7921)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])]),s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(9297)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])])])])])},mt=[];const pt=[{post:{id:1,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:2,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:3,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:4,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}}],_t=[{action_type:1,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:2,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:3,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:1,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:3,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"}];var ht={name:"BasePost",props:{post:{type:Object,default:null}},data:()=>({users:_t}),computed:{postTime(){return K(this.post.post.date_create)}}},vt=ht,ft=(0,n.Z)(vt,ut,mt,!1,null,"02ce1006",null),gt=ft.exports,Ct={name:"RelatedPosts",components:{BasePost:gt},data:()=>({posts:pt})},bt=Ct,yt=(0,n.Z)(bt,lt,dt,!1,null,"d62adb18",null),xt=yt.exports,wt={name:"MainPage",components:{SideBar:T,PostPage:st,CommentsView:ct,RelatedPosts:xt},computed:{postId(){return this.$store.getters.getPostId}}},kt=wt,St=(0,n.Z)(kt,Z,B,!1,null,"9f47d25c",null),It=St.exports;i.ZP.use(u.Z);const Pt=[{path:"",component:M,children:[{path:"",name:"mainpage",component:It}]},{path:"*",redirect:{name:"mainpage"}}],$t=new u.Z({mode:"history",base:"/targemy-task/",routes:Pt});var Mt=$t,Zt=e(3822);i.ZP.use(Zt.ZP);var Bt=new Zt.ZP.Store({state:{isSignedIn:A(),postId:3},actions:{logOut({commit:t}){t("setIsSignedIn",!1),z()}},mutations:{setIsSignedIn(t,s){t.isSignedIn=s},setPostId(t,s){/^-?\d+$/.test(s)&&(t.postId=s)}},getters:{getIsSignedIn(t){return t.isSignedIn},getPostId(t){return t.postId}},modules:{}});i.ZP.config.productionTip=!1,new i.ZP({router:Mt,store:Bt,render:t=>t(l)}).$mount("#app")},998:function(t,s,e){t.exports=e.p+"img/bookmark_icon.33b2536e.svg"},4453:function(t,s,e){t.exports=e.p+"img/cards_icon.7e239606.svg"},5608:function(t,s,e){t.exports=e.p+"img/close_icon.0353ddb3.svg"},4294:function(t,s,e){t.exports=e.p+"img/discussion_icon.3688079f.svg"},5698:function(t,s,e){t.exports=e.p+"img/feed_icon.9b3e77bb.svg"},9574:function(t,s,e){t.exports=e.p+"img/logo.48b54b53.svg"},3818:function(t,s,e){t.exports=e.p+"img/notification_icon.2bdbbd36.svg"},5178:function(t,s,e){t.exports=e.p+"img/plus_icon.6b4f67b9.svg"},6018:function(t,s,e){t.exports=e.p+"img/post_icon.e02c56b4.svg"},6849:function(t,s,e){t.exports=e.p+"img/icon_comment_action.0eff9178.svg"},7921:function(t,s,e){t.exports=e.p+"img/icon_comment_normal.36a61801.svg"},8091:function(t,s,e){t.exports=e.p+"img/icon_like_action.22be89f9.svg"},9213:function(t,s,e){t.exports=e.p+"img/icon_like_normal.5957a0c4.svg"},3967:function(t,s,e){t.exports=e.p+"img/icon_share_action.bda6a3e4.svg"},9297:function(t,s,e){t.exports=e.p+"img/icon_share_normal.8faa3201.svg"},310:function(t,s,e){t.exports=e.p+"img/search_icon.ee4caedb.svg"},5092:function(t,s,e){t.exports=e.p+"img/trends_icon.0680b4bb.svg"}},s={};function e(i){var o=s[i];if(void 0!==o)return o.exports;var a=s[i]={exports:{}};return t[i](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(s,i,o,a){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],a=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||n>=a)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(r=!1,a<n&&(n=a));if(r){t.splice(d--,1);var l=o();void 0!==l&&(s=l)}}return s}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[i,o,a]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p="/targemy-task/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var o,a,n=i[0],r=i[1],c=i[2],l=0;if(n.some((function(s){return 0!==t[s]}))){for(o in r)e.o(r,o)&&(e.m[o]=r[o]);if(c)var d=c(e)}for(s&&s(i);l<n.length;l++)a=n[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},i=self["webpackChunktargemy_task"]=self["webpackChunktargemy_task"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(7356)}));i=e.O(i)})();
//# sourceMappingURL=app.8a75f66d.js.map