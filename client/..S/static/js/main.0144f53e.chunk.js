(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(t,e,n){t.exports=n(40)},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(14),c=n.n(u),s=n(2),i=n.n(s),o=n(3),l=n(4),p=function(t){var e=t.submit,n=t.inputValue,a=t.inputChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"add new task",value:n,onChange:a}),r.a.createElement("button",{type:"submit"},"add"))))},f=n(21),m={getAll:function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/api/tasks").data;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),create:function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("/api/tasks",e).data;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),remove:function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.delete("".concat("/api/tasks","/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),update:function(){var t=Object(o.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.put("".concat("/api/tasks","/").concat(e),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(t){var e=t.task;return r.a.createElement("div",null,r.a.createElement("li",null,e))},d=function(t){var e=t.taskList;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(t,e){return r.a.createElement(v,{key:e,task:t})}))))},b=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],u=e[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],v=s[1];Object(a.useEffect)(Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u(m.getAll());case 1:case"end":return t.stop()}}),t)}))),[]);return r.a.createElement("div",null,r.a.createElement(p,{submit:function(t){t.preventDefault(),u(n.concat(f)),v("")},inputValue:f,inputChange:function(t){v(t.target.value)}}),r.a.createElement(d,{taskList:n}))};n(39);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0144f53e.chunk.js.map