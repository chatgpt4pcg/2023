(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7185:function(e,t,n){var r=n(9070);function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n(7991)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(i=a))}),e.splice(i,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=a,t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())},7991:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=+new Date,a=e-(r||e);n.diff=a,n.prev=r,n.curr=e,r=e;for(var i=Array(arguments.length),o=0;o<i.length;o++)i[o]=arguments[o];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(e,r){if("%%"===e)return e;s++;var a=t.formatters[r];if("function"==typeof a){var o=i[s];e=a.call(n,o),i.splice(s,1),s--}return e}),t.formatArgs.call(n,i),(n.log||t.log||console.log.bind(console)).apply(n,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n)|0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(9065),t.names=[],t.skips=[],t.formatters={}},3341:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,i[a]))return!1;for(a=r;0!=a--;){var r,a,i,o=i[a];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},7499:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,a){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof r&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async=!("async"in r)||!!r.async,o.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(o,r.attrs),r.text&&(o.text=""+r.text),("onload"in o?t:n)(o,a),o.onload||t(o,a),i.appendChild(o)}},9065:function(e){function t(e,t,n){return e<t?void 0:e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n;case"days":case"day":case"d":return 864e5*n;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(e);if("number"===r&&!1===isNaN(e))return n.long?t(e,864e5,"day")||t(e,36e5,"hour")||t(e,6e4,"minute")||t(e,1e3,"second")||e+" ms":e>=864e5?Math.round(e/864e5)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=6e4?Math.round(e/6e4)+"m":e>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},7064:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6662)}])},5046:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527),a=n(9265),i=n.n(a);function o(e){let{pageTitle:t}=e,n="The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds";return t&&(n="".concat(n," - ").concat(t)),(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:"The 1st ChatGPT4PCG Competition challenges participants to use ChatGPT to generate a Science Birds level resembling an English capital letter, with stability and similarity to the letter being evaluated through testing, and offers a chance for prompt engineers to demonstrate their creativity and skills."}),(0,r.jsx)("meta",{name:"google-site-verification",content:"zP3knJHTSO5RclPqlwXpxPbPT3Paw17OMhL69EbHW0E"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})}n(959)},1312:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1527),a=n(6928);n(959);var i=n(7846),o=n(8107);function s(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{id:"submission-deadline",children:"Submission deadline"}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("span",{className:"line-through",children:"Midterm: 19 May 2023 (23:59 JST)"})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)("span",{className:"line-through",children:"Final: 29 July 2023 21 July 2023 (23:59 JST)"})}),(0,r.jsx)(a.Z,{children:"If OpenAI releases an update to free-version web-based ChatGPT one week before the deadline (either for the midterm or final), we will extend the deadline by one week to give participants enough time to adjust their prompts. We will notify all participants who have submitted their work by email if this occurs. We will also make an announcement on our website."}),(0,r.jsx)(a.Z,{children:"Midterm submission is optional, although we recommend it. Any team that submits during the mid-term submission will be notified of the preliminary results. However, all teams, whether they submit during the midterm or not, must submit during the final submission period. Only submissions during the final submission period will be considered for the final ranking."})]})}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(3910),i=n.n(a);function o(e){let{style:t}=e;return(0,r.jsx)("hr",{className:i().divider,style:t})}},6033:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1527),a=n(6197);n(959);var i=n(4115),o=n.n(i);function s(e){let{src:t,alt:n,width:i=1,height:s=1,noBorderRadius:l=!1}=e;return 1===i&&1===s?(0,r.jsx)("div",{className:o().imageContainer,children:(0,r.jsx)(a.Z,{src:t,alt:n,className:o().image,layout:"responsive",width:i,height:s,style:l?{borderRadius:0}:void 0})}):(0,r.jsx)("div",{className:o().imageContainer,children:(0,r.jsx)(a.Z,{src:t,alt:n,className:o().image,width:i,height:s,style:l?{borderRadius:0}:void 0})})}},7942:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(5975),i=n.n(a);function o(e){let{children:t}=e;return(0,r.jsx)("h1",{className:i().header,children:t})}},8803:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(1527),a=n(959),i=n(8472),o=n.n(i);function s(){return(0,r.jsx)("footer",{className:o().footer,children:(0,r.jsx)("p",{children:'"Standing on the shoulders of giants"'})})}var l=n(4233),c=n(8407),u=n(7418),d=n(9919),h=n.n(d),p=n(2241),f=n(604),m=n.n(f),g=n(2349);function y(){let e=(0,g.useRouter)(),[t,n]=a.useState(!1),i=t?p.Z:a.Fragment;return(0,r.jsx)(i,{children:(0,r.jsxs)("nav",{className:t?"".concat(m().navContainer," ").concat(m().mobileActive):m().navContainer,children:[(0,r.jsxs)("div",{className:m().mobileNav,children:[(0,r.jsx)(h(),{href:"/",children:"ChatGPT4PCG"}),(0,r.jsx)("button",{className:m().hamburger,onClick:()=>n(e=>!e),children:t?(0,r.jsx)(l,{style:{width:"36px",height:"36px"}}):(0,r.jsx)(c,{style:{width:"36px",height:"36px"}})})]}),(0,r.jsxs)("ul",{className:t?"".concat(m().navigation," ").concat(m().mobileActive):m().navigation,children:[(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/prizes"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/prizes",children:"Prizes"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/prompt"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/prompt",children:"Prompt"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/submission"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/submission",children:"Submission"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/evaluation"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/evaluation",children:"Evaluation"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/rules"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/rules",children:"Rules"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/result"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/result",children:"Result"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/resources"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/resources",children:"Resources"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/supplement"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/supplement",children:"Supplementary Material"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat("/changelog"==e.pathname?m().active:""),children:(0,r.jsx)(h(),{href:"/changelog",children:"Changelog"})}),(0,r.jsx)("li",{className:"".concat(m().navItem," ").concat(m().special),children:(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/chatgpt4pcg/chatgpt4pcg.github.io",rel:"noopener",children:["GitHub"," ",(0,r.jsx)(u,{style:{width:"12px",height:"12px"}})]})})]})]})})}var v=n(3097),b=n.n(v);function x(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)("main",{className:b().layout,children:[t,(0,r.jsx)(s,{})]})]})}},3429:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(8977),i=n.n(a);function o(e){let{children:t}=e;return(0,r.jsx)("h2",{className:i().pageSubHeader,children:t})}},6928:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(2938),i=n.n(a);function o(e){let{children:t}=e;return(0,r.jsx)("p",{className:i().paragraph,children:t})}},7846:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(7992),i=n.n(a);function o(e){let{children:t}=e;return(0,r.jsx)("section",{className:i().section,children:t})}},8107:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var a=n(3056),i=n.n(a);function o(e){let{children:t,id:n}=e;return n?(0,r.jsx)("h2",{id:n,className:i().sectionHeader,children:(0,r.jsx)("a",{href:"#".concat(n),children:t})}):(0,r.jsx)("h2",{id:n,className:i().sectionHeader,children:t})}},6662:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(1527),a=n(959),i=n(6611),o=n(6028),s=n.n(o);function l(e){let{header:t,children:n,level:a="info"}=e;return(0,r.jsxs)("section",{className:s().container,children:[t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{className:"".concat(s().header," ").concat(s()[a]),children:(0,r.jsx)("h1",{children:t})}),(0,r.jsx)(i.Z,{style:{borderColor:{info:"#77E9C9",warning:"rgb(233, 201, 119)",error:"#E97777"}[a]}})]}),n]})}var c=n(4712),u=n.n(c);function d(e){let{header:t,items:n}=e;return(0,r.jsxs)("figure",{className:u().container,children:[(0,r.jsxs)("figcaption",{className:u().listHeader,children:[t,": "]}),(0,r.jsx)("ul",{className:u().list,children:n.map(e=>(0,r.jsx)("li",{className:u().listItem,children:e},e))})]})}var h=n(6033),p=n(9919),f=n.n(p),m=n(7942),g=n(8803),y=n(5046),v=n(3429),b=n(6928),x=n(7846),P=n(8107),j=n(1312),_=n(507),w=n.n(_),C=n(3341),N=n.n(C),S=n(905),E=n.n(S),A=Object.defineProperty,k=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&Z(e,n,t[n]);if(T)for(var n of T(t))R.call(t,n)&&Z(e,n,t[n]);return e},B=(e,t)=>k(e,I(t)),L=(e,t,n)=>new Promise((r,a)=>{var i=e=>{try{s(n.next(e))}catch(e){a(e)}},o=e=>{try{s(n.throw(e))}catch(e){a(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,o);s((n=n.apply(e,t)).next())});function V(e={}){return B(D({},e),{height:0,width:0,playerVars:B(D({},e.playerVars),{autoplay:0,start:0,end:0})})}var G={videoId:w().string,id:w().string,className:w().string,iframeClassName:w().string,style:w().object,title:w().string,loading:w().oneOf(["lazy","eager"]),opts:w().objectOf(w().any),onReady:w().func,onError:w().func,onPlay:w().func,onPause:w().func,onEnd:w().func,onStateChange:w().func,onPlaybackRateChange:w().func,onPlaybackQualityChange:w().func},M=class extends a.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,n;return null==(n=(t=this.props).onReady)?void 0:n.call(t,e)},this.onPlayerError=e=>{var t,n;return null==(n=(t=this.props).onError)?void 0:n.call(t,e)},this.onPlayerStateChange=e=>{var t,n,r,a,i,o,s,l;switch(null==(n=(t=this.props).onStateChange)||n.call(t,e),e.data){case M.PlayerState.ENDED:null==(a=(r=this.props).onEnd)||a.call(r,e);break;case M.PlayerState.PLAYING:null==(o=(i=this.props).onPlay)||o.call(i,e);break;case M.PlayerState.PAUSED:null==(l=(s=this.props).onPause)||l.call(s,e)}},this.onPlayerPlaybackRateChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackRateChange)?void 0:n.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,n;return null==(n=(t=this.props).onPlaybackQualityChange)?void 0:n.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}let e=B(D({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=E()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then(e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n,r;if(void 0===this.props.videoId||null===this.props.videoId){null==(e=this.internalPlayer)||e.stopVideo();return}let a=!1,i={videoId:this.props.videoId};if((null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(i.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(i.endSeconds=this.props.opts.playerVars.end)),a){null==(n=this.internalPlayer)||n.loadVideoById(i);return}null==(r=this.internalPlayer)||r.cueVideoById(i)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return L(this,null,function*(){var t,n,r,a,i,o;t=this.props,(e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(i=t.opts)?void 0:i.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title)&&this.updatePlayer(),o=this.props,e.videoId===o.videoId&&N()(V(e.opts),V(o.opts))||(yield this.resetPlayer()),function(e,t){var n,r;if(e.videoId!==t.videoId)return!0;let a=(null==(n=e.opts)?void 0:n.playerVars)||{},i=(null==(r=t.opts)?void 0:r.playerVars)||{};return a.start!==i.start||a.end!==i.end}(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return a.createElement("div",{className:this.props.className,style:this.props.style},a.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}};M.propTypes=G,M.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},M.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var U=n(1553),H=n.n(U);function z(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,r.jsx)(m.Z,{children:"Character-like Level Generation for Science Birds"}),(0,r.jsxs)(l,{header:"Announcement",children:[(0,r.jsxs)(b.Z,{children:["Congratulations to the ",(0,r.jsx)(f(),{href:"/result",children:"winner"})," of the 1st ChatGPT4PCG Competition! \uD83C\uDF89And thank you to all the participants for your hard work and dedication! \uD83D\uDE4F"]}),(0,r.jsx)(b.Z,{children:"See you in the next edition of the competition!"})]}),(0,r.jsx)(h.Z,{src:"/images/logo.png",alt:"Competition logo"}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(b.Z,{children:"The 1st ChatGPT4PCG Competition challenges participants to utilize the state-of-the-art natural language processing tool, ChatGPT, to generate visually appealing and structurally sound levels for Science Birds, an Angry Birds clone created for research purposes."}),(0,r.jsx)(b.Z,{children:"As a participant, your goal is to create a prompt that instructs ChatGPT to generate a level in Science Birds that resembles an English capital letter while ensuring that the level is stable and able to withstand gravity. You are encouraged to use various prompt engineering techniques to develop the most effective prompt possible."}),(0,r.jsx)(b.Z,{children:"To participate, you must submit your prompt according to our guidelines. We will then generate a number of samples, each of which will undergo rigorous testing for stability and similarity. Stability will be evaluated by loading the level in Science Birds and examining the ratio of unmoved blocks after 10 seconds of the initialization. The similarity of each generated level to its corresponding English character will be determined using an open-source Vision Transformer (ViT)-based classifier model. The stability testing system and the instructions to use the classifier model, as well as all the relevant tools, will be provided."}),(0,r.jsx)(b.Z,{children:"This competition offers a unique opportunity for the best prompt engineers from around the world to showcase their creativity and skills. Join us in this exciting challenge to push the boundaries of prompt engineering and procedural content generation!"}),(0,r.jsx)(M,{videoId:"9AJhqIkDbxs",title:"The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds",className:"youtube-player",opts:{innerWidth:540},loading:"lazy"})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(P.Z,{id:"organizers",children:"Organizers"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Pittawat Taveekitworachai, Graduate School of Information Science and Engineering, Ritsumeikan University"}),(0,r.jsx)("li",{children:"Febri Abdullah, Graduate School of Information Science and Engineering, Ritsumeikan University"}),(0,r.jsx)("li",{children:"Mury F. Dewantoro, Graduate School of Information Science and Engineering, Ritsumeikan University"}),(0,r.jsx)("li",{children:"Ruck Thawonmas, College of Information Science and Engineering, Ritsumeikan University"}),(0,r.jsx)("li",{children:"Julian Togelius, NYU Tandon School of Engineering, New York University"}),(0,r.jsx)("li",{children:"Jochen Renz, School of Computing, The Australian National University"})]})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(P.Z,{id:"contact",children:"Contact"}),(0,r.jsxs)(b.Z,{children:["Email address:"," ",(0,r.jsx)("a",{href:"mailto:chatgpt4pcg@gmail.com",children:"chatgpt4pcg@gmail.com"})]})]}),(0,r.jsx)(j.Z,{}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(P.Z,{id:"paper",children:"Paper"}),(0,r.jsxs)(b.Z,{children:["Please see"," ",(0,r.jsx)("a",{rel:"noopener",target:"_blank",href:"https://arxiv.org/abs/2303.15662",children:"our paper"})," ","about this competition and"," ",(0,r.jsx)("a",{href:"/files/supplementary_material.pdf",children:"its supplementary document"}),"."]})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(P.Z,{id:"other-info",children:"Other information"}),(0,r.jsx)(d,{header:"Keywords",items:["ChatGPT","Prompt engineering","Procedural content generation","Level generation","Conversational agent","Large language model","Angry Birds","Science Birds"]}),(0,r.jsx)(d,{header:"Programming languages",items:["N/A. However, having general programming knowledge can be useful."]}),(0,r.jsx)(d,{header:"Complexity",items:["Low-Medium"]}),(0,r.jsx)(d,{header:"Competitive",items:["New Competition"]}),(0,r.jsx)(d,{header:"Barrier of entry",items:["Low"]})]}),(0,r.jsxs)("div",{className:H().cogLogoContainer,children:[(0,r.jsx)("h4",{className:H().cogLogoHeader,children:"As a part of "}),(0,r.jsx)("div",{className:H().cogLogo,children:(0,r.jsx)("a",{rel:"noopener",target:"_blank",href:"https://2023.ieee-cog.org/competitions/",children:(0,r.jsx)(h.Z,{src:"/images/cog-2023-logo.png",alt:"Competition logo",noBorderRadius:!0})})})]})]})]})}},6028:function(e){e.exports={container:"AlertBox_container__KvnIA",header:"AlertBox_header___G1zB",error:"AlertBox_error__7z1mD",info:"AlertBox_info__Y2kL7",warning:"AlertBox_warning__1i0EC"}},3910:function(e){e.exports={divider:"Divider_divider__JbhDI"}},8472:function(e){e.exports={footer:"Footer_footer__ZlhCn"}},4712:function(e){e.exports={container:"HorizontalList_container__i3ntN",listHeader:"HorizontalList_listHeader__9Bj8T",listItem:"HorizontalList_listItem__sMuCB"}},4115:function(e){e.exports={imageContainer:"Image_imageContainer__V2F_u",image:"Image_image__BZedz"}},604:function(e){e.exports={navigation:"NavBar_navigation__lJrRZ",navItem:"NavBar_navItem__6SlwR",special:"NavBar_special__djIqR",active:"NavBar_active__YhcBa",mobileNav:"NavBar_mobileNav__goelc",navContainer:"NavBar_navContainer__sfg_R",mobileActive:"NavBar_mobileActive__fdiDu",hamburger:"NavBar_hamburger__yUJy_"}},5975:function(e){e.exports={header:"PageHeader_header__6RG4R"}},3097:function(e){e.exports={layout:"PageLayout_layout__0Pyas"}},8977:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__JuO84"}},2938:function(e){e.exports={paragraph:"Paragraph_paragraph__DWytN"}},7992:function(e){e.exports={section:"Section_section__ZoPpr"}},3056:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__nZp5M"}},1553:function(e){e.exports={cogLogoHeader:"index_cogLogoHeader__0tZv3",cogLogoContainer:"index_cogLogoContainer__d_GiD",cogLogo:"index_cogLogo__pb1qV"}},4049:function(e,t,n){"use strict";var r=n(6257);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},507:function(e,t,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1241:function(e){"use strict";e.exports=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,a=t[e];if(a)for(r=a.length;r--;)a[r].handler(n)},e}},6644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(9e3))&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},8868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(7185)),a=s(n(8078)),i=s(n(2732)),o=s(n(6644));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),c={};c.proxyEvents=function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,a=!1,o=void 0;try{for(var s,c=i.default[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value;n(u)}}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return t},c.promisifyPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&o.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then(function(e){var t=o.default[r],a=e.getPlayerState(),i=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise(function(n){e.addEventListener("onStateChange",function r(){var a=e.getPlayerState(),i=void 0;"number"==typeof t.timeout&&(i=setTimeout(function(){e.removeEventListener("onStateChange",r),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(i),n())})}).then(function(){return i}):i})}:n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then(function(e){return e[r].apply(e,n)})}},i=!0,s=!1,l=void 0;try{for(var c,u=a.default[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var d=c.value;r(d)}}catch(e){s=!0,l=e}finally{try{!i&&u.return&&u.return()}finally{if(s)throw l}}return n},t.default=c,e.exports=t.default},9e3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},2732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8078:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=s(n(1241)),i=s(n(2425)),o=s(n(8868));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,a.default)();if(l||(l=(0,i.default)(s)),t.events)throw Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw Error('Element "'+e+'" does not exist.');t.events=o.default.proxyEvents(s);var c=new Promise(function(n){(void 0===e?"undefined":r(e))==="object"&&e.playVideo instanceof Function?n(e):l.then(function(r){var a=new r.Player(e,t);return s.on("ready",function(){n(a)}),null})}),u=o.default.promisifyPlayer(c,n);return u.on=s.on,u.off=s.off,u},e.exports=t.default},2425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(7499))&&r.__esModule?r:{default:r};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){t(window.YT);return}var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}})},e.exports=t.default}},function(e){e.O(0,[613,197,774,888,179],function(){return e(e.s=7064)}),_N_E=e.O()}]);