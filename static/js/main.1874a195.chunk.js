(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(26),s=(c(36),c(37),c(9)),n=c(3),r=(c(38),c(10)),l=c.n(r),i=c(1),j=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(s.c,{to:"/people",className:e,children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)(n.b,{})]})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},u=c(8),b=c(5),h=c(0),x=c(24),O=c(27);function m(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var p=["children","params"],f=function(e){var t=e.children,c=e.params,a=Object(O.a)(e,p),n=Object(s.d)(),r=Object(b.a)(n,1)[0];return Object(i.jsx)(s.b,Object(x.a)(Object(x.a)({to:{search:m(r,c)}},a),{},{children:t}))},v=["16","17","18","19","20"],N=function(e){var t=e.setSearchWith,c=Object(s.d)(),a=Object(b.a)(c,1)[0],n=a.get("query")||"",r=a.get("sex")||null,j=a.getAll("century")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(f,{params:{sex:null},className:l()({"is-active":null===r}),children:"All"}),Object(i.jsx)(f,{params:{sex:null},className:l()({"is-active":"m"===r}),children:"Male"}),Object(i.jsx)(f,{params:{sex:null},className:l()({"is-active":"f"===r}),children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:n,onChange:function(e){return t({query:e.target.value||null})}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:v.map((function(e){return Object(i.jsx)(f,{"data-cy":"century",className:l()("button mr-1",{"is-info":j.includes(e)}),params:{centuries:j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(u.a)(j),[e])},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(f,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(f,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,sex:null,query:null},children:"Reset all filters"})})]})},g=function(e){var t=e.name,c=e.slug,a=e.sex;return Object(i.jsx)("a",{href:"#/people/".concat(c),className:l()({"has-text-danger":"f"===a}),children:t})},w=function(e){var t=e.people,c=Object(n.r)().slug,a=Object(s.d)(),r=Object(b.a)(a,1)[0],j=r.get("sort")||null,o=r.get("order")||null,d=function(e){return j&&j===e?j!==e||o?{sort:null,order:null}:{sort:e,order:"desc"}:{sort:e}};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(i.jsx)(f,{params:d("name"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"name"===j&&!o,"fa-sort-down":"name"===j&&o})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(i.jsx)(f,{params:d("sex"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"name"===j&&!o,"fa-sort-down":"name"===j&&o})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(i.jsx)(f,{params:d("born"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"name"===j&&!o,"fa-sort-down":"name"===j&&o})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(i.jsx)(f,{params:d("died"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"name"===j&&!o,"fa-sort-down":"name"===j&&o})})})})]})}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var a=e.name,n=e.sex,r=e.born,j=e.died,o=e.motherName,d=e.fatherName,u=e.slug,b=t.find((function(e){return e.name===o})),h=t.find((function(e){return e.name===d})),x=b?Object(i.jsx)(g,{name:o,sex:b.sex,slug:b.slug}):o,O=h?Object(i.jsx)(g,{name:d,sex:h.sex,slug:h.slug}):d;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":u===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(s.b,{to:"".concat(u),className:l()({"has-text-danger":"f"===n}),children:a})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:j}),Object(i.jsx)("td",{children:x||"-"}),Object(i.jsx)("td",{children:O||"-"})]},u)}))})]})},y=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),S=c(4),k=c(7),L="https://mate-academy.github.io/react_people-table/api/people.json";function A(e){return new Promise((function(t){return setTimeout(t,e)}))}function P(){return(P=Object(k.a)(Object(S.a)().mark((function e(){return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(500).then((function(){return fetch(L)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(h.useState)(!0),r=Object(b.a)(n,2),l=r[0],j=r[1],o=Object(h.useState)(!1),d=Object(b.a)(o,2),x=d[0],O=d[1],p=Object(s.d)(),f=Object(b.a)(p,2),v=f[0],g=f[1],S=v.get("query")||"",k=v.get("sex")||"all",L=v.getAll("centuries")||[],A=v.get("sort")||null,C=v.get("order")||null,F=function(e){var t=Object(u.a)(e);if(S){var c=S.toLowerCase().trim();t=t.filter((function(e){var t,a;return e.name.toLowerCase().includes(c)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))||(null===(a=e.fatherName)||void 0===a?void 0:a.toLowerCase().includes(c))}))}if("all"!==k&&(t=t.filter((function(e){return e.sex===k}))),L.length>0&&(t=t.filter((function(e){var t=Math.ceil(e.born/100).toString();return L.includes(t)}))),A)switch(A){case"name":case"sex":return t.sort((function(e,t){return e[A].localeCompare(t[A])}));case"born":case"died":return t.sort((function(e,t){return e[A]-t[A]}));default:return t}return"desc"===C&&t.reverse(),t}(c);return Object(h.useEffect)((function(){(function(){return P.apply(this,arguments)})().then(a).catch((function(){return O(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!l&&Object(i.jsx)(N,{setSearchWith:function(e){var t=m(v,e);g(t)}})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[l?Object(i.jsx)(y,{}):Object(i.jsx)(w,{people:F}),x&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!l&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!l&&!F.length&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"})]})})]})})]})},F=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},E=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(n.e,{children:Object(i.jsxs)(n.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(n.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(n.c,{path:"people",element:Object(i.jsx)(C,{}),children:Object(i.jsx)(n.c,{path:":slug",element:Object(i.jsx)(C,{})})}),Object(i.jsx)(n.c,{path:"home",element:Object(i.jsx)(n.a,{to:"/",replace:!0})}),Object(i.jsx)(n.c,{path:"*",element:Object(i.jsx)(F,{})})]})})})};Object(a.createRoot)(document.getElementById("root")).render(Object(i.jsx)(E,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1874a195.chunk.js.map