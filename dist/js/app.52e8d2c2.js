(function(){"use strict";var t={652:function(t,s,e){var i=e(6369),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"main"},[s("router-view")],1),s("div",{staticClass:"login"})])},o=[],r=e(1001),n={},c=(0,r.Z)(n,a,o,!1,null,null,null),l=c.exports,p=e(5431);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var d=e(2631),m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"MainContainer"},[s("header-component",{staticClass:"MainContainer_header"}),s("div",{staticClass:"MainContainer_body"},[s("router-view")],1),s("footer-component",{staticClass:"MainContainer_footer"})],1)},u=[],_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Header_wrapper"},[s("div",{staticClass:"Header"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e(9574)}})]),t.isSignedIn?s("div",{staticClass:"signedin"},[s("div",{staticClass:"search"},[s("img",{staticClass:"search_icon",attrs:{src:e(310)}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search_text",attrs:{type:"text",placeholder:"Найти посты"},domProps:{value:t.searchText},on:{input:function(s){s.target.composing||(t.searchText=s.target.value)}}})])]):s("div",{staticClass:"auth"},[s("div",{staticClass:"auth_button"},[t._v("Регистрация")]),s("div",{staticClass:"auth_button"},[t._v("Вход")])])])])},h=[],f={name:"HeaderComponent",data:()=>({searchText:""}),computed:{isSignedIn(){return this.$store.getters.isSignedIn}}},g=f,v=(0,r.Z)(g,_,h,!1,null,"2a008e77",null),C=v.exports,b=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Footer"})},y=[],x={name:"FooterComponent"},w=x,S=(0,r.Z)(w,b,y,!1,null,"46f53979",null),k=S.exports,P={name:"MainContainer",components:{HeaderComponent:C,FooterComponent:k}},$=P,I=(0,r.Z)($,m,u,!1,null,"0bc894dc",null),B=I.exports,D=function(){var t=this,s=t._self._c;return s("div",{staticClass:"MainPage"},[s("div",{staticClass:"MainPage_wrapper"},[s("side-bar"),s("post-page",{attrs:{postId:t.postId}}),s("comments-view",{attrs:{postId:t.postId}})],1),s("related-posts")],1)},M=[],Z=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Sidebar"},[t._e(),s("div",{staticClass:"Sidebar_section"},[s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(5698)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Лента ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(5092)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Тренды ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(998)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Закладки ")])])]),s("div",{staticClass:"Sidebar_section"},[s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(6018)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Создать пост ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(3818)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Уведомления ")])]),s("div",{staticClass:"Sidebar_section-item"},[s("img",{staticClass:"Sidebar_section-item--icon",attrs:{src:e(4453)}}),s("p",{staticClass:"Sidebar_section-item--text"},[t._v(" Мои карточки ")])])])])},T=[],O={name:"SideBar"},U=O,N=(0,r.Z)(U,Z,T,!1,null,"6a66141c",null),R=N.exports,j=function(){var t=this,s=t._self._c;return s("div",{staticClass:"PostPage"},[t.post?s("div",{staticClass:"post"},[s("img",{staticClass:"post_image",attrs:{src:t.post.photo_cover}}),t.author?s("div",{staticClass:"post_author"},[s("div",{staticClass:"post_author_wrapper"},[s("div",{staticClass:"post_author-image-container"},[s("img",{staticClass:"post_author-image",attrs:{src:t.author.photo_avatar}})]),s("div",{staticClass:"post_author-info"},[s("div",{staticClass:"post_author-info--fullname"},[t._v(" "+t._s(t.author.fullName)+" ")]),s("div",{staticClass:"post_author-info--subscribers"},[t._v(" "+t._s(`${t.author.subscribers} подписчиков`)+" ")])])])]):t._e(),s("div",{staticClass:"post_date"},[s("p",{staticClass:"post_date-timebefore"},[t._v(" "+t._s(t.post.postedDate)+" ")]),s("p",{staticClass:"post_date-readtime"},[t._v(" 1 мин на чтение ")])]),s("div",{staticClass:"post_title"},[t._v(" "+t._s(t.post.title)+" ")]),s("div",{staticClass:"post_annotation"},[t._v(" "+t._s(t.post.annotation)+" ")]),s("div",{staticClass:"post_content",domProps:{innerHTML:t._s(t.post.content)}}),s("div",{staticClass:"post_footer"},[s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])]),s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])]),s("div",{staticClass:"post_footer-item"},[s("img",{staticClass:"post_footer-item--icon"}),s("div",{staticClass:"post_footer-item--text"},[t._v(" "+t._s(t.post.likes)+" ")])])])]):t._e(),t.author?s("div",{staticClass:"post_author"},[s("div",{staticClass:"post_author_wrapper"},[s("div",{staticClass:"post_author-image-container"},[s("img",{staticClass:"post_author-image",attrs:{src:t.author.photo_avatar}})]),s("div",{staticClass:"post_author-info"},[s("div",{staticClass:"post_author-info--fullname"},[t._v(" "+t._s(t.author.fullName)+" ")]),s("div",{staticClass:"post_author-info--subscribers"},[s("span",{staticClass:"author_subscribe"},[t._v(" Подписаться "),s("img",{attrs:{src:e(5178)}})]),t._v(" "+t._s(`${t.author.subscribers} подписчиков`)+" ")])])]),s("p",{staticClass:"post_author-about"},[t._v(" "+t._s(t.author.about)+" ")])]):t._e()])},q=[],E=e(680);const A="Token",L="token",F="https://api.stage.targemy.com",V=`${F}/v1`,H=()=>{const t=E.Z.get(L);return void 0!==t&&-1!==t.indexOf(A)},z=()=>{E.Z.remove(L)},G=()=>E.Z.get(L),J=({url:t,onSuccess:s,onError:e,doFinally:i,isSecureRequest:a=!1})=>{const o={Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Cache-Control":null,"X-Requested-With":null};a&&(o.Authorization=G()),fetch(t,{method:"GET",headers:o}).then((t=>t.json())).then((t=>{s(t)})).catch((t=>{e&&e(t)})).finally((()=>{i&&i()}))},W=function(t){const s=Math.floor((new Date-new Date(t))/1e3);let e=s/31536e3,i="";return e>=5?i=`${Math.floor(e)} лет`:e>=2?i=`${Math.floor(e)} года`:e>=1?i="год":(e=s/2592e3,e>=5?i=`${Math.floor(e)} месяцев`:e>=2?i=`${Math.floor(e)} месяца`:e>=1?i="месяц":(e=s/86400,e>=5?i=`${Math.floor(e)} дней`:e>=2?i=`${Math.floor(e)} дня`:e>=1?i="один день":(e=s/3600,e>=5?i=`${Math.floor(e)} часов`:e>=2?i=`${Math.floor(e)} часа`:e>=1?i="час":(e=s/60,e=s/3600,i=e>=5?`${Math.floor(e)} минут`:e>=2?`${Math.floor(e)} минуты`:e>=1?"минуту":"меньше минуты")))),`${i} назад`};class X{constructor({id:t,type:s,user_id:e,likes:i,card_id:a,collection_id:o,task_id:r,date_create:n,date_update:c,state:l,title:p,annotation:d,content:m,photo_cover:u,photo_grad:_,linkURL:h}){this.id=t,this.type=s,this.user_id=e,this.likes=i,this.card_id=a,this.collection_id=o,this.task_id=r,this.date_create=n,this.date_update=c,this.state=l,this.title=p,this.annotation=d,this.content=m,this.photo_cover=u,this.photo_grad=_,this.linkURL=h}get postedDate(){return W(this.date_create)}}const K={id:3,type:"post",user_id:2,likes:0,card_id:0,collection_id:0,task_id:null,date_create:"2021-04-01 00:45:09",date_update:"2022-07-15 00:50:05",state:1,title:"5 лайфхаков для поиска денег: как в кризис строить коммуникацию с инвесторами",annotation:"Как сейчас искать инвесторов, выстраивать коммуникационную стратегию и презентовать себя, — рассказывает сооснователь Vinci Agency Мария Лапук.",content:'<p>На фоне санкций, экономического кризиса и сложной общественно-политической ситуации на венчурном рынке России наступило затишье. Может показаться, что не лучшее время для привлечения инвестиций — но в реальности игроки скорее взяли паузу.</p><p><img src="https://img.targemy.com/e6999c69189e47efb773cb8f9a711427" style="" alt="Stonks?"></p><p>По прогнозам экспертов, рынок действительно может просесть. Но снижение общих показателей не означает прекращения инвестиционной деятельности.</p><p>После того, как ряд западных компаний покинули страну, а поставки многих товаров прекратились или серьезно подорожали, в России критически выросла потребность в импортозамещении. Так что у многих отечественных компаний, особенно в сфере технологий, есть шанс занять внушительную долю рынка — поэтому инвесторы будут присматриваться к новым проектам.</p><p><img src="https://img.targemy.com/187c933ef10227f597aeacdd66dda3d2" alt="Мамкин инвестор" style=""></p><p>В IT-отрасли уже активно ведутся переговоры фондов со стартапами, и уже в ближайшее время мы увидим возобновление новостей о сделках. Так, на днях уже появилась новость о том, что МТС вложит 72 млн рублей в в сервис онлайн-заказов еды и напитков Bartello, а российский сервис поиска наставников в ИТ Solvery привлёк инвестиции от red_mad_robot.\r\n</p><p>Кроме того, на рынке скоро должны появиться новые игроки — российские инвесторы, которые раньше вкладывались в западные проекты, а сейчас потеряли такую возможность.\r\n</p><p>Так что стартапам, которые планировали привлекать финансирование, уже стоит начать подготовительную работу в инфополе.</p><p>\r\n</p><p>\r\n</p><p></p>',photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",photo_grad:8,linkURL:"/posts/show?id=3"},Q=[{id:2,first_name:"Alex",last_name:"T",is_company:0,status:2,created_at:"2020-07-17 19:25:06",updated_at:"2022-03-13 14:04:26",is_verified:1,city:"",hobby:"",about:"Just dude",photo_cover:"https://img.targemy.com/a2c064be550a8787c0195879c247caf7",photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d",profileLink:"https://stage.targemy.com/u2"},{id:8,first_name:"Den",last_name:"Vir",is_company:0,status:2,created_at:"2020-07-17 19:25:06",updated_at:"2022-07-18 13:36:31",is_verified:1,city:null,hobby:"Programmer",about:"Obo mne",photo_cover:"https://img.targemy.com/fd78fb2f0c667253641fe0365f3bdcb4",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b",profileLink:"https://stage.targemy.com/u8"}],Y=[{user_id:2,data:{postsCount:4,collectionsCount:1,targetsCount:1,challengeCount:1,participantCount:2,subscribersCount:3,subscribesCount:1,withTargemySince:"2020-07-17 19:25:06"}}],tt=[{url:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2",data:{items:[{id:86,user_id:2,type:"post",post_id:3,card_id:null,date_create:"2022-07-15 01:32:12",content:"Так, я добавлю ещё несколько комментариев чтобы попасть в тренды. Это ведь так работает да? Ведь да?"},{id:85,user_id:2,type:"post",post_id:3,card_id:null,date_create:"2022-07-15 00:51:12",content:"Где моя тысяча лайков? 🐕‍🦺🐕‍🦺"}],_links:{self:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"},first:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"},last:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"},next:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"}},_meta:{totalCount:3,pageCount:2,currentPage:1,perPage:2}}},{url:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2",data:{items:[{id:5,user_id:8,type:"post",post_id:3,card_id:null,date_create:"2021-05-24 20:18:41",content:"Коммент к посту"}],_links:{self:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"},first:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"},last:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"},prev:{href:"https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"}},_meta:{totalCount:3,pageCount:2,currentPage:2,perPage:2}}}],st=[{post:{id:1,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:2,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:3,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}},{post:{id:4,photo_cover:"https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",title:"In oculis quidem se texit, ne interiret at vero eos.",date_create:"2022-07-15 00:50:05"},user:{first_name:"Den",last_name:"Vir",photo_avatar:"https://img.targemy.com/cb544da654fdda33885a2efebe4e080b"}}],et=[{action_type:1,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:2,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:3,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:1,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"},{action_type:3,photo_avatar:"https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d"}];class it{constructor(t,s=!1){this.id=t,this.first_name="",this.last_name="",this.is_company=0,this.status=0,this.created_at="",this.updated_at="",this.is_verified=0,this.city="",this.hobby="",this.about="",this.photo_cover="",this.photo_avatar="",this.profileLink="",this.info={postsCount:0,collectionsCount:0,targetsCount:0,challengeCount:0,participantCount:0,subscribersCount:0,subscribesCount:0,withTargemySince:""},this.getUser(),s&&this.getInfo()}getUser(){J({url:`${V}/user/${this.id}`,isSecureRequest:!1,onSuccess:t=>{this.setUser(t)},onError:t=>{console.log(t);const s=Q.find((t=>t.id===this.id));s&&this.setUser(s)}})}setUser({first_name:t,last_name:s,is_company:e,status:i,created_at:a,updated_at:o,is_verified:r,city:n,hobby:c,about:l,photo_cover:p,photo_avatar:d,profileLink:m}){this.first_name=t,this.last_name=s,this.is_company=e,this.status=i,this.created_at=a,this.updated_at=o,this.is_verified=r,this.city=n,this.hobby=c,this.about=l,this.photo_cover=p,this.photo_avatar=d,this.profileLink=m}getInfo(){J({url:`${V}/user/${this.id}/info`,isSecureRequest:!1,onSuccess:t=>{this.setInfo(t.data)},onError:t=>{console.log(t);const s=Y.find((t=>t.user_id===this.id));s&&this.setInfo(s.data)}})}setInfo({postsCount:t,collectionsCount:s,targetsCount:e,challengeCount:i,participantCount:a,subscribersCount:o,subscribesCount:r,withTargemySince:n}){this.info.postsCount=t,this.info.collectionsCount=s,this.info.targetsCount=e,this.info.challengeCount=i,this.info.participantCount=a,this.info.subscribersCount=o,this.info.subscribesCount=r,this.info.withTargemySince=n}get fullName(){return`${this.first_name} ${this.last_name}`}get subscribers(){return this.info.subscribersCount}}var at={props:{postId:{type:Number,default:3}},data:()=>({post:null,author:null}),methods:{getPost(){J({url:`${V}/post/${this.postId}`,isSecureRequest:!1,onSuccess:t=>{this.post=new X(t)},onError:t=>{console.log(t),this.post=new X(K)},doFinally:()=>{this.author=new it(this.post.user_id,!0)}})}},mounted(){this.getPost()}},ot=at,rt=(0,r.Z)(ot,j,q,!1,null,"f71f40c6",null),nt=rt.exports,ct=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Comments"},[s("div",{staticClass:"Comments_title"},[s("img",{staticClass:"Comments_title-icon",attrs:{src:e(4294)}}),s("div",{staticClass:"Comments_title-text"},[t._v(" "+t._s(`${t.totalCount} комментариев`)+" ")])]),s("div",{staticClass:"Comments_new"},[t.newComment?s("div",{staticClass:"Comments_new-wrapper"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"new_comment-textarea",attrs:{placeholder:"Не более 1000 символов"},domProps:{value:t.comment},on:{input:function(s){s.target.composing||(t.comment=s.target.value)}}}),t._v(" "),s("img",{staticClass:"new_comment-close",attrs:{src:e(5608)},on:{click:function(s){return t.toggleNewComment()}}}),s("button",{staticClass:"new_comment-button"},[t._v(" Опубликовать ")])]):s("div",{staticClass:"Comments_new-placeholder",on:{click:function(s){return t.toggleNewComment()}}},[t._v(" Написать комментарий ")])]),t._l(t.comments,(function(e,i){return s("div",{key:`comment-${i}-${e}`,staticClass:"comment"},[s("div",{staticClass:"comment_author"},[s("div",{staticClass:"comment_author-image-container"},[s("img",{staticClass:"comment_author-image",attrs:{src:e.user.photo_avatar}})]),s("div",{staticClass:"comment_author-info"},[s("div",{staticClass:"comment_author-info--fullname"},[t._v(" "+t._s(e.user.fullName)+" ")]),s("div",{staticClass:"comment_author-info--timebefore"},[t._v(" "+t._s(e.commentDate)+" ")])])]),s("div",{staticClass:"comment_text"},[t._v(" "+t._s(e.content)+" ")])])})),t.nextUrl?s("div",{staticClass:"show_more",on:{click:function(s){return t.getComments()}}},[t._v("Показать еще")]):t._e()],2)},lt=[];class pt{constructor({id:t,user_id:s,type:e,post_id:i,card_id:a,date_create:o,content:r}){this.id=t,this.user_id=s,this.type=e,this.post_id=i,this.card_id=a,this.date_create=o,this.content=r,this.user=new it(this.user_id)}get commentDate(){return W(this.date_create)}}var dt={name:"CommentsView",props:{postId:{type:Number,default:3}},data:()=>({nextUrl:"",comments:[],totalCount:0,newComment:!1,comment:""}),methods:{getComments(){null!==this.nextUrl&&J({url:this.nextUrl,isSecureRequest:!1,onSuccess:t=>{t.items.forEach((t=>{this.comments.push(new pt(t))})),this.totalCount=t._meta.totalCount,this.nextUrl=t._links.next?t._links.next.href:null},onError:t=>{console.log(t);const s=tt.find((t=>t.url===this.nextUrl));s&&(s.data.items.forEach((t=>{this.comments.push(new pt(t))})),this.totalCount=s.data._meta.totalCount,this.nextUrl=s.data._links.next?s.data._links.next.href:null)}})},toggleNewComment(){this.newComment=!this.newComment}},mounted(){this.nextUrl=`${V}/comments?filter%5Bpost_id%5D=${this.postId}&sort=-id&page=1&per-page=2`,this.getComments()}},mt=dt,ut=(0,r.Z)(mt,ct,lt,!1,null,"be748736",null),_t=ut.exports,ht=function(){var t=this,s=t._self._c;return s("div",{staticClass:"RelatedPosts"},[s("div",{staticClass:"RelatedPosts_title"},[t._v(" Похожие посты ")]),s("div",{staticClass:"posts"},t._l(t.posts,(function(t){return s("base-post",{key:t.post.id,attrs:{post:t}})})),1)])},ft=[],gt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"BasePost",style:{"background-image":`url(${t.post.post.photo_cover})`}},[s("div",{staticClass:"BasePost_author"},[s("div",{staticClass:"BasePost_author-avatar"},[s("img",{staticClass:"BasePost_author-avatar--image",attrs:{src:t.post.user.photo_avatar}})]),s("div",{staticClass:"BasePost_author-info"},[s("div",{staticClass:"BasePost_author-info--fullname"},[t._v(" "+t._s(`${t.post.user.first_name} ${t.post.user.last_name}`)+" ")]),s("div",{staticClass:"BasePost_author-info--posttype"},[t._v(" Блог ")])])]),s("div",{staticClass:"BasePost_timebefore"},[t._v(" "+t._s(t.postTime)+" ")]),s("div",{staticClass:"BasePost_title"},[t._v(" "+t._s(t.post.post.title)+" ")]),s("div",{staticClass:"BasePost_footer"},[s("div",{staticClass:"BasePost_footer-users"},t._l(t.users,(function(i,a){return s("div",{key:`user-${a}`,staticClass:"user"},[s("div",{staticClass:"user_avatar"},[s("img",{staticClass:"user_avatar-image",attrs:{src:i.photo_avatar}})]),1===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(8091)}}):t._e(),2===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(6849)}}):t._e(),3===i.action_type?s("img",{staticClass:"user_action",attrs:{src:e(3967)}}):t._e()])})),0),s("div",{staticClass:"BasePost_footer-indicators"},[s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(9213)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])]),s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(7921)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])]),s("div",{staticClass:"indicator"},[s("img",{staticClass:"indicator_icon",attrs:{src:e(9297)}}),s("div",{staticClass:"indicator_value"},[t._v(" 256к ")])])])])])},vt=[],Ct={name:"BasePost",props:{post:{type:Object,default:null}},data:()=>({users:et}),computed:{postTime(){return W(this.post.post.date_create)}}},bt=Ct,yt=(0,r.Z)(bt,gt,vt,!1,null,"02ce1006",null),xt=yt.exports,wt={name:"RelatedPosts",components:{BasePost:xt},data:()=>({posts:st})},St=wt,kt=(0,r.Z)(St,ht,ft,!1,null,"d62adb18",null),Pt=kt.exports,$t={name:"MainPage",components:{SideBar:R,PostPage:nt,CommentsView:_t,RelatedPosts:Pt},computed:{postId(){return 3}}},It=$t,Bt=(0,r.Z)(It,D,M,!1,null,"ef483d0a",null),Dt=Bt.exports;i.ZP.use(d.Z);const Mt=[{path:"/",component:B,children:[{path:"",name:"mainpage",component:Dt}]},{path:"*",redirect:{name:"mainpage"}}],Zt=new d.Z({mode:"history",base:"/",routes:Mt});var Tt=Zt,Ot=e(3822);i.ZP.use(Ot.ZP);var Ut=new Ot.ZP.Store({state:{isSignedIn:H()},actions:{logOut({commit:t}){t("setIsSignedIn",!1),z()}},mutations:{setIsSignedIn(t,s){t.isSignedIn=s}},getters:{getIsSignedIn(t){return t.isSignedIn}},modules:{}});i.ZP.config.productionTip=!1,new i.ZP({router:Tt,store:Ut,render:t=>t(l)}).$mount("#app")},998:function(t,s,e){t.exports=e.p+"img/bookmark_icon.33b2536e.svg"},4453:function(t,s,e){t.exports=e.p+"img/cards_icon.7e239606.svg"},5608:function(t,s,e){t.exports=e.p+"img/close_icon.0353ddb3.svg"},4294:function(t,s,e){t.exports=e.p+"img/discussion_icon.3688079f.svg"},5698:function(t,s,e){t.exports=e.p+"img/feed_icon.9b3e77bb.svg"},9574:function(t,s,e){t.exports=e.p+"img/logo.48b54b53.svg"},3818:function(t,s,e){t.exports=e.p+"img/notification_icon.2bdbbd36.svg"},5178:function(t,s,e){t.exports=e.p+"img/plus_icon.6b4f67b9.svg"},6018:function(t,s,e){t.exports=e.p+"img/post_icon.e02c56b4.svg"},6849:function(t,s,e){t.exports=e.p+"img/icon_comment_action.0eff9178.svg"},7921:function(t,s,e){t.exports=e.p+"img/icon_comment_normal.36a61801.svg"},8091:function(t,s,e){t.exports=e.p+"img/icon_like_action.22be89f9.svg"},9213:function(t,s,e){t.exports=e.p+"img/icon_like_normal.5957a0c4.svg"},3967:function(t,s,e){t.exports=e.p+"img/icon_share_action.bda6a3e4.svg"},9297:function(t,s,e){t.exports=e.p+"img/icon_share_normal.8faa3201.svg"},310:function(t,s,e){t.exports=e.p+"img/search_icon.ee4caedb.svg"},5092:function(t,s,e){t.exports=e.p+"img/trends_icon.0680b4bb.svg"}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var o=s[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(s,i,a,o){if(!i){var r=1/0;for(p=0;p<t.length;p++){i=t[p][0],a=t[p][1],o=t[p][2];for(var n=!0,c=0;c<i.length;c++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(n=!1,o<r&&(r=o));if(n){t.splice(p--,1);var l=a();void 0!==l&&(s=l)}}return s}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[i,a,o]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var a,o,r=i[0],n=i[1],c=i[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(a in n)e.o(n,a)&&(e.m[a]=n[a]);if(c)var p=c(e)}for(s&&s(i);l<r.length;l++)o=r[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},i=self["webpackChunktargemy_task"]=self["webpackChunktargemy_task"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(652)}));i=e.O(i)})();
//# sourceMappingURL=app.52e8d2c2.js.map