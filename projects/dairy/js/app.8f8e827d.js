(function(t){function e(e){for(var o,i,a=e[0],c=e[1],u=e[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/projects/dairy/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},"04f1":function(t,e,s){"use strict";var o=s("36d6"),n=s.n(o);n.a},1682:function(t,e,s){"use strict";var o=s("a77e"),n=s.n(o);n.a},"36d6":function(t,e,s){},"42a3":function(t,e,s){"use strict";var o=s("800e"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=s("2f62"),r=(s("4de4"),s("4160"),s("159b"),{actions:{getPosts:function(t){if(localStorage.posts){var e=JSON.parse(localStorage.posts);t.commit("updatePosts",e)}}},mutations:{updatePosts:function(t,e){t.posts=e},createPost:function(t,e){t.posts.unshift(e)},deletePost:function(t,e){t.posts=t.posts.filter((function(t){return t.number!==e}))},updatePostId:function(t){t.posts.forEach((function(e,s){e.id=s+1,e.number=t.posts.length-s}))},showCurrentPost:function(t,e){t.currentPost=e}},state:{posts:[],currentPost:1},getters:{AllPosts:function(t){return t.posts},currentPost:function(t){return t.currentPost}}});o["a"].use(n["a"]);var i=new n["a"].Store({modules:{post:r}}),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("h1",[t._v("Diary")]),s("button",{staticClass:"add-post button",on:{click:t.openPopup}},[t._v("create post")])]),s("span",{staticClass:"count"},[t._v("total posts: "+t._s(t.AllPosts.length))]),s("PostList",{attrs:{posts:t.AllPosts,current:t.currentPost}}),s("PostForm",{staticClass:"form",class:{showed:t.popupOpened},on:{"close-popup":t.closePopup}})],1),t.popupOpened?s("div",{staticClass:"overlay"}):t._e()])},c=[],u=(s("96cf"),s("1da1")),l=s("5530"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-popup")}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{type:"text",placeholder:"your text",rows:"10",required:""},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),s("button",{staticClass:"submit button",attrs:{type:"submit"}},[t._v("create post")])])},f=[],d=(s("ac1f"),s("1276"),{props:["num"],data:function(){return{title:"",body:""}},methods:Object(l["a"])(Object(l["a"])({},Object(n["d"])(["createPost","updatePostId","showCurrentPost"])),{},{submit:function(){this.createPost({id:1,number:1,title:this.title,body:this.body,date:(new Date).toDateString(),time:(new Date).toTimeString().split(" ")[0]}),this.title="",this.body="",this.updatePostId(),this.showCurrentPost(1),this.$emit("close-popup")}})}),m=d,b=(s("b897"),s("2877")),h=Object(b["a"])(m,p,f,!1,null,"1e1d135b",null),v=h.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("ul",{staticClass:"posts"},t._l(t.posts,(function(e){return s("Post",{key:e.id,staticClass:"item",class:{showed:e.id===t.current},attrs:{post:e}})})),1),s("AllPosts",{attrs:{posts:t.posts}})],1)},_=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"post-header"},[s("span",{staticClass:"number"},[t._v(" Post № "+t._s(t.post.number)+" ")]),s("span",{staticClass:"data"},[t._v(" "+t._s(t.post.data)+" ")]),s("button",{staticClass:"close post-close",on:{click:function(e){t.confirm=!0}}})]),s("div",{staticClass:"post-main"},[s("h2",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),s("p",{staticClass:"post-text"},[t._v(t._s(t.post.body))])]),t.confirm?s("Confirm",{on:{confirm:function(e){t.remove(t.post.number),t.confirm=!1},"no-confirm":function(e){t.confirm=!1}}}):t._e()],1)},y=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"confirm"},[s("div",{staticClass:"container"},[s("p",{staticClass:"text"},[t._v("Delete this post?")]),s("div",{staticClass:"buttons"},[s("button",{staticClass:"button-yes button",on:{click:function(e){return t.$emit("confirm")}}},[t._v("Yes")]),s("button",{staticClass:"button-no button",on:{click:function(e){return t.$emit("no-confirm")}}},[t._v("No")])])])])},w=[],g={},j=g,x=(s("1682"),Object(b["a"])(j,C,w,!1,null,"255ad012",null)),S=x.exports,k={data:function(){return{confirm:!1}},props:["post"],components:{Confirm:S},methods:Object(l["a"])(Object(l["a"])({},Object(n["d"])(["deletePost","updatePostId"])),{},{remove:function(t){this.deletePost(t),this.updatePostId()}})},A=k,$=(s("84e7"),Object(b["a"])(A,O,y,!1,null,"aaeef084",null)),E=$.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"all-posts"},[s("h2",[t._v("All posts")]),s("ul",{staticClass:"list"},t._l(t.posts,(function(e){return s("li",{key:e.id,on:{click:function(s){return t.showPost(e.id)}}},[s("div",{staticClass:"container"},[s("span",{staticClass:"id"},[t._v(" "+t._s(e.number)+": ")]),s("h3",{staticClass:"title"},[t._v(t._s(e.title))])]),s("span",{staticClass:"date"},[t._v(t._s(e.date)+", "+t._s(e.time)+" ")])])})),0),s("button",{staticClass:"show-btn",on:{click:t.showList}},[t._v("All posts")])])},I=[],L={props:["posts"],methods:Object(l["a"])(Object(l["a"])({},Object(n["d"])(["showCurrentPost"])),{},{showList:function(){document.querySelector(".all-posts").classList.toggle("list-showed")},showPost:function(t){this.showCurrentPost(t),this.showList()}})},N=L,J=(s("42a3"),Object(b["a"])(N,D,I,!1,null,"c57a7b1a",null)),M=J.exports,T={props:["posts","current"],data:function(){return{confirm:!1}},components:{Post:E,AllPosts:M},methods:{}},q=T,F=(s("04f1"),Object(b["a"])(q,P,_,!1,null,"31cf4a58",null)),R=F.exports,Y={name:"App",data:function(){return{popupOpened:!1}},computed:Object(n["c"])(["AllPosts","currentPost"]),methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["getPosts"])),{},{openPopup:function(){this.popupOpened||(this.popupOpened=!0)},closePopup:function(){this.popupOpened&&(this.popupOpened=!1)}}),components:{PostForm:v,PostList:R},mounted:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getPosts();case 1:case"end":return e.stop()}}),e)})))()},watch:{AllPosts:function(){localStorage.setItem("posts",JSON.stringify(this.AllPosts))}}},z=Y,B=(s("034f"),Object(b["a"])(z,a,c,!1,null,null,null)),G=B.exports;o["a"].config.productionTip=!1,new o["a"]({store:i,render:function(t){return t(G)}}).$mount("#app")},"800e":function(t,e,s){},"84e7":function(t,e,s){"use strict";var o=s("914a"),n=s.n(o);n.a},"85ec":function(t,e,s){},"914a":function(t,e,s){},a77e:function(t,e,s){},b14d:function(t,e,s){},b897:function(t,e,s){"use strict";var o=s("b14d"),n=s.n(o);n.a}});
//# sourceMappingURL=app.8f8e827d.js.map