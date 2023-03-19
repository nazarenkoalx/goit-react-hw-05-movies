"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{5623:function(e,t,r){r.d(t,{s:function(){return d}});var n,a,o=r(1857),u=r(168),i=r(4313),c=i.ZP.li(n||(n=(0,u.Z)(["\n  max-width: 280px;\n  margin-bottom: 15px;\n  list-style: none;\n"]))),s=r(1087),p=r(7689),l=r(184),h=function(e){var t=e.id,r=e.title,n=e.poster_path,a=null===n?"".concat(o):"".concat("https://www.themoviedb.org/t/p/w500").concat(n),u=(0,p.TH)();return(0,l.jsx)(c,{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:u},children:(0,l.jsxs)("article",{children:[(0,l.jsx)("img",{src:a,loading:"lazy",alt:r}),(0,l.jsx)("h2",{children:r})]})})})},f=i.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),d=function(e){var t=e.movies;return(0,l.jsx)(f,{children:t.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return(0,l.jsx)(h,{id:t,title:r,poster_path:n},t)}))})}},9462:function(e,t,r){r.d(t,{J:function(){return a}});var n=r(7596),a=function(e){return n.Am.error("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},546:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n,a,o,u=r(9439),i=r(168),c=r(4313),s=c.ZP.form(n||(n=(0,i.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),p=c.ZP.input(a||(a=(0,i.Z)(["\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n  font-size: 20px;\n"]))),l=c.ZP.button(o||(o=(0,i.Z)([""]))),h=r(7604),f=r(9462),d=r(184),v=function(e){var t=e.setSearchQuery,r=e.query;return(0,d.jsxs)(s,{onSubmit:function(e){e.preventDefault();var r=e.target.query.value.trim().toLowerCase();r||(0,f.J)("your search query is empty"),t({query:r}),e.target.reset()},children:[(0,d.jsx)(p,{name:"query",placeholder:"Search here))",required:!0,defaultValue:r}),(0,d.jsx)(l,{type:"submit",children:(0,d.jsx)(h.w75,{name:"search loop",color:"#000",size:"30px"})})]})},m=r(2791),g=r(9159),w=r(5623),x=r(1087),y=r(7689),_=r(4608),b=function(){var e,t=(0,m.useState)([]),r=(0,u.Z)(t,2),n=r[0],a=r[1],o=(0,m.useState)(""),i=(0,u.Z)(o,2),c=i[0],s=i[1],p=(0,m.useState)(!1),l=(0,u.Z)(p,2),h=l[0],b=l[1],Z=(0,x.lr)(),k=(0,u.Z)(Z,2),j=k[0],S=k[1],q=null!==(e=j.get("query"))&&void 0!==e?e:"",E=(0,y.s0)();return(0,m.useEffect)((function(){q&&(a([]),s(""),b(!0),(0,g.z1)(q).then((function(e){if(0===e.length)return(0,f.J)("There are no matches with your query(");a(e)})).catch((function(e){return s(e)})).finally((function(){return b(!1)})))}),[q]),(0,m.useEffect)((function(){""!==c&&((0,f.J)("smth went wrong, redirecting to the main page, wait a second pls"),setTimeout((function(){E("/")}),2e3))}),[c,E]),(0,d.jsxs)("main",{children:[(0,d.jsx)(v,{setSearchQuery:S,query:q}),h&&(0,d.jsx)(_.a,{}),n.length>0&&(0,d.jsx)(w.s,{movies:n})]})},Z=function(){return(0,d.jsx)(b,{})}},9159:function(e,t,r){r.d(t,{Df:function(){return c},Ku:function(){return d},Pg:function(){return h},fI:function(){return m},z1:function(){return p}});var n=r(5861),a=r(4687),o=r.n(a),u=r(1243),i="d60997a7e23cda835c1c23368c69f903";function c(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(o().mark((function e(){var t,r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/week",{params:{api_key:i}});case 3:return t=e.sent,r=t.data,n=r.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path,a=e.vote_average;e.genre_ids;return{id:t,title:r,poster_path:n,vote_average:a}})),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i,language:"en-US",page:1,include_adult:!1,query:t}});case 3:return r=e.sent,n=r.data,a=n.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path,a=e.vote_average;e.genre_ids;return{id:t,title:r,poster_path:n,vote_average:a}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:i,language:"en-US"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 3:return r=e.sent,n=r.data,a=n.cast.map((function(e){return{id:e.id,character:e.character,name:e.name,profile_path:e.profile_path}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:i,language:"en-US",page:1}});case 3:return r=e.sent,n=r.data,a=n.results.map((function(e){return{author:e.author,content:e.content,created_at:e.created_at}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}},1857:function(e,t,r){e.exports=r.p+"static/media/no-photo.4c5af415192ff4013f7e.png"}}]);
//# sourceMappingURL=546.b3bdfa39.chunk.js.map