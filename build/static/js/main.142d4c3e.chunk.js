(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(20),a=n.n(r),o=(n(25),n(11)),i=n(9),u=n(3),s=(n(26),n(0)),l=function(e){var t=e.person;return Object(s.jsxs)("p",{children:[" ",t.name," ",t.number]})},j=function(e){var t=e.handleFilter,n=e.handleOnChangeFilter,c=e.filterby,r=e.filtered;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:t,children:["filter shown with:"," ",Object(s.jsx)("input",{type:"text",onChange:n,value:c})]}),c.length<=0?" ":r.map((function(e){return Object(s.jsx)(l,{person:e},e.title)}))]})},b=n(4),d=n.n(b),h="api/persons",f=function(e){var t=e.person,n=e.setUpdateList;return Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:t.name})," ",t.number," ",Object(s.jsx)("button",{onClick:function(){if(window.confirm("Delete ".concat(t.name,"?"))){var e=t.id,c=Object.values(t).filter((function(t){return t.id!==e}));console.log(c),function(e,t){return d.a.delete("".concat(h,"/").concat(e),t).then((function(e){return e.data}))}(e,c).then(n(!0))}},children:"Delete"})]})})},O=function(e){var t=e.person,n=e.setUpdateList;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)(f,{person:e,setUpdateList:n},e.name)}))})},p=function(e){var t=e.handleSubmit,n=e.handleOnChangeTitle,c=e.newTitle,r=e.handleOnChangeBody,a=e.newBody;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["Name:"," ",Object(s.jsx)("input",{type:"text",onChange:n,value:c})]}),Object(s.jsxs)("div",{children:["Number:"," ",Object(s.jsx)("input",{type:"text",onChange:r,value:a})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),l=Object(u.a)(a,2),b=l[0],f=l[1],m=Object(c.useState)(""),x=Object(u.a)(m,2),v=x[0],g=x[1],w=Object(c.useState)(""),y=Object(u.a)(w,2),C=y[0],S=y[1],k=Object(c.useState)([""]),L=Object(u.a)(k,2),D=L[0],F=L[1],N=Object(c.useState)(!1),B=Object(u.a)(N,2),U=B[0],E=B[1];Object(c.useEffect)((function(){d.a.get(h).then((function(e){return e.data})).catch((function(e){alert("Data not found")})).then((function(e){r(Object(i.a)(e))})).then(E(!1))}),[U]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{handleFilter:function(e){e.preventDefault();var t=n.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));0===t.length?(alert("Person not found"),F([])):F(Object(i.a)(t))},handleOnChangeFilter:function(e){S(e.target.value)},filterby:C,filtered:D}),Object(s.jsx)("h3",{children:" add a new"}),Object(s.jsx)(p,{handleSubmit:function(e){e.preventDefault();var t,c,a={name:b,number:v};if(""===b||""===v)alert("Fields can't be empty");else if(n.some((function(e){return e.name===b}))){var u=n.find((function(e){return e.name===b}));if(console.log(u),window.confirm("".concat(u.name," is already added to phonebook, replace the old number with a new one?"))){var s=Object(o.a)(Object(o.a)({},u),{},{number:a.number});console.log(s),(t=u.id,c=s,d.a.put("".concat(h,"/").concat(t),c).then((function(e){return e.data}))).then(E(!0))}}else r([].concat(Object(i.a)(n),[a])),console.log(a),function(e){d.a.post(h,e).then((function(e){return e.data}))}(a);Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""}))},handleOnChangeTitle:function(e){f(e.target.value)},handleOnChangeBody:function(e){g(e.target.value)},newName:b,newNumber:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(O,{person:n,setUpdateList:E})]})};a.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.142d4c3e.chunk.js.map