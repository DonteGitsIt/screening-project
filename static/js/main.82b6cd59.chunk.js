(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(36)},19:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),s=t.n(c),l=(t(19),t(8)),o=t(9),i=t(10),h=t(12),u=t(11),m=t(13);var d=function(e){return r.a.createElement("div",{className:"searchContainer"},e.children)};var f=function(e){return r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{src:e.imgUrl,alt:e.alt}))},g=t(2),p=t.n(g),v={searchPhotos:function(e){return new p.a({applicationId:"bb871877d7dd496d178345e41cf031344afee1d6577a8a14ce45275a1ff3af83",secret:"f733ef14cab890492b552f23a082e3d50515268ebd83a1a49663c6e9ad7de02c"}).search.photos(e,1,25).then(g.toJson)}},b=(t(35),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={searchParam:"",searchResults:[],imageSearched:!1},t.handleInputChange=function(e){var a=e.target.value,n=e.target.name;t.setState(Object(l.a)({},n,a))},t.handleSearchSubmit=function(e){e.preventDefault(),t.setState({searchResults:[]}),console.log("Search worked!"),v.searchPhotos(t.state.searchParam).then(function(e){for(var a=0;a<e.results.length;a++){var n={id:e.results[a].id,alt:e.results[a].alt_description,url:e.results[a].urls.regular};t.state.searchResults.push(n),t.setState({imageSearched:!0}),console.log("result pushed to array")}console.log(t.state.searchResults)}).catch(function(e){return console.log(e)})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement("form",{className:"search"},r.a.createElement("h2",null,"Unplash Image Finder"),r.a.createElement("input",{value:this.state.searchParam,name:"searchParam",onChange:this.handleInputChange,type:"text",placeholder:"Search images"}),r.a.createElement("button",{onClick:this.handleSearchSubmit},"Search"))),this.state.searchResults.length>0&&!0===this.state.imageSearched?this.state.searchResults.map(function(e){return r.a.createElement(f,{key:e.id,imgUrl:e.url,alt:e.alt})}):r.a.createElement("div",null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.82b6cd59.chunk.js.map