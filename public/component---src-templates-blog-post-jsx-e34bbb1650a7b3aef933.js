(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(a.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},s=n("ZMnY");t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}(a.default.Component)},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},s=n("ZMnY");var l=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(a.default.Component)},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,i=void 0;try{for(var s,l=n[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var c=s.value;if(e[c]!==t[c]&&!a(e[c]))return!0}}catch(u){r=!0,i=u}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return!1};var o,r=n("q1tI"),i=(o=r)&&o.__esModule?o:{default:o};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},lRrx:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return h})),n.d(t,"query",(function(){return b}));var o=n("IP2g"),r=n("7evw"),i=n("+ZDr"),a=n.n(i),s=(n("hL/g"),n("q1tI"),n("L6Je")),l=n("KrlL"),c=n("5nk/"),u=n("DGZL"),d=n("fVRV"),m=n("fCgX"),p=n.n(m),f=n("p3AD");function h(t){var n={container:{maxWidth:"800px",margin:"auto",animation:"bottomToTop 0.15s ease-out"},boxInner:{padding:Object(f.a)(1),paddingBottom:Object(f.a)(2),lineHeight:"2rem"," h2":{borderLeft:"10px solid #5883D9",margin:"4rem auto 1rem",paddingLeft:"10px",textAlign:"left"}," h3":{borderBottom:"1px dotted rgba(0,0,0,0.5)",fontSize:"1.2rem",margin:"3rem auto 1rem",paddingBottom:"5px",textAlign:"left"}," h4":{marginBottom:"0.5rem",marginTop:"2rem"}," ul > li":{listStyleType:"initial"}," ol > li":{listStyleType:"decimal"}," ul":{paddingLeft:"25px"}," table":{width:"auto"}," a":{color:"#262626"}," p":{marginBottom:"1rem",marginTop:"1rem"}," pre":{margin:"1rem auto !important"," a":{color:"#7ec699"}}},backButton:{background:"#fff",border:"2px solid #6292F1",borderRadius:"7px",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",color:"#6292F1",display:"inline-block",padding:"5px 1rem",textDecoration:"none",":hover":{background:"#6292F1",color:"#fff",cursor:"pointer"},":first-child":{marginBottom:"2rem"},":last-child":{marginTop:"2rem"},arrow:{width:"0.875em"}},link:{display:"block",textDecoration:"none",marginBottom:"2rem"},datetime:{color:"#999",display:"block",marginBottom:"1rem"},title:{borderBottom:"1px dotted rgba(0,0,0,0.5)",marginBottom:"2rem",textAlign:"left"},comments:{padding:Object(f.a)(1),paddingBottom:0,marginTop:"2rem"," hr":{marginBottom:"2rem",marginTop:"2rem"}},footer:{display:"flex",marginTop:"2rem",padding:"2rem"," a":{color:"#262626"},"@media (max-width: 499px)":{flexDirection:"column"," img":{width:"100px",margin:"0 auto 2rem",borderRadius:"50%"}," div p:first-child":{fontWeight:"bold",marginBottom:"1rem",textAlign:"center"}," p":{marginBottom:0}},"@media (min-width: 500px)":{display:"flex"," img":{height:"100px",marginRight:"2rem",borderRadius:"50%"}," div p:first-child":{fontWeight:"bold",marginBottom:"1rem"}," p":{marginBottom:0}}}},i=t.data.markdownRemark,m={url:"http://www.yuuniworks.com/blog"+i.fields.slug,identifier:"http://www.yuuniworks.com/blog"+i.fields.slug,title:i.frontmatter.title};return e.createElement(s.a,{location:t.location},e.createElement(l.a,{colorNumber:"1",isTop:!0},e.createElement(c.a,{colorNumber:"1",text:"Poolside Blog",link:"/blog/"}),e.createElement("div",{css:n.container},e.createElement(a.a,{to:"/blog/",css:n.backButton},e.createElement(o.a,{icon:"arrow-left",style:n.backButton.arrow}),":)"),e.createElement(d.a,null,e.createElement("article",{css:n.boxInner},e.createElement("time",{css:n.datetime,dateTime:i.frontmatter.date},i.frontmatter.date.slice(0,10)),e.createElement("h1",{css:n.title},i.frontmatter.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:i.html}}))),e.createElement(d.a,null,e.createElement("aside",{css:n.comments},e.createElement(r.DiscussionEmbed,{shortname:"poolside",config:m}))),e.createElement(d.a,null,e.createElement("footer",{css:n.footer},e.createElement("img",{src:p.a,alt:"profile"}),e.createElement("div",null,e.createElement("p",null,"Alexandra Scott"),e.createElement("p",null,e.createElement(a.a,{to:"/"},"Yuuniworks"),"I'm just a gal in awe of Shota Tamura's work on this site.")))),e.createElement(a.a,{to:"/blog/",css:n.backButton},e.createElement(o.a,{icon:"arrow-left",style:n.backButton.arrow}),"Return to blog list")),e.createElement(u.a,{postNode:i})))}var b="1658735902"}.call(this,n("iMUK"))}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-e34bbb1650a7b3aef933.js.map