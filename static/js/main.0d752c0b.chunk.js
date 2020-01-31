(this["webpackJsonpmattdavo.com"]=this["webpackJsonpmattdavo.com"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},19:function(e){e.exports=JSON.parse('[{"title":"Custom Alerts in SwiftUI","summary":"Learn how to create a custom popover alert-style view with a bouncy animation.","date":1580314657,"link":"/blog/swiftui-custom-alert","tags":["swiftui","swift","xcode"]},{"title":"Developing your Swift Packages","summary":"Learn how to best simultaneously develop your swift packages alongside another project.","date":1579406583,"link":"/blog/swift-package-development","tags":["swift","xcode"]},{"title":"Settings up good dev and test environment","summary":"Creating more environments in Xcode for creating Beta and Test versions of your apps.","date":1571009694,"link":"/blog/setting-up-dev-and-test-env","tags":["cocoa-pods","yippy"]},{"title":"The Class Variable \ud83d\ude0d","summary":"How and when to use a class variable instead of a static variable.","date":1570923294,"link":"/blog/class-variable","tags":["yippy","swift"]},{"title":"The Battle of the NSMenu Bar","summary":"Learn about how to best set the frame of an NSWindow based on the position/size/visibility of the NSMenu bar.","date":1570404894,"link":"/blog/menu-bar","tags":["yippy","swift","cocoa"]},{"title":"Refactoring and Enhancements to the YippyViewController","summary":"My experience and learnings in refactoring Yippy.","date":1570318494,"link":"/blog/refactoring-yippy","tags":["yippy","swift"]},{"title":"Using NSPasteboard to mock library functions for testing","summary":"Learn of a cool way to mock out library functions and control their values in your UI testing.","date":1569800094,"link":"/blog/library-function-mocking","tags":["yippy","swift","testing","mocking"]}]')},20:function(e){e.exports=JSON.parse('[{"id":"cocoa-pods","title":"COCOA PODS","color":"red","link":"/tags/cocoa-pods"},{"id":"yippy","title":"YIPPY","color":"#5884ad","link":"/tags/yippy"},{"id":"swift","title":"SWIFT","color":"#ff6600","link":"/tags/swift"},{"id":"cocoa","title":"COCOA","color":"brown","link":"/tags/cocoa"},{"id":"testing","title":"TESTING","color":"#c603fc","link":"/tags/testing"},{"id":"mocking","title":"MOCKING","color":"#c603fc","link":"/tags/mocking"},{"id":"xcode","title":"XCODE","color":"#42a4f5","link":"/tags/xcode"},{"id":"swiftui","title":"SWIFTUI","color":"#0362fc","link":"/tags/swiftui"}]')},34:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(43),r=a.n(o),l=(a(57),a(58),a(7)),s=a(13),c=a(1),m=a(2),u=a(4),p=a(3),h=a(5),d=(a(59),a(44)),f=a.n(d),b=a(14),g=(a(60),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={selected:"home"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"tab-bar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.b,{to:"/",className:"/"===this.props.location.pathname?" selected":""},"Home")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/about",className:"/about"===this.props.location.pathname?" selected":""},"About")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/blog",className:this.props.location.pathname.startsWith("/blog/")||"/blog"===this.props.location.pathname?" selected":""},"Blog"))))}}]),t}(i.a.Component)),v=Object(s.h)(g),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-header"},i.a.createElement("img",{id:"header-image",src:f.a,alt:"Logo"}),i.a.createElement("div",{id:"social-icons"},i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/matthew-davidson-5b677b150/"},i.a.createElement(b.f,{size:"2em"})),i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mattDavo"},i.a.createElement(b.d,{size:"2em"})),i.a.createElement("a",{className:"link-icon",href:"mailto:mattdavo15@gmail.com"},i.a.createElement(b.a,{size:"2em"})),i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1cICfzFlLP0tjJas94PhyQvSm1qDhJP5elnOF9gqtvMo/export?format=pdf"},i.a.createElement(b.c,{size:"2em"})),i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/matthew.davidson.33234"},i.a.createElement(b.b,{size:"2em"})),i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/mattydavo15/"},i.a.createElement(b.e,{size:"2em"})),i.a.createElement("a",{className:"link-icon",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/mattdavo"},i.a.createElement(b.g,{size:"2em"}))),i.a.createElement(v,null),i.a.createElement("h1",{id:"header-name"},i.a.createElement("a",{href:"/"},"Matthew Davidson")))}}]),t}(i.a.Component),E=(a(66),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"app-footer"},i.a.createElement("p",{className:"footer-text"},"Copyright \xa9 Matthew Davidson 2020"),i.a.createElement("p",{className:"footer-text"},"Site made with ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"ReactJS"),"."),i.a.createElement("p",{className:"footer-text"},"Source code available on ",i.a.createElement("a",{href:"https://github.com/mattDavo/mattdavo.com"},"Github"),"."))}}]),t}(i.a.Component)),k=(a(67),a(34),a(47)),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=k.map((function(e,t){return i.a.createElement(O,{title:e.title,subtitle:e.subtitle,items:e.items,key:t})}));return i.a.createElement("div",{id:"home"},e)}}]),t}(i.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=(this.props.items||[]).map((function(e,t){var a=(e.tags||[]).map((function(e,t){return i.a.createElement("a",{className:"tag",key:t,href:e.link,style:{backgroundColor:e.color}},e.title)}));return i.a.createElement("div",{className:"section-item",key:t},i.a.createElement("h4",{className:"title link-title section-item-title"},i.a.createElement(l.b,{to:e.link},e.title)),i.a.createElement("h5",{className:"subtitle section-item-subtitle"},e.subtitle),i.a.createElement("p",{className:"section-item-body"},e.body),null!=e.previewImage&&i.a.createElement("img",{className:"section-item-preview-image",src:e.previewImage,alt:e.title}),i.a.createElement("p",null,a))}));return i.a.createElement("div",null,i.a.createElement("div",{className:"title section-heading"},i.a.createElement("h2",{className:"title section-heading-title"},this.props.title)),this.props.subtitle&&i.a.createElement("h4",{className:"subtitle section-subheading"},this.props.subtitle),i.a.createElement("div",{className:"section-items"},e))}}]),t}(i.a.Component),j=w,N=(a(68),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about-container"},i.a.createElement("h1",{className:"title"},"Hello"),i.a.createElement("p",{className:"subtitle"},"Hey I'm Matt, welcome to my site!"),i.a.createElement("p",{className:"subtitle"},"I'm a keen Computer Scientist graduating from the University of New South Wales, Sydney in 2020. I love to work on cool projects, in particular packages and developer tools and am always trying to learn something new to build better software. I have experience working with python as a data engineer and building native iOS and macOS apps. In my spare time I like to contribute to the open source community."),i.a.createElement("p",{className:"subtitle"},"When I'm not behind a keyboard, I'm probably playing golf, listening to music, grabbing a Chicken Parma with mates, travelling the world or all of the above!"))}}]),t}(i.a.Component)),S=a(48),C=a.n(S),I=(a(148),a(348)),x=(a(149),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return i.a.createElement(I.a,{language:t,useInlineStyles:!1,wrapLines:!0},a)}}]),t}(n.PureComponent));x.defaultProps={language:null};var D=x;function P(e){return i.a.createElement("img",Object.assign({},e,{style:{maxWidth:"100%",maxHeight:"600px"},alt:e.src}))}var A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={finished:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.filePath).then((function(e){return e.text()})).then((function(t){e.setState({input:t,finished:!0})})).catch((function(t){console.log(t),e.setState({finished:!0})}))}},{key:"render",value:function(){return this.state.input?i.a.createElement("div",{className:"markdown-container"},i.a.createElement(C.a,{source:this.state.input,renderers:{code:D,image:P},escapeHtml:!1})):this.state.finished?i.a.createElement("div",{className:"markdown-container not-found"},i.a.createElement("h2",null,"There doesn't seem to be anything here...")):i.a.createElement("div",null)}}]),t}(i.a.Component);var T=function(e){var t=Object(s.f)().blog,a=e.blogData.filter((function(e){return e.link==="/blog/".concat(t)}))[0]||{},n=a.title,o=z(a);return console.log(a),i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},n),o,i.a.createElement(A,{filePath:"/blog/".concat(t,".md")}))},M=(a(341),a(19)),W=a(20);function U(e,t){var a=function(e){return W.filter((function(t){return t.id===e}))[0]}(e)||{},n=a.color,o=a.link,r=a.title;return i.a.createElement(l.b,{key:t,className:"tag",to:o,style:{backgroundColor:n}},r)}function z(e){var t=function(e){return e.tags.map(U)}(e),a=new Date(1e3*e.date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});return i.a.createElement("span",{className:"subtitle article-subtitle"},t,i.a.createElement("span",{className:"article-date"},"Published on ",a))}function B(e,t){var a=z(e);return i.a.createElement("div",{key:t},i.a.createElement("hr",null),i.a.createElement("h2",{className:"title article-title link-title"},i.a.createElement(l.b,{to:e.link},e.title)),a,i.a.createElement("p",{className:"subtitle article-summary"},e.summary))}function J(e){return e.map(B)}var L=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=J(M);return i.a.createElement("div",{id:"blog-container"},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/blog"},i.a.createElement("h1",null,"Developer blog"),i.a.createElement("p",null,"Articles on concepts/tips/techniques I learn in my life as a developer."),e),i.a.createElement(s.a,{path:"/blog/:blog"},i.a.createElement(T,{blogData:M,blogTags:W}))))}}]),t}(i.a.Component);a(342);var R=function(){var e=Object(s.f)().tag;if(!W.filter((function(t){return t.id===e}))[0])return i.a.createElement("div",{id:"tags-container"},i.a.createElement("h2",{className:"title centered-text"},"'",e,"' does not match any known tags."));var t=J(M.filter((function(t){return t.tags.includes(e)})));return i.a.createElement("div",{id:"tags-container"},i.a.createElement("h1",{className:"title"},"Articles with tag: ",U(e)),t)};a(343);var q=function(){var e=Object(s.f)().topicId;return i.a.createElement(A,{filePath:"/work/".concat(e,".md")})};var G=function(){var e=Object(s.g)();return i.a.createElement("div",{id:"work-container"},i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"".concat(e.path,"/:topicId")},i.a.createElement(q,null))))},H=a(51),Y=(a(344),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={content:"empty"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"validateNumber",value:function(e){var t=e||window.event,a=t.keyCode||t.which;(t.shiftKey||t.altKey||t.ctrlKey||!(a>=48&&a<=57||a>=96&&a<=105||8===a||9===a||13===a||35===a||36===a||37===a||39===a||46===a||45===a))&&(t.returnValue=!1,t.preventDefault&&t.preventDefault())}},{key:"isSolveable",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=Array.from(e).length,a=Array(t),n=0;n<t;n++){a[n]=Array(t);for(var i=0;i<t;i++)a[n][i]=Array(0)}for(var o=1;o<t+1;o++)for(var r=0;r<t-o+1;r++){var l=r+o-1;if(1===o)a[r][l].push(e[r]),a[r][l].push(-e[r]);else for(var s=function(e){var t=a[r][e],n=a[e+1][l],i=[];t.forEach((function(e){n.forEach((function(t){i.push([e,t])}))}));for(var o=0,s=i;o<s.length;o++){var c=s[o],m=c[0],u=c[1];a[r][l].push(m+u),a[r][l].push(m-u),a[r][l].push(m*u),0!==u&&a[r][l].push(m/u)}a[r][l]=Object(H.a)(new Set(a[r][l]))},c=r;c<l;c++)s(c)}return!!Array.from(a[0][t-1]).includes(10)}},{key:"render",value:function(){var e=this,t="Enter 4 digits",a="title";"solveable"===this.state.content?(a+=" train-solution",t="Solveable!"):"unsolveable"===this.state.content&&(a+=" train-no-solution",t="Unsolveable!");var n=i.a.createElement("h1",{className:a,id:"solveable",style:{display:"block",paddingBottom:"10px"}},t);return i.a.createElement("div",{className:"make-ten-container"},i.a.createElement("h1",{className:"title"},"Train Game Solver"),i.a.createElement("p",{className:"subtitle"},"Solver to the train/bus/ferry/tram/any 4 digit number game. Must make 10 by using all 4 numbers in order. Can use any number of parentheses and the + - \xd7 \xf7 operators."),i.a.createElement("form",{autoComplete:"off"},i.a.createElement("input",{ref:"input",autoComplete:"off",type:"text",id:"input",maxLength:"4",className:"train",placeholder:"1234",size:"4",pattern:"\\d*",onKeyDown:this.validateNumber,onKeyUp:function(t){var a=e.refs.input;if(4===a.value.length){var n=Array.from(a.value).map((function(e){return parseInt(e)}));e.isSolveable(n)?e.setState({content:"solveable"}):e.setState({content:"unsolveable"})}else e.setState({content:"empty"})}})),n,i.a.createElement("p",{className:"subtitle"},"This solution uses dynamic programming where the solution to each subproblem P(i,j) is the set of numbers that can be produced with the subsequence of indexes i to j. We solve subproblems in order of increasing length of subsequence (that is j - i). Then our puzzle is solveable if 10 exists in the set of the solution to P(1,4)."),i.a.createElement("p",{className:"subtitle"},"This solution can easily be extended to solve similar problems with longer sequences and/or a larger range of values allowed for numbers in the sequence since (instead of limiting them to single digits). Additionally, the solution can be easily altered to solve for different numbers, instead of 10. All of these modifications will scale much better than a brute force attempt of placing parentheses and operators in the possible combinations."),i.a.createElement("p",{className:"subtitle"},"I'm yet to find any wrong answers for my solver, but if you do find one, send me an ",i.a.createElement("a",{href:"mailto:mattdavo15@gmail.com"},"email"),"."))}}]),t}(i.a.Component)),F=(a(345),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"not-found-container"},i.a.createElement("h2",null,"Hmmm, yeah there isn't anything here..."),i.a.createElement("h3",{className:"Not-found-subtext"},"Are you sure that you have the right link?"))}}]),t}(n.Component)),K=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(i.a.Component),_=Object(s.h)(K);var V=function(){return i.a.createElement(l.a,null,i.a.createElement(_,null,i.a.createElement("div",{className:"app"},i.a.createElement(y,null),i.a.createElement("div",{className:"app-content"},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:j}),i.a.createElement(s.a,{path:"/work"},i.a.createElement(G,null)),i.a.createElement(s.a,{exact:!0,path:"/make-ten",component:Y}),i.a.createElement(s.a,{exact:!0,path:"/about",component:N}),i.a.createElement(s.a,{path:"/blog",component:L}),i.a.createElement(s.a,{path:"/tags/:tag",component:R}),i.a.createElement(s.a,{component:F}))),i.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,a){e.exports=a.p+"static/media/me.211f12b2.jpg"},47:function(e){e.exports=JSON.parse('[{"title":"Recent Work","items":[{"id":"westpac","title":"Westpac, DDEP","subtitle":"Data Engineer, Jul - Dec 18","body":"Developed Inbound JSON functionality for Data Driven Experiences Platform python framework, which provides the ability to ingest large JSON datasets with optional pre-processing, validate schemas and produce a Hive table on top. Wrote unit tests, increasing code coverage from approximately 60% to 70% (100+ tests).","link":"/work/westpac"},{"title":"Coffee Better","subtitle":"iOS Developer, 2018","body":"Lead iOS developer for coffee better. Built in Swift with Google Firebase for data collecting/storage and Google and Facebook authentication.","link":"/work/coffee-better","tags":[{"title":"APP STORE","link":"https://itunes.apple.com/au/app/coffee-better/id1434229741?mt=8","color":"gray"},{"title":"WEBSITE","link":"https://coffeebetter.com.au/","color":"gray"}]}]},{"title":"Open Source","items":[{"title":"Editor","subtitle":"Grammar Parser and Syntax Highlighter","previewImage":"https://raw.githubusercontent.com/mattDavo/Editor/master/Images/EditorReadMeExample.gif","link":"/work/editor","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/Editor","color":"#23d160"}]},{"title":"Yippy","subtitle":"Open Source Clipboard Manager","previewImage":"https://raw.githubusercontent.com/mattDavo/Yippy/master/images/screenshot.jpg","link":"/work/yippy","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/yippy","color":"#23d160"}]},{"title":"UIImageDefaults","subtitle":"Cocoa Pod","body":"Simple Swift extension for locally saving and loading images with ease.","link":"/work/uiimagedefaults","tags":[{"title":"SOURCE CODE","link":"https://github.com/mattDavo/UIImageDefaults","color":"#23d160"}]}]},{"title":"University Projects","subtitle":"Whilst I\'ve done a lot of interesting projects/assignments at UNSW, lecturers prefer that students don\'t publish the code of their assignments most of the time, to prevent plagiarism from students in later years if the lecturer decides to use the same or a similar assignment again. So here is a collection of uni work that is ok to show:","items":[{"title":"Networks Assignment","subtitle":"COMP3331 - 2019","body":"In this assignment the task was create a peer in a circular distributed hash table, where we required to simulate tasks such as quering for a file, transferring a file and handling peers leaving cleanly and unexpectedly. Watch my demo video to see how I implemented it.","link":"/work/networks-asst","tags":[{"title":"DEMO","link":"https://youtu.be/erY1EcPavtQ","color":"red"}]},{"title":"Instacram","subtitle":"COMP2041 - 2018, Instagram copy","body":"","previewImage":"/images/instacram1.png","link":"/work/instacram"},{"title":"Policy Pilot","subtitle":"React Native App, January 2018","body":"A simple, colourful, proof of concept app built in React Native, to highlight the good, neutral and bad points in the terms and conditions of over 60 web services.","link":"/work/policy-pilot","tags":[{"title":"PLAY STORE","link":"https://play.google.com/store/apps/details?id=com.policypilot&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1","color":"gray"},{"title":"WEBSITE","link":"http://policypilot.dcg.nz/","color":"gray"}]}]},{"title":"Other Fun Projects","items":[{"title":"Masters Shotlink","subtitle":"Classifying golf shots by pixel colors","previewImage":"/images/masters-shotlink2.jpg","link":"/work/masters-shotlink"},{"title":"Train Game Solver","subtitle":"Solver for the classic make 10 game","body":"Solver to the train/bus/ferry/tram/any 4 digit number game. Must make 10 by using all 4 numbers in order. Can use any number of parentheses and the + - \xd7 \xf7 operators.","link":"/make-ten"}]}]')},52:function(e,t,a){e.exports=a(346)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.0d752c0b.chunk.js.map