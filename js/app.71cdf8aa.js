(function(t){function i(i){for(var e,r,o=i[0],l=i[1],c=i[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);d&&d(i);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,i=0;i<n.length;i++){for(var s=n[i],e=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(e=!1)}e&&(n.splice(i--,1),t=r(r.s=s[0]))}return t}var e={},a={app:0},n=[];function r(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,i,s){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)r.d(s,e,function(i){return t[i]}.bind(null,e));return s},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=i,o=o.slice();for(var c=0;c<o.length;c++)i(o[c]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";var e=s("64a9"),a=s.n(e);a.a},2044:function(t,i,s){},"56d7":function(t,i,s){"use strict";s.r(i);s("cadf"),s("551c"),s("f751"),s("097d");var e,a=s("2b0e"),n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("Navigation"),s("div",{attrs:{id:"content"}},[s("router-view")],1)],1)},r=[],o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"nav-wrap"}},[s("div",{staticClass:"collections-dropdown"},[s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step nav-link",attrs:{to:{name:"collections",params:{id:"0"}}}},[t._v("Ipseity")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step nav-link",attrs:{to:{name:"collections",params:{id:"1"}}}},[t._v("Jet Runner")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step nav-link",attrs:{to:{name:"collections",params:{id:"2"}}}},[t._v("Curating A Disaster I")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step nav-link",attrs:{to:{name:"collections",params:{id:"3"}}}},[t._v("Curating A Disaster II")]),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step",attrs:{id:"backToMain",to:"/"}},[t._v("CHRISTOPH RITTER STUDIO")]),s("div",{staticClass:"step"})],1),s("div",{staticClass:"center"},[s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("router-link",{staticClass:"nav-link step",attrs:{to:"/about"}},[t._v("About")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step nav-link",attrs:{to:{name:"collections",params:{id:"0"}},id:"collections-dropdown"}},[t._v("Collections")]),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"},[t._v("S/S")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"step",attrs:{id:"logo",to:"/"}},[t._v("CHRISTOPH RITTER STUDIO")]),s("div",{staticClass:"step"}),s("div",{staticClass:"step"},[t._v("2120")]),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("router-link",{staticClass:"nav-link step",attrs:{to:"/collaborations"}},[t._v("Collaborations")]),s("div",{staticClass:"step"}),s("router-link",{staticClass:"nav-link step",attrs:{to:"/press"}},[t._v("Press")]),s("div",{staticClass:"step"}),s("div",{staticClass:"step"})],1),t._m(0)])},l=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"collaborations-dropdown"},[s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"}),s("div",{staticClass:"step"})])}],c={name:"Navigation",mounted:function(){this.setStepHeight()},methods:{toMainNav:function(){$("#nav-wrap").css("top","50%")},setStepHeight:function(){var t=$(window).height()/19;$(".step").css("height",t)}},watch:{}},d=c,u=(s("9028"),s("2877")),p=Object(u["a"])(d,o,l,!1,null,null,null),v=p.exports,g={components:{Navigation:v}},h=g,f=(s("034f"),Object(u["a"])(h,n,r,!1,null,null,null)),m=f.exports,C=s("bd86"),b=s("8c4f"),w=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("h1",[t._v("HOME")])])}],_={methods:{setColors:function(t){console.log("setting colors"),console.log("color: "+t),$("#nav-wrap *").css("border-color",t),$("#nav-wrap *").css("color",t),$("#slideshow h1").css("color",t)}}},j={mixins:[_],mounted:function(){$("#nav-wrap").css("top","50%"),this.setColors("black")}},I=j,k=Object(u["a"])(I,w,y,!1,null,null,null),x=k.exports,O=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("h1",[t._v("ABOUT")])])}],A={mixins:[_],mounted:function(){$("#nav-wrap").css("top","50%"),this.setColors("black")}},D=A,T=Object(u["a"])(D,O,S,!1,null,null,null),R=T.exports,E=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("h1",[t._v("Press")])])}],M={mixins:[_],mounted:function(){$("#nav-wrap").css("top","50%"),this.setColors("black")}},J=M,H=Object(u["a"])(J,E,P,!1,null,null,null),L=H.exports,N=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"bg",attrs:{bg:t.collections[this.id].bg}}),s("CollectionText",{attrs:{collection:this.id}}),s("div",{staticClass:"collection-img",attrs:{src:t.collections[this.id].frontImage.url},on:{click:t.openSlideshow}})],1)},U=[],q=s("5cd7"),z=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"text"},[s("h1",[t._v(t._s(t.collections[this.collection].title))]),s("p",{domProps:{innerHTML:t._s(t.collections[this.collection].description)}}),s("p",{staticClass:"small",domProps:{innerHTML:t._s(t.collections[this.collection].small)}}),s("router-link",{staticClass:"to-detail-btn",attrs:{to:{name:"collection-detail",params:{id:this.collection}}}},[t._v("VIEW")])],1)},G=[],V={props:["collection"],data:function(){return{collections:q}}},B=V,Q=(s("e70b"),Object(u["a"])(B,z,G,!1,null,null,null)),W=Q.exports,F={data:function(){return{collections:q,id:this.$route.params.id}},mixins:[_],components:{CollectionText:W},mounted:function(){this.init(),this.setColors(this.collections[this.id].overviewColor)},methods:{init:function(){this.slideshow=!1,$("#nav-wrap").css("top","158%"),$(document).ready((function(){$(".bg").css("background-image","url("+$(".bg").attr("bg")+")"),$(".collection-img").css("background-image","url("+$(".collection-img").attr("src")+")"),$(".bg").css("opacity","1"),$(".text").addClass("text-enter"),$(".collection-img").css("opacity","1"),$(".collection-img").css("right","0")}))},leave:function(){$(".bg").css("opacity","0"),$(".text").addClass("text-leave"),$(".text").removeClass("text-enter"),$(".collection-img").css("opacity","0"),$(".collection-img").css("right","-50%")},openSlideshow:function(){this.$router.push({name:"collection-detail",params:{id:this.id}})}},watch:{$route:function(t,i){this.id=this.$route.params.id,this.init()}},beforeRouteUpdate:function(t,i,s){this.leave(),setTimeout((function(){s()}),300)},beforeRouteLeave:function(t,i,s){this.leave(),setTimeout((function(){s()}),300)}},K=F,X=(s("9ba7"),Object(u["a"])(K,N,U,!1,null,"5046717a",null)),Y=X.exports,Z=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("h1",[t._v("Collaborations")])])}],it={mixins:[_],mounted:function(){$("#nav-wrap").css("top","50%"),this.setColors("black")}},st=it,et=Object(u["a"])(st,Z,tt,!1,null,null,null),at=et.exports,nt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container",attrs:{id:"slideshow"}},[s("div",{staticClass:"slides-wrapper"},t._l(t.collections[this.id].slides,(function(i){return s("div",{staticClass:"slide",attrs:{id:i.id}},t._l(i.images,(function(t){return s("div",{staticClass:"slide-img",class:t.orientation,attrs:{src:t.url}})})),0)})),0),s("div",{staticClass:"slides-overlay"},[s("div",{staticClass:"overlay-bottom"},[s("img",{staticClass:"slide-control arrow-left",attrs:{src:"/svg/arrow-left.svg",alt:""},on:{click:t.prevSlide}}),s("h1",{attrs:{id:"count"}},[t._v(t._s(t.currentCount))]),s("img",{staticClass:"slide-control arrow-right",attrs:{src:"/svg/arrow-right.svg",alt:""},on:{click:t.nextSlide}})]),s("div",{staticClass:"overlay-top"},[s("router-link",{attrs:{to:{name:"collections",params:{id:this.id}}}},[s("img",{staticClass:"close-btn",attrs:{src:"/svg/close-btn.svg",alt:""}})]),s("h1",[t._v(t._s(t.collections[this.id].title))])],1)])])},rt=[],ot={data:function(){return{id:this.$route.params.id,collections:q,currentCount:1}},mixins:[_],mounted:function(){$(".slide-img").animate({opacity:1},300),$("#nav-wrap").css("top","158%"),this.setIcons(this.collections[this.id].slideshowColor);var t=100*$(".slide").length;$(".slides-wrapper").css("width",t+"%"),$(".slide:first-child").addClass("active-slide"),this.setColors(this.collections[this.id].slideshowColor),this.setImages()},methods:{setImages:function(){$(".slide-img").each((function(t){var i=$(this).attr("src");$(this).css("background-image","url("+i+")")}))},nextSlide:function(){var t="";$(".slide").each((function(i){$(this).hasClass("active-slide")&&(t=i,$(this).removeClass("active-slide"))}));var i=t+1,s=$(".slide").length;i==s&&(i=0);var e="0%";this.animateCounter(i+1),this.animateSlide(t,i,e)},prevSlide:function(){var t="";$(".slide").each((function(i){$(this).hasClass("active-slide")&&(t=i,$(this).removeClass("active-slide"))}));var i=t-1,s=$(".slide").length;i<0&&(i=s-1);var e="0%";this.animateCounter(i+1),this.animateSlide(t,i,e)},animateSlide:function(t,i,s){$("#slide-"+t);var e=$("#slide-"+i),a=$(".slide").length;e.addClass("active-slide"),$(".slide").each((function(t){var s=100/a*i;$(this).animate({left:"-"+s+"%"},1e3)}))},animateCounter:function(t){var i=this;$("#count").animate({opacity:0},(function(){i.currentCount=t,console.log(i.currentCounter),$("#count").animate({opacity:1})}))},setIcons:function(t){$(".arrow-left").attr("src","/svg/arrow-left-"+t+".svg"),$(".arrow-right").attr("src","/svg/arrow-right-"+t+".svg"),$(".close-btn").attr("src","/svg/close-btn-"+t+".svg")},leave:function(){$(".slide-img").animate({opacity:0},300)}},beforeRouteUpdate:function(t,i,s){this.leave(),setTimeout((function(){s()}),300)},beforeRouteLeave:function(t,i,s){this.leave(),setTimeout((function(){s()}),300)}},lt=ot,ct=(s("7fc2"),Object(u["a"])(lt,nt,rt,!1,null,"65dda096",null)),dt=ct.exports;a["a"].use(b["a"]);var ut=new b["a"]((e={mode:"history",base:"/",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:R},{path:"/press",name:"press",component:L},{path:"/collections/:id",name:"collections",component:Y},{path:"/collections/:id/detail",name:"collection-detail",component:dt},{path:"/collaborations",name:"collaborations",component:at}]},Object(C["a"])(e,"mode","history"),Object(C["a"])(e,"linkActiveClass","active"),e)),pt=s("2f62");a["a"].use(pt["a"]);var vt=new pt["a"].Store({state:{},mutations:{},actions:{}});window.$=s("1157"),window.JQuery=s("1157"),a["a"].config.productionTip=!1,new a["a"]({router:ut,store:vt,render:function(t){return t(m)}}).$mount("#app")},"5cd7":function(t){t.exports=JSON.parse('[{"title":"Ipseity","description":"Ipseity is individuality.<br/><br/>The selfhood of a person must be seen independently from <br/>reconceived ideas of normality and the status quo of social <br/>conventions. Clothes must be seen as a communicator of one’s<br/> identity not one’s gender.<br/><br/>Ipseity is a series of photos taken of a series of standard<br/> garments, designed to be transformed and adopted to one’s</br> character.","small":"Photography: LALO + EVA <br/>Make-up and Hair: Sanne Schoofs <br/>Styling: Linus Leonardsson, Christoph Ritter <br/>Models: Ornella (Dominique Models Agency), Guerrino <br/>(HakimModelManagement)","bg":"/collections/ipseity/bg.jpg","slideshowColor":"white","overviewColor":"black","frontImage":{"alt":"Christoph Ritter Studio - Ipseity","url":"/collections/ipseity/ipseity-1.jpg"},"slides":[{"id":"slide-0","images":[{"id":"1","alt":"Ipseity - 1","url":"/collections/ipseity/ipseity-1.jpg","orientation":"portrait"},{"id":"2","alt":"Ipseity - 2","url":"/collections/ipseity/ipseity-2.jpg","orientation":"portrait"},{"id":"3","alt":"Ipseity - 3","url":"/collections/ipseity/ipseity-3.jpg","orientation":"portrait"}]},{"id":"slide-1","images":[{"id":"4","alt":"Ipseity - 4","url":"/collections/ipseity/ipseity-4.jpg","orientation":"landscape"}]},{"id":"slide-2","images":[{"id":"5","alt":"Ipseity - 5","url":"/collections/ipseity/ipseity-5.jpg","orientation":"landscape"}]}]},{"title":"Jet Runner","description":"In collaboration with MazzantiPiume this serious of objects inspired by body armour and ballet dancers has been created in order to showcast the broader futuristic and avantgarde appeal of feathers within the fashion industry.","slideshowColor":"black","overviewColor":"black","frontImage":{"alt":"Christoph Ritter Studio - Jet Runner","url":"/collections/jetrunner/jetrunner-1.jpg"},"slides":[{"id":"slide-0","images":[{"id":"1","alt":"Jet Runner - 1","url":"/collections/jetrunner/jetrunner-2.jpg","orientation":"landscape"}]},{"id":"slide-1","images":[{"id":"2","alt":"Jet Runner - 2","url":"/collections/jetrunner/jetrunner-3.jpg","orientation":"portrait"},{"id":"2","alt":"Jet Runner - 2","url":"/collections/jetrunner/jetrunner-4.jpg","orientation":"portrait"},{"id":"2","alt":"Jet Runner - 2","url":"/collections/jetrunner/jetrunner-5.jpg","orientation":"portrait"}]},{"id":"slide-2","images":[{"id":"5","alt":"Jet Runner - 5","url":"/collections/jetrunner/jetrunner-6.JPG","orientation":"landscape"}]}]},{"title":"Curating A Disaster I","description":"Curating A Disaster deals with depression, emptiness and rejection. It\'s an antidote to the glamourification of beauty and sense within fashion. It is a two-part collection split into menswear and womenswear.","overviewColor":"black","slideshowColor":"black","frontImage":{"alt":"Christoph Ritter Studio - Curating A Disaster I","url":"/collections/curatingadisaster1/curatingadisaster1-1.jpg"},"slides":[{"id":"slide-0","images":[{"id":"1","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-4.jpg","orientation":"portrait"},{"id":"2","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-5.jpg","orientation":"portrait"},{"id":"3","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-6.jpg","orientation":"portrait"}]},{"id":"slide-1","images":[{"id":"4","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-8.jpg","orientation":"landscape"}]},{"id":"slide-2","images":[{"id":"5","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-9.jpg","orientation":"portrait"},{"id":"6","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-11.jpg","orientation":"portrait"},{"id":"7","alt":"Curating A Disaster","url":"/collections/curatingadisaster1/curatingadisaster1-12.jpg","orientation":"portrait"}]}]},{"title":"Curating A Disaster II","description":"Dealing with rejection CAD explores the role that clothing has for the wearer whilst coping with depression and frustration. This womenswear part of the two-part collection embodies the leap of faith self expression through clothes can have. Taking inpiration from the robe battante and corset lacing it explores the transformation of gender assigned shapes and patterns through de- and reconstruction.","overviewColor":"black","slideshowColor":"black","frontImage":{"alt":"Christoph Ritter Studio - Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-1.jpg"},"slides":[{"id":"slide-0","images":[{"id":"1","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-2.jpg","orientation":"landscape"}]},{"id":"slide-1","images":[{"id":"4","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-3.jpg","orientation":"portrait"},{"id":"5","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-4.jpg","orientation":"portrait"},{"id":"6","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-5.jpg","orientation":"portrait"}]},{"id":"slide-2","images":[{"id":"7","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-6.jpg","orientation":"portrait"},{"id":"8","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-7.jpg","orientation":"portrait"},{"id":"9","alt":"Curating A Disaster II","url":"/collections/curatingadisaster2/curatingadisaster2-8.jpg","orientation":"portrait"}]}]}]')},"64a9":function(t,i,s){},"7fc2":function(t,i,s){"use strict";var e=s("95d9"),a=s.n(e);a.a},9028:function(t,i,s){"use strict";var e=s("2044"),a=s.n(e);a.a},"95d9":function(t,i,s){},"9ba7":function(t,i,s){"use strict";var e=s("bbdb"),a=s.n(e);a.a},a2ab:function(t,i,s){},bbdb:function(t,i,s){},e70b:function(t,i,s){"use strict";var e=s("a2ab"),a=s.n(e);a.a}});
//# sourceMappingURL=app.71cdf8aa.js.map