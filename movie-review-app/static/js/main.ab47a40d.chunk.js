(this["webpackJsonpmovie-review-app"]=this["webpackJsonpmovie-review-app"]||[]).push([[0],{139:function(e,t,n){e.exports=n(216)},144:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(144),n(62)),u=n(230),l=n(225),s=n(39),f=n(40);function v(){var e=Object(s.a)(["\n  width: 100%;\n"]);return v=function(){return e},e}function d(){var e=Object(s.a)(["\n  max-width: 50%;\n  min-width: 140px;\n  padding-right: 10px;\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  width: 100%;\n  position: relative;\n  padding-bottom: 10px;\n  cursor: pointer;\n  top: 0px;\n  &:hover {\n    top: -3px;\n  }\n"]);return m=function(){return e},e}function g(){var e=Object(s.a)(["\n  padding-bottom: 20px;\n  position: relative;\n"]);return g=function(){return e},e}function p(){var e=Object(s.a)(["\n  margin-top: ","px;\n  top: 0px;\n  height: calc(100% - ","px);\n  width: 100%;\n  padding: 15px;\n  position: absolute;\n  overflow-x: auto;\n"]);return p=function(){return e},e}function h(){var e=Object(s.a)(["\n  background-color: #282c34;\n  height: ","px;\n  color: white;\n  font-size: 25px;\n"]);return h=function(){return e},e}function b(){var e=Object(s.a)(["\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n"]);return b=function(){return e},e}function E(){var e=Object(s.a)(["\n  font-weight: 700;\n"]);return E=function(){return e},e}function O(){var e=Object(s.a)(["\n  padding-right: ","px;\n  padding-bottom: ","px;\n"]);return O=function(){return e},e}function j(){var e=Object(s.a)(["\n  padding-bottom: 5px;\n"]);return j=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return w=function(){return e},e}function x(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return x=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: flex;\n"]);return y=function(){return e},e}function k(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n"]);return k=function(){return e},e}var C=f.a.div(k()),M=f.a.div(y()),_=f.a.div(x()),S=Object(f.a)(C)(w()),D=f.a.div(j()),A=f.a.div(O(),(function(e){return e.width||10}),(function(e){return e.height||10})),L=Object(f.a)(D)(E()),F=Object(f.a)(C)(b()),R=Object(f.a)(S)(h(),50),V=Object(f.a)(C)(p(),50,50),z=Object(f.a)(_)(g()),B=f.a.img(m()),W=f.a.div(d()),H=f.a.img(v()),I=n(114),N=n(38),P=n(218),J=n(133),T=n(116),$=n.n(T),q=n(74),G=n.n(q),K=n(65),Q=n(82),U=n(73),X=n(34),Y=function(){var e=Object(Q.a)(G.a.mark((function e(){var t,n,a,r,c=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=t.page,a="".concat("https://api.themoviedb.org/3/movie/popular","?api_key=").concat("c06e14cd13b2c6373fdc8f9f3dd47eb3"),n&&(a+="&page=".concat(n)),e.next=6,fetch(a);case 6:if(200===(r=e.sent).status){e.next=9;break}throw new Error({message:"Fetch Data fail with status ".concat(r.status)});case 9:return e.abrupt("return",r.json());case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=Object(U.b)({name:"movieData",initialState:{data:[],loading:!1},reducers:{setMovieData:function(e,t){t.payload.forEach((function(t){return e.data[t.page-1]=t})),e.loading=!1},setLoading:function(e,t){e.loading=t.payload}}}),ee=Z.actions,te=ee.setMovieData,ne=ee.setLoading,ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(Q.a)(G.a.mark((function t(n,a){var r,c,i,o,u,l,s,f;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a(),c=r.movieData,i=e.page||1,Array.isArray(i)||(i=[i]),o=[],u=Object(K.a)(i),t.prev=5,u.s();case 7:if((l=u.n()).done){t.next=14;break}if(s=l.value,!(Number.isNaN(s)||Math.floor(s)!==s||s<1)){t.next=11;break}throw new Error("Page must be an positive interger");case 11:c.data[s-1]||o.push(s);case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),u.e(t.t0);case 19:return t.prev=19,u.f(),t.finish(19);case 22:if(o.length){t.next=24;break}return t.abrupt("return");case 24:return t.prev=24,n(ne(!0)),t.next=28,Promise.all(o.map((function(e){return Y({page:e})})));case 28:return f=t.sent,t.abrupt("return",n(te(f)));case 32:t.prev=32,t.t1=t.catch(24),console.error(t.t1);case 35:case"end":return t.stop()}}),t,null,[[5,16,19,22],[24,32]])})));return function(e,n){return t.apply(this,arguments)}}()},re=function(e){return e.movieData.data},ce=Object(X.a)(re,(function(e){return function e(t,n){var a,r=Object(K.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;Array.isArray(c)?e(c,n):n.push(c)}}catch(i){r.e(i)}finally{r.f()}return n}(e.filter((function(e){return!!e})).map((function(e){return e.results})),[])})),ie=Object(X.a)(re,(function(e){for(var t=0;e[t++];);return t})),oe=Object(X.a)(re,ie,(function(e,t){return!e.length||t<=e[0].total_pages})),ue=function(e){return e.movieData.loading},le=Z.reducer,se={"":function(){},"Voting: High to Low":function(e,t){return t.vote_average-e.vote_average},"Voting: Low to Hight":function(e,t){return e.vote_average-t.vote_average},"Alphabetical: Ascending":function(e,t){return e.title.localeCompare(t.title)},"Alphabetical: Descending":function(e,t){return t.title.localeCompare(e.title)},"Release Date: Recent to Old":function(e,t){return new Date(t.release_date)-new Date(e.release_date)},"Release Date: Old to Recent":function(e,t){return new Date(e.release_date)-new Date(t.release_date)}},fe=Object(U.b)({name:"movieFilter",initialState:{language:{},voting:{min:0,max:10,selectMin:0,selectMax:10},adult:!1,search:"",sort:""},reducers:{setLanguage:function(e,t){e.language[t.payload]?delete e.language[t.payload]:e.language[t.payload]=!0},setVoting:function(e,t){var n=t.payload,a=n.selectMin,r=n.selectMax;void 0!==a&&(e.voting.selectMin=a),void 0!==r&&(e.voting.selectMax=r)},setAdult:function(e,t){e.adult=t.payload},setSearch:function(e,t){e.search=t.payload},setSort:function(e,t){e.sort=t.payload}}}),ve=fe.actions,de=ve.setLanguage,me=ve.setVoting,ge=ve.setAdult,pe=ve.setSearch,he=ve.setSort,be=Object(X.a)((function(e){return e.movieFilter.language}),(function(e){return!!Object.keys(e).length})),Ee=Object(X.a)(ce,(function(e){var t=new Set;return e.forEach((function(e){return t.add(e.original_language)})),Array.from(t)})),Oe=Object(X.a)((function(e){return e.movieFilter}),ce,be,(function(e,t,n){var a=e.language,r=e.voting,c=e.adult,i=e.search,o=e.sort,u=new Set,l=t.filter((function(e){if(u.has(e.title))return!1;if(u.add(e.title),n&&!a[e.original_language])return!1;if(e.vote_average<r.selectMin||e.vote_average>r.selectMax)return!1;if(c&&!e.adult)return!1;if(i){var t,o=i.split(" ").filter((function(e){return e})),l=Object(K.a)(o);try{for(l.s();!(t=l.n()).done;){var s=t.value;if(-1===e.title.toLowerCase().indexOf(s.toLowerCase()))return!1}}catch(f){l.e(f)}finally{l.f()}}return!0}));return o&&se[o]?l.sort(se[o]):l})),je=function(e){return e.movieFilter.language},we=function(e){return e.movieFilter.voting},xe=function(e){return e.movieFilter.adult},ye=function(e){return e.movieFilter.sort},ke=fe.reducer,Ce=n(226),Me=function(e){var t=e.options,n=e.checked,a=e.onOptionClick;return r.a.createElement(_,null,t.map((function(e,t){return r.a.createElement("div",{key:e},r.a.createElement(Ce.a,{"data-testid":"checkBox-".concat(t),onChange:function(){return a(e,n[e])},checked:n[e]},e))})))},_e=n(75),Se=n(220),De=function(e){var t,n=e.min,a=e.max,c=e.selectMin,i=e.selectMax,o=e.onChange,u=(t={},Object(_e.a)(t,n,n),Object(_e.a)(t,a,a),t);return r.a.createElement(Se.a,{min:n,max:a,range:!0,defaultValue:[c,i],step:.1,onChange:o,marks:u})},Ae=n(224);function Le(e){var t=e.swatch,n=e.title,a=e.rating,c=e.onClick;return r.a.createElement(z,null,r.a.createElement(B,{src:t,onClick:c,alt:"".concat(n," Poster")}),r.a.createElement(L,null,n),r.a.createElement(Ae.a,{allowHalf:!0,disabled:!0,value:a}))}var Fe=n(219),Re=n(71),Ve=n(221);function ze(e){var t=e.swatch,n=e.title,a=e.vote_average,c=e.vote_count,i=e.overview,o=e.release_date,u=e.original_language,l=e.visible,s=e.onClose;return r.a.createElement(Fe.a,{title:n,centered:!0,visible:l,footer:null,onCancel:s},r.a.createElement(M,null,r.a.createElement(W,null,r.a.createElement(H,{src:t,alt:"".concat(n," Poster")})),r.a.createElement(_,null,r.a.createElement(M,null,r.a.createElement(D,null,o),r.a.createElement(A,null),r.a.createElement(D,null,"Language: ".concat(u))),r.a.createElement("div",null,r.a.createElement(Re.a,{placement:"right",title:"".concat(c," Voting")},r.a.createElement(Ve.a,{width:40,type:"circle",percent:10*a,strokeColor:Be(a)}))),r.a.createElement(L,null,"Overview"),r.a.createElement(D,null,i))))}var Be=function(e){var t=e/10;return"rgb(".concat(255-255*t,",").concat(255*t,",0)")},We=n(229),He=function(e){var t=e.checked,n=e.onChange;return r.a.createElement(We.a,{"data-testid":"switch",checked:t,onChange:n})},Ie=n(223),Ne=function(e){var t=e.placeholder,n=e.onSearch;return r.a.createElement(Ie.a.Search,{placeholder:t,onSearch:n,enterButton:!0})},Pe=n(222),Je=n(227),Te=n(228),$e=function(e){var t=e.select,n=e.options,a=e.onChange,c=r.a.createElement(Pe.a,{onClick:a},n.map((function(e){return r.a.createElement(Pe.a.Item,{key:e},e)})));return r.a.createElement(Je.a,{overlay:c},r.a.createElement("a",{className:"ant-dropdown-link",href:"/",onClick:function(e){return e.preventDefault()}},t," ",r.a.createElement(Te.a,null)))};function qe(){var e=Object(a.useRef)(null),t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],i=n[1],u=Object(a.useState)(null),l=Object(o.a)(u,2),s=l[0],f=l[1],v=Object(a.useState)(!0),d=Object(o.a)(v,2),m=d[0],g=d[1],p=Object(N.c)(Oe),h=Object(N.c)(oe),b=Object(N.c)(ie),E=Object(N.c)(ue),O=Object(N.b)(),j=function(){e.current&&i(e.current.offsetWidth)};Object(a.useEffect)((function(){var t=e.current,n=t.offsetWidth,a=t.offsetHeight;i(n),window.addEventListener("resize",j);var r=Math.ceil(Math.ceil(n/200)*Math.ceil(a/200/2)/20);return O(ae({page:Array.from(Array(r),(function(e,t){return t+1}))})),function(){window.removeEventListener("resize",j)}}),[O]),Object(a.useEffect)((function(){g(h)}),[p,h]);var w=r.a.createElement(S,{key:0},r.a.createElement(M,null,r.a.createElement(J.a,{style:{marginRight:"20px"}}),"loading"));return r.a.createElement(V,{ref:e},r.a.createElement($.a,{initialLoad:!1,pageStart:0,loadMore:function(){return O(ae({page:b}))},useWindow:!1,hasMore:m,loader:E&&w},p.length?r.a.createElement(P.b,{dataSource:p,renderItem:function(e){return r.a.createElement(P.b.Item,null,r.a.createElement(Le,Object.assign({},Ke(e),{onClick:function(){f(e)}})))},grid:{gutter:10,column:Ge(c)}}):r.a.createElement("div",null)),r.a.createElement(ze,Object.assign({visible:!!s},Ke(s||{}),{onClose:function(){return f(null)}})))}var Ge=function(e){return Math.max(Math.floor(e/200),1)},Ke=function(e){return Object(I.a)({},e,{rating:e.vote_average/2,swatch:"".concat("https://image.tmdb.org/t/p/w300_and_h450_bestv2").concat(e.poster_path)})},Qe=n(217),Ue=function(e){var t=e.title,n=e.children,a=e.align,c=void 0===a?"vertical":a,i="vertical"===c?_:M;return r.a.createElement(i,null,t&&r.a.createElement(L,null,t),t&&"vertical"!==c&&r.a.createElement(A,null),n)},Xe=Object.keys(se);function Ye(){var e=Object(N.b)(),t=Object(N.c)(we),n=Object(N.c)(Ee),a=Object(N.c)(je),c=Object(N.c)(xe),i=Object(N.c)(ye);return r.a.createElement(_,null,r.a.createElement(Ne,{placeholder:"Search Movie by Title",onSearch:function(t){e(function(e){return function(t){return t(pe(e))}}(t))}}),r.a.createElement(Qe.a,null),r.a.createElement(Ue,{title:"Language"},r.a.createElement(Me,{options:n,checked:a,onOptionClick:function(t){return e(function(e){return function(t){return t(de(e))}}(t))}})),r.a.createElement(Qe.a,null),r.a.createElement(Ue,{title:"Adult Only",align:"horizontal"},r.a.createElement(He,{checked:c,onChange:function(t){return e(function(e){return function(t){return t(ge(e))}}(t))}})),r.a.createElement(Qe.a,null),r.a.createElement(Ue,{title:"Voting"},r.a.createElement(De,Object.assign({},t,{onChange:function(t){var n=Object(o.a)(t,2),a=n[0],r=n[1];return e(function(e){var t=e.min,n=e.max;return function(e){return e(me({selectMin:t,selectMax:n}))}}({min:a,max:r}))}}))),r.a.createElement(Qe.a,null),r.a.createElement(Ue,{title:"Sort By:",align:"horizontal"},r.a.createElement($e,{select:i,options:Xe,onChange:function(t){e(function(e){return function(t){return t(he(e))}}("item_0"===t.key?"":t.key))}})))}n(215);var Ze=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement(F,null,r.a.createElement(R,null,"Movie Review App"),r.a.createElement(u.a,{style:{position:"absolute",right:"8px",top:"8px",fontSize:"32px",color:"#fff",cursor:"pointer"},onClick:function(){return c(!0)}}),r.a.createElement(qe,null),r.a.createElement(l.a,{title:"Movie Filter",placement:"right",closable:!0,onClose:function(){return c(!1)},visible:n,key:"right",width:320},r.a.createElement(Ye,null)))},et=Object(U.a)({reducer:{movieData:le,movieFilter:ke}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{store:et},r.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.ab47a40d.chunk.js.map