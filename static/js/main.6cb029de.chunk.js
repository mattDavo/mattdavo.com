(this["webpackJsonpmattdavo.com"]=this["webpackJsonpmattdavo.com"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145),o=a(29);test("renders learn react link",(function(){var e=(0,Object(i.a)(r.a.createElement(o.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);a(565)},152:function(e,t,a){e.exports=a(33)},18:function(e,t,a){"use strict";a.r(t),a.d(t,"getArticleSubtitle",(function(){return h})),a.d(t,"renderArticles",(function(){return b})),a.d(t,"renderTag",(function(){return p}));var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=a(1),m=a(57),d=(a(105),a(69),a(23)),f=a(24);function p(e,t){var a=function(e){return f.filter((function(t){return t.id===e}))[0]}(e)||{},n=a.color,r=a.link,i=a.title;return c.a.createElement("a",{key:t,className:"tag",href:r,style:{backgroundColor:n}},i)}function h(e){var t=function(e){return e.tags.map(p)}(e),a=new Date(1e3*e.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});return c.a.createElement("span",{className:"subtitle"},t,c.a.createElement("span",{className:"article-date"},"Published on ",a))}function g(e,t){var a=h(e);return c.a.createElement("div",{key:t},c.a.createElement("hr",null),c.a.createElement("h2",{className:"title article-title link-title"},c.a.createElement("a",{href:e.link},e.title)),a,c.a.createElement("p",{className:"subtitle article-summary"},e.summary))}function b(e){return e.map(g)}var v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=b(d);return c.a.createElement("div",{id:"blog-container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/blog"},c.a.createElement("h1",null,"Weekly Articles"),c.a.createElement("p",null,"Articles on what I learn each week in my life as a developer."),e),c.a.createElement(u.a,{path:"/blog/:blog"},c.a.createElement(m.default,{blogData:d,blogTags:f}))))}}]),t}(c.a.Component);t.default=v},23:function(e){e.exports=JSON.parse('[{"title":"Settings up good dev and test environment","summary":"Creating more environments in Xcode for creating Beta and Test versions of your apps.","date":1571009694,"link":"/blog/setting-up-dev-and-test-env","tags":["cocoa-pods","yippy"]},{"title":"The Class Variable \ud83d\ude0d","summary":"How and when to use a class variable instead of a static variable.","date":1570923294,"link":"/blog/class-variable","tags":["yippy","swift"]},{"title":"The Battle of the NSMenu Bar","summary":"Learn about how to best set the frame of an NSWindow based on the position/size/visibility of the NSMenu bar.","date":1570404894,"link":"/blog/menu-bar","tags":["yippy","swift","cocoa"]},{"title":"Refactoring and Enhancements to the YippyViewController","summary":"My experience and learnings in refactoring Yippy.","date":1570318494,"link":"/blog/refactoring-yippy","tags":["yippy","swift"]},{"title":"Using NSPasteboard to mock library functions for testing","summary":"Learn of a cool way to mock out library functions and control their values in your UI testing.","date":1569800094,"link":"/blog/library-function-mocking","tags":["yippy","swift","testing","mocking"]}]')},24:function(e){e.exports=JSON.parse('[{"id":"cocoa-pods","title":"COCOA PODS","color":"red","link":"/tags/cocoa-pods"},{"id":"yippy","title":"YIPPY","color":"#5884ad","link":"/tags/yippy"},{"id":"swift","title":"SWIFT","color":"#ff6600","link":"/tags/swift"},{"id":"cocoa","title":"COCOA","color":"brown","link":"/tags/cocoa"},{"id":"testing","title":"TESTING","color":"#c603fc","link":"/tags/testing"},{"id":"mocking","title":"MOCKING","color":"#c603fc","link":"/tags/mocking"}]')},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(90),a(21)),o=a(1),s=a(51),l=a(53),c=a(54),u=a(56),m=a(18),d=a(61),f=a(60),p=a(62),h=a(59);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s.default,null),r.a.createElement("div",{className:"app-content"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:c.default}),r.a.createElement(o.a,{path:"/work"},r.a.createElement(p.default,null)),r.a.createElement(o.a,{exact:!0,path:"/make-ten",component:h.default}),r.a.createElement(o.a,{exact:!0,path:"/about",component:u.default}),r.a.createElement(o.a,{path:"/blog",component:m.default}),r.a.createElement(o.a,{path:"/tags/:tag",component:d.default}),r.a.createElement(o.a,{component:f.default}))),r.a.createElement(l.default,null)))}},31:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=a(142),m=a.n(u),d=(a(102),a(58)),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={finished:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{var t=a(428)("."+this.props.filePath);fetch(t).then((function(e){return e.text()})).then((function(t){e.setState({input:t,finished:!0})}))}catch(n){this.setState({finished:!0})}}},{key:"render",value:function(){return this.state.input?c.a.createElement("div",{className:"markdown-container"},c.a.createElement(m.a,{source:this.state.input,renderers:{code:d.default,image:p},escapeHtml:!1})):this.state.finished?c.a.createElement("div",{className:"markdown-container not-found"},c.a.createElement("h2",null,"There doesn't seem to be anything here...")):c.a.createElement("div",null)}}]),t}(c.a.Component);function p(e){return c.a.createElement("img",Object.assign({},e,{style:{maxWidth:"100%",maxHeight:"600px"},alt:e.src}))}t.default=f},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),s=(a(89),a(29)),l=a(64);o.a.render(r.a.createElement(s.default,null),document.getElementById("root")),l.unregister()},428:function(e,t,a){var n={".":33,"./":33,"./About":56,"./About.css":95,"./About.js":56,"./App":29,"./App.css":90,"./App.js":29,"./App.test":104,"./App.test.js":104,"./Blog":18,"./Blog.css":105,"./Blog.js":18,"./BlogArticle":57,"./BlogArticle.js":57,"./BlogData":23,"./BlogData.json":23,"./BlogTags":24,"./BlogTags.json":24,"./CodeBlock":58,"./CodeBlock.js":58,"./Footer":53,"./Footer.css":93,"./Footer.js":53,"./Header":51,"./Header.css":91,"./Header.js":51,"./Home":54,"./Home.css":94,"./Home.js":54,"./HomeData":55,"./HomeData.json":55,"./MakeTen":59,"./MakeTen.css":106,"./MakeTen.js":59,"./MarkdownFile":31,"./MarkdownFile.css":102,"./MarkdownFile.js":31,"./NotFound.css":107,"./NotFoundComponent":60,"./NotFoundComponent.js":60,"./TabBar":52,"./TabBar.css":92,"./TabBar.js":52,"./Tag.css":69,"./Tags":61,"./Tags.css":108,"./Tags.js":61,"./Work":62,"./Work.css":109,"./Work.js":62,"./WorkArticle":63,"./WorkArticle.js":63,"./blog/class-variable.md":560,"./blog/library-function-mocking.md":561,"./blog/menu-bar.md":562,"./blog/refactoring-yippy.md":563,"./blog/setting-up-dev-and-test-env.md":564,"./codeStyle.css":103,"./images/me.jpg":85,"./index":33,"./index.css":89,"./index.js":33,"./serviceWorker":64,"./serviceWorker.js":64,"./setupTests":110,"./setupTests.js":110,"./work/coffee-better.md":705,"./work/editor.md":706,"./work/masters-shotlink.md":707,"./work/networks-asst.md":708,"./work/policy-pilot.md":709,"./work/uiimagedefaults.md":710,"./work/westpac.md":711,"./work/yippy.md":712};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=428},51:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=(a(91),a(85)),m=a.n(u),d=a(22),f=a(52),p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-header"},c.a.createElement("img",{id:"header-image",src:m.a,alt:"Logo"}),c.a.createElement("div",{id:"social-icons"},c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/matthew-davidson-5b677b150/"},c.a.createElement(d.f,{size:"2em"})),c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mattDavo"},c.a.createElement(d.d,{size:"2em"})),c.a.createElement("a",{className:"link-icon",href:"mailto:mattdavo15@gmail.com"},c.a.createElement(d.a,{size:"2em"})),c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1cICfzFlLP0tjJas94PhyQvSm1qDhJP5elnOF9gqtvMo/export?format=pdf"},c.a.createElement(d.c,{size:"2em"})),c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/matthew.davidson.33234"},c.a.createElement(d.b,{size:"2em"})),c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/mattydavo15/"},c.a.createElement(d.e,{size:"2em"})),c.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/mattdavo"},c.a.createElement(d.g,{size:"2em"}))),c.a.createElement(f.default,null),c.a.createElement("h1",{id:"header-name"},c.a.createElement("a",{href:"/"},"Matthew Davidson")))}}]),t}(c.a.Component);t.default=p},52:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=a(1),m=(a(92),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={selected:"home"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"tab-bar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/",className:"/"===this.props.location.pathname?" selected":""},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"/about",className:"/about"===this.props.location.pathname?" selected":""},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"/blog",className:this.props.location.pathname.startsWith("/blog/")||"/blog"===this.props.location.pathname?" selected":""},"Blog"))))}}]),t}(c.a.Component));t.default=Object(u.h)(m)},53:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=(a(93),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"app-footer"},c.a.createElement("p",{className:"footer-text"},"Copyright \xa9 Matthew Davidson 2020"),c.a.createElement("p",{className:"footer-text"},"Site made with ",c.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"ReactJS")))}}]),t}(c.a.Component));t.default=u},54:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=(a(94),a(69),a(55)),m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.map((function(e,t){return c.a.createElement(d,{title:e.title,subtitle:e.subtitle,items:e.items,key:t})}));return c.a.createElement("div",{id:"home"},e)}}]),t}(c.a.Component),d=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=(this.props.items||[]).map((function(e,t){var a=(e.tags||[]).map((function(e,t){return c.a.createElement("a",{className:"tag",key:t,href:e.link,style:{backgroundColor:e.color}},e.title)}));return c.a.createElement("div",{className:"section-item",key:t},c.a.createElement("h4",{className:"title link-title section-item-title"},c.a.createElement("a",{href:e.link},e.title)),c.a.createElement("h5",{className:"subtitle section-item-subtitle"},e.subtitle),c.a.createElement("p",{className:"section-item-body"},e.body),null!=e.previewImage&&c.a.createElement("img",{className:"section-item-preview-image",src:e.previewImage,alt:e.title}),c.a.createElement("p",null,a))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"title section-heading"},c.a.createElement("h2",{className:"title section-heading-title"},this.props.title)),this.props.subtitle&&c.a.createElement("h4",{className:"subtitle section-subheading"},this.props.subtitle),c.a.createElement("div",{className:"section-items"},e))}}]),t}(c.a.Component);t.default=m},55:function(e){e.exports=JSON.parse('[{"title":"Recent Work","items":[{"id":"westpac","title":"Westpac, DDEP","subtitle":"Data Engineer, Jul - Dec 18","body":"Developed Inbound JSON functionality for Data Driven Experiences Platform python framework, which provides the ability to ingest large JSON datasets with optional pre-processing, validate schemas and produce a Hive table on top. Wrote unit tests, increasing code coverage from approximately 60% to 70% (100+ tests).","link":"/work/westpac"},{"title":"Coffee Better","subtitle":"iOS Developer, 2018","body":"Lead iOS developer for coffee better. Built in Swift with Google Firebase for data collecting/storage and Google and Facebook authentication.","link":"/work/coffee-better","tags":[{"title":"APP STORE","link":"https://itunes.apple.com/au/app/coffee-better/id1434229741?mt=8","color":"gray"},{"title":"WEBSITE","link":"https://coffeebetter.com.au/","color":"gray"}]}]},{"title":"Open Source","items":[{"title":"Editor","subtitle":"Grammar Parser and Syntax Highlighter","previewImage":"https://raw.githubusercontent.com/mattDavo/Editor/master/Images/EditorReadMeExample.gif","link":"/work/editor","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/Editor","color":"#23d160"}]},{"title":"Yippy","subtitle":"Open Source Clipboard Manager","previewImage":"https://raw.githubusercontent.com/mattDavo/Yippy/master/images/screenshot.jpg","link":"/work/yippy","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/yippy","color":"#23d160"}]},{"title":"UIImageDefaults","subtitle":"Cocoa Pod","body":"Simple Swift extension for locally saving and loading images with ease.","link":"/work/uiimagedefaults","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/UIImageDefaults","color":"#23d160"}]}]},{"title":"University Projects","subtitle":"Whilst I\'ve done a lot of interesting projects/assignments at UNSW, lecturers prefer that students don\'t publish the code of their assignments most of the time, to prevent plagiarism from students in later years if the lecturer decides to use the same or a similar assignment again. So here is a collection of uni work that is ok to show:","items":[{"title":"Networks Assignment","subtitle":"COMP3331 - 2019","body":"In this assignment the task was create a peer in a circular distributed hash table, where we required to simulate tasks such as quering for a file, transferring a file and handling peers leaving cleanly and unexpectedly. Watch my demo video to see how I implemented it.","link":"/work/networks-asst","tags":[{"title":"DEMO","link":"https://youtu.be/erY1EcPavtQ","color":"red"}]},{"title":"Policy Pilot","subtitle":"React Native App, January 2018","body":"A simple, colourful, proof of concept app built in React Native, to highlight the good, neutral and bad points in the terms and conditions of over 60 web services.","link":"/work/policy-pilot","tags":[{"title":"PLAY STORE","link":"https://play.google.com/store/apps/details?id=com.policypilot&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1","color":"gray"},{"title":"WEBSITE","link":"http://policypilot.dcg.nz/","color":"gray"}]}]},{"title":"Other Fun Projects","items":[{"title":"Masters Shotlink","subtitle":"Classifying golf shots by pixel colors","previewImage":"/images/masters-shotlink2.jpg","link":"/work/masters-shotlink"},{"title":"Train Game Solver","subtitle":"Solver for the classic make 10 game","body":"Solver to the train/bus/ferry/tram/any 4 digit number game. Must make 10 by using all 4 numbers in order. Can use any number of parentheses and the + - \xd7 \xf7 operators.","link":"/make-ten"}]}]')},56:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=(a(95),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"about-container"},c.a.createElement("h1",{className:"title"},"Hello"),c.a.createElement("p",{className:"subtitle"},"Hey I'm Matt, welcome to my colourful site!"),c.a.createElement("p",{className:"subtitle"},"I'm a keen Computer Scientist graduating from the University of New South Wales, Sydney in 2020. I love to work on cool projects, in particular packages and developer tools and am always trying to learn something new to build better software. I have experience working with python as a data engineer and building native iOS and macOS apps. In my spare time I like to contribute to the open source community."),c.a.createElement("p",{className:"subtitle"},"When I'm not behind a keyboard, I'm probably playing golf, listening to music, grabbing a Chicken Parma with mates, travelling the world or all of the above!"))}}]),t}(c.a.Component));t.default=u},560:function(e,t,a){e.exports=a.p+"static/media/class-variable.f8598216.md"},561:function(e,t,a){e.exports=a.p+"static/media/library-function-mocking.f6834f7a.md"},562:function(e,t,a){e.exports=a.p+"static/media/menu-bar.16172612.md"},563:function(e,t,a){e.exports=a.p+"static/media/refactoring-yippy.8e107a94.md"},564:function(e,t,a){e.exports=a.p+"static/media/setting-up-dev-and-test-env.26994bde.md"},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a(18),s=a(31);t.default=function(e){var t=Object(i.f)().blog,a=e.blogData.filter((function(e){return e.link==="/blog/".concat(t)}))[0]||{},n=a.title,l=Object(o.getArticleSubtitle)(a);return console.log(a),r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},n),l,r.a.createElement(s.default,{filePath:"/blog/".concat(t,".md")}))}},58:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=a(713),m=(a(103),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return c.a.createElement(u.a,{language:t,useInlineStyles:!1,wrapLines:!0},a)}}]),t}(l.PureComponent));m.defaultProps={language:null},t.default=m},59:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a(3),i=a(4),o=a(6),s=a(5),l=a(7),c=a(0),u=a.n(c),m=(a(106),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={content:"empty"},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"validateNumber",value:function(e){var t=e||window.event,a=t.keyCode||t.which;(t.shiftKey||t.altKey||t.ctrlKey||!(a>=48&&a<=57||a>=96&&a<=105||8===a||9===a||13===a||35===a||36===a||37===a||39===a||46===a||45===a))&&(t.returnValue=!1,t.preventDefault&&t.preventDefault())}},{key:"isSolveable",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=Array.from(e).length,a=Array(t),r=0;r<t;r++){a[r]=Array(t);for(var i=0;i<t;i++)a[r][i]=Array(0)}for(var o=1;o<t+1;o++)for(var s=0;s<t-o+1;s++){var l=s+o-1;if(1===o)a[s][l].push(e[s]),a[s][l].push(-e[s]);else for(var c=function(e){var t=a[s][e],r=a[e+1][l],i=[];t.forEach((function(e){r.forEach((function(t){i.push([e,t])}))}));for(var o=0,c=i;o<c.length;o++){var u=c[o],m=u[0],d=u[1];a[s][l].push(m+d),a[s][l].push(m-d),a[s][l].push(m*d),0!==d&&a[s][l].push(m/d)}a[s][l]=Object(n.a)(new Set(a[s][l]))},u=s;u<l;u++)c(u)}return!!Array.from(a[0][t-1]).includes(10)}},{key:"render",value:function(){var e=this,t="Enter 4 digits",a="title";"solveable"===this.state.content?(a+=" train-solution",t="Solveable!"):"unsolveable"===this.state.content&&(a+=" train-no-solution",t="Unsolveable!");var n=u.a.createElement("h1",{className:a,id:"solveable",style:{display:"block",paddingBottom:"10px"}},t);return u.a.createElement("div",{className:"make-ten-container"},u.a.createElement("h1",{className:"title"},"Train Game Solver"),u.a.createElement("p",{className:"subtitle"},"Solver to the train/bus/ferry/tram/any 4 digit number game. Must make 10 by using all 4 numbers in order. Can use any number of parentheses and the + - \xd7 \xf7 operators."),u.a.createElement("form",{autoComplete:"off"},u.a.createElement("input",{ref:"input",autoComplete:"off",type:"text",id:"input",maxLength:"4",className:"train train-input",placeholder:"1234",size:"4",onKeyDown:this.validateNumber,onKeyUp:function(t){var a=e.refs.input;if(4===a.value.length){var n=Array.from(a.value).map((function(e){return parseInt(e)}));e.isSolveable(n)?e.setState({content:"solveable"}):e.setState({content:"unsolveable"})}else e.setState({content:"empty"})}})),n,u.a.createElement("p",{className:"subtitle"},"This solution uses dynamic programming where the solution to each subproblem P(i,j) is the set of numbers that can be produced with the subsequence of indexes i to j. We solve subproblems in order of increasing length of subsequence (that is j - i). Then our puzzle is solveable if 10 exists in the set of the solution to P(1,4)."),u.a.createElement("p",{className:"subtitle"},"This solution can easily be extended to solve similar problems with longer sequences and/or a larger range of values allowed for numbers in the sequence since (instead of limiting them to single digits). Additionally, the solution can be easily altered to solve for different numbers, instead of 10. All of these modifications will scale much better than a brute force attempt of placing parentheses and operators in the possible combinations."),u.a.createElement("p",{className:"subtitle"},"I'm yet to find any wrong answers for my solver, but if you do find one, send me an ",u.a.createElement("a",{href:"mailto:mattdavo15@gmail.com"},"email"),"."))}}]),t}(u.a.Component));t.default=m},60:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),i=a(6),o=a(5),s=a(7),l=a(0),c=a.n(l),u=(a(107),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"not-found-container"},c.a.createElement("h2",null,"Hmmm, yeah there isn't anything here..."),c.a.createElement("h3",{className:"Not-found-subtext"},"Are you sure that you have the right link?"))}}]),t}(l.Component));t.default=u},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=(a(108),a(23)),s=a(24),l=a(18);t.default=function(){var e=Object(i.f)().tag;if(!s.filter((function(t){return t.id===e}))[0])return r.a.createElement("div",{id:"tags-container"},r.a.createElement("h2",{className:"title centered-text"},"'",e,"' does not match any known tags."));var t=o.filter((function(t){return t.tags.includes(e)})),a=Object(l.renderArticles)(t);return r.a.createElement("div",{id:"tags-container"},r.a.createElement("h1",{className:"title"},"Articles with tag: ",Object(l.renderTag)(e)),a)}},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=(a(109),a(63));t.default=function(){var e=Object(i.g)();return r.a.createElement("div",{id:"work-container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"".concat(e.path,"/:topicId")},r.a.createElement(o.default,null))))}},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a(31);t.default=function(){var e=Object(i.f)().topicId;return r.a.createElement(o.default,{filePath:"/work/".concat(e,".md")})}},64:function(e,t,a){"use strict";a.r(t),a.d(t,"register",(function(){return r})),a.d(t,"unregister",(function(){return o}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},69:function(e,t,a){},705:function(e,t,a){e.exports=a.p+"static/media/coffee-better.b6c6dd7f.md"},706:function(e,t,a){e.exports=a.p+"static/media/editor.aafaa143.md"},707:function(e,t,a){e.exports=a.p+"static/media/masters-shotlink.1d43acb1.md"},708:function(e,t,a){e.exports=a.p+"static/media/networks-asst.361f5a79.md"},709:function(e,t,a){e.exports=a.p+"static/media/policy-pilot.82b95e9f.md"},710:function(e,t,a){e.exports=a.p+"static/media/uiimagedefaults.97a75945.md"},711:function(e,t,a){e.exports=a.p+"static/media/westpac.92fe975a.md"},712:function(e,t,a){e.exports=a.p+"static/media/yippy.caee6bc5.md"},85:function(e,t,a){e.exports=a.p+"static/media/me.211f12b2.jpg"},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[152,1,2]]]);
//# sourceMappingURL=main.6cb029de.chunk.js.map