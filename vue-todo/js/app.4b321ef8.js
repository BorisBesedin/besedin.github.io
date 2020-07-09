(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-todo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"1d4e":function(t,e,o){"use strict";var n=o("5f62"),i=o.n(n);i.a},"35bc":function(t,e,o){},"3f2d":function(t,e,o){},"43c3":function(t,e,o){},"4a2b":function(t,e,o){"use strict";var n=o("43c3"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("Notes app")]),o("router-view",{staticClass:"wrapper"})],1)},s=[],a={data:function(){return{noteList:[]}}},r=a,c=(o("034f"),o("2877")),l=Object(c["a"])(r,i,s,!1,null,null,null),u=l.exports,d=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"notes-header"},[o("h2",[t._v("Add note")]),o("AddNote",{on:{"new-note":t.addNote}})],1),o("div",{staticClass:"list"},t._l(t.todoList,(function(e){return o("Note",{key:e.id,attrs:{todo:e},on:{"open-popup":function(e){t.showModal=!0,t.currentIndex=e}}})})),1),o("Confirm",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"confirm",attrs:{action:t.removeNote,id:t.currentIndex},on:{close:function(e){t.showModal=!1}}})],1)},f=[],m=(o("4de4"),o("4160"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup"},[o("p",{staticClass:"text"},[t._v("Are you sure?")]),o("div",{staticClass:"buttons"},[o("button",{staticClass:"button yes-btn",attrs:{type:"button"},on:{click:function(e){t.action(t.id),t.$emit("close")}}},[t._v("Yes")]),o("button",{staticClass:"button no-btn",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("No")])])])}),v=[],h={props:["id","action"]},b=h,_=(o("7773"),Object(c["a"])(b,m,v,!1,null,"4e5aff41",null)),w=_.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("h3",{staticClass:"item-title"},[t._v(t._s(t.todo.title))]),o("button",{staticClass:"close",on:{click:function(e){return t.$emit("open-popup",t.todo.id)}}},[t._v("✖")]),o("ul",t._l(t.todo.todos.slice(0,4),(function(e){return o("li",{key:e.id,attrs:{todo:e}},[o("span",[t._v(t._s(e.id)+":")]),o("span",{staticClass:"todo-name",class:{done:e.complited}},[t._v(t._s(e.title))])])})),0),o("router-link",{staticClass:"button",attrs:{to:{name:"todos",params:{id:t.todo.id,title:t.todo.title}}}},[t._v("Edit")])],1)},y=[],x={props:{todo:{type:Object,required:!0}}},g=x,I=(o("1d4e"),Object(c["a"])(g,C,y,!1,null,"2ad62b72",null)),O=I.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-input",attrs:{type:"text",maxlength:"18",placeholder:"Name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Add")])])},j=[],S={data:function(){return{title:""}},methods:{onSubmit:function(){if(""!==this.title){var t={id:0,title:this.title,todos:[]};this.$emit("new-note",t),this.title=""}}}},L=S,$=(o("8161"),Object(c["a"])(L,N,j,!1,null,"0bf0fd3e",null)),k=$.exports,M={props:["todos","id","complited"],data:function(){return{todoList:[{id:1,title:"new note",todos:[]}],showModal:!1,currentIndex:0}},components:{Note:O,AddNote:k,Confirm:w},mounted:function(){localStorage.notes&&(this.todoList=JSON.parse(localStorage.notes)),this.todos&&(this.todoList[this.id-1].todos=this.todos),this.setId()},watch:{todoList:function(){localStorage.setItem("notes",JSON.stringify(this.todoList))}},methods:{addNote:function(t){this.todoList.push(t),this.setId()},setId:function(){this.todoList.forEach((function(t,e){t.id=e+1}))},removeNote:function(t){this.todoList=this.todoList.filter((function(e){return e.id!==t})),this.setId()}}},E=M,A=(o("ce87"),Object(c["a"])(E,p,f,!1,null,"75c0a128",null)),P=A.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("h2",{staticClass:"todos-title"},[t._v(t._s(this.title))]),o("AddItem",{on:{"new-item":t.addItem}}),o("TodoList",{attrs:{todos:t.todos},on:{"remove-item":t.removeItem}}),o("div",{staticClass:"buttons-container"},[o("router-link",{staticClass:"button",attrs:{type:"button",to:{name:"home",params:{todos:this.todos,id:this.id,complited:this.complited}}}},[t._v("Save")]),o("router-link",{staticClass:"button",attrs:{type:"button",to:{name:"home"}}},[t._v("Cancel")])],1)],1)},J=[],q=(o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",t._l(t.todos,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{"remove-item":t.removeItem,"open-popup":function(e){t.showModal=!0,t.currentIndex=e}}})})),1),o("Confirm",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"confirm",attrs:{action:t.removeItem,id:t.currentIndex},on:{close:function(e){t.showModal=!1}}})],1)}),D=[],Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("div",{staticClass:"name-container"},[o("span",[t._v(t._s(t.todo.id)+":")]),o("div",{staticClass:"todo-title"},[o("span",{staticClass:"todo-name",class:{done:t.todo.complited},on:{click:t.editName}},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],staticClass:"edit-input hide",attrs:{type:"text",maxlength:"25"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}})])]),o("div",{staticClass:"buttons-container"},[o("button",{staticClass:"complite-btn",on:{click:function(e){t.todo.complited=!t.todo.complited}}},[t._v("✔")]),o("button",{staticClass:"close",on:{click:function(e){return t.$emit("open-popup",t.todo.id)}}},[t._v("✖")])])])},z=[],B={props:{todo:{type:Object,required:!0}},methods:{editName:function(){var t=document.querySelectorAll(".edit-input")[this.todo.id-1],e=document.querySelectorAll(".todo-name")[this.todo.id-1];e.classList.contains("done")||(e.classList.add("hide"),t.classList.remove("hide"),t.focus(),t.addEventListener("blur",(function(){e.classList.remove("hide"),t.classList.add("hide")})))}}},F=B,G=(o("5d6b"),Object(c["a"])(F,Y,z,!1,null,"1cd564f4",null)),H=G.exports,K={props:["todos"],data:function(){return{currentIndex:0,showModal:!1}},components:{TodoItem:H,Confirm:w},methods:{removeItem:function(t){this.$emit("remove-item",t)}}},Q=K,R=(o("7e40"),Object(c["a"])(Q,q,D,!1,null,"435432ac",null)),U=R.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-input",attrs:{type:"text",maxlength:"20"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{staticClass:"add",attrs:{type:"submit"}},[t._v("➤")])])},W=[],X={data:function(){return{title:""}},methods:{onSubmit:function(){if(""!==this.title){var t={id:"",title:this.title,complited:!1};this.$emit("new-item",t),this.title=""}}}},Z=X,tt=(o("8996"),Object(c["a"])(Z,V,W,!1,null,"4e87136e",null)),et=tt.exports,ot={name:"App",props:["id","title","complited"],data:function(){return{todos:[]}},mounted:function(){if(localStorage.getItem("notes")){var t=JSON.parse(localStorage.getItem("notes"));this.todos=t[this.id-1].todos}},components:{TodoList:U,AddItem:et},methods:{removeItem:function(t){this.todos.splice(t-1,1),this.setId()},setId:function(){this.todos.forEach((function(t,e){t.id=e+1}))},addItem:function(t){this.todos.push(t),t.id=this.todos.length}}},nt=ot,it=(o("4a2b"),Object(c["a"])(nt,T,J,!1,null,null,null)),st=it.exports;n["a"].use(d["a"]);var at=new d["a"]({routes:[{path:"/",name:"home",component:P,props:!0},{path:"/todos/:id",name:"todos",component:st,props:!0}]});n["a"].config.productionTip=!1,new n["a"]({router:at,render:function(t){return t(u)}}).$mount("#app")},"5d6b":function(t,e,o){"use strict";var n=o("35bc"),i=o.n(n);i.a},"5f62":function(t,e,o){},7773:function(t,e,o){"use strict";var n=o("3f2d"),i=o.n(n);i.a},"7e40":function(t,e,o){"use strict";var n=o("ea5f"),i=o.n(n);i.a},8161:function(t,e,o){"use strict";var n=o("8e6e"),i=o.n(n);i.a},"85ec":function(t,e,o){},8996:function(t,e,o){"use strict";var n=o("8ef7"),i=o.n(n);i.a},"8e6e":function(t,e,o){},"8ef7":function(t,e,o){},ce87:function(t,e,o){"use strict";var n=o("d980"),i=o.n(n);i.a},d980:function(t,e,o){},ea5f:function(t,e,o){}});
//# sourceMappingURL=app.4b321ef8.js.map