HashOverConstructor.prototype.rx.html={linksReplace:'<a href="$1" rel="noopener noreferrer" target="_blank">$1</a>',lines:/(?:\r\n|\r|\n)/g,code:{open:/<code>/i,replace:/(<code>)([\s\S]*?)(<\/code>)/gi,marker:/CODE_TAG\[([0-9]+)\]/g},pre:{open:/<pre>/i,replace:/(<pre>)([\s\S]*?)(<\/pre>)/gi,marker:/PRE_TAG\[([0-9]+)\]/g},trimTags:{open:/<(blockquote|ul|ol)>/,replace:/(<(blockquote|ul|ol)>)([\s\S]*?)(<\/\2>)/gi}},HashOverConstructor.prototype.parseComment=function(e,t,i,r){t=t||null;var s=this,a=e.permalink,l=this.prefix(a),n="hashover-name-plain",h=e.date,p=0,o=[],m=0,c=[],u="",d="",v=this.prefix(),k={hashover:v,permalink:a},f=a.slice(1).split("r").pop();if(!0===r?(null!==(t=this.permalinkParent(a))&&(t=this.permalinkComment(t,this.instance.comments.primary)),f=f.replace("-pop","")):(null!==t&&(u+=" hashover-reply"),!0===i&&this.instance["total-count"]>0&&(this.instance.collapseLimit>=this.setup["collapse-limit"]?u+=" hashover-hidden":this.instance.collapseLimit++)),k.avatar=this.strings.parseTemplate(this.ui["user-avatar"],{src:e.avatar,href:l,text:f}),void 0===e.notice){var g=e.name||this.setup["default-name"],T=e.website,x="@"===g.charAt(0);if(!0===x){n="hashover-name-twitter";var b=(g=g.slice(1)).length;b>1&&b<=30&&void 0===T&&(T="http://twitter.com/"+g)}if(void 0!==T){!1===x&&(n="hashover-name-website");var w=this.strings.parseTemplate(this.ui["name-link"],{hashover:v,href:T,permalink:a,name:g})}else w=this.strings.parseTemplate(this.ui["name-span"],{hashover:v,permalink:a,name:g});if(void 0!==(e.url&&e.title)&&(k["thread-link"]=this.strings.parseTemplate(this.ui["thread-link"],{url:e.url,title:e.title})),null!==t&&void 0!==this.ui["parent-link"]){var y="hashover-"+t.permalink,C=t.name||this.setup["default-name"];k["parent-link"]=this.strings.parseTemplate(this.ui["parent-link"],{hashover:v,href:e.url||this.instance["file-path"],parent:y,permalink:a,name:C})}if(void 0!==e["user-owned"]){u+=" hashover-user-owned";var E=this.locale["commenter-tip"],O="hashover-no-email"}else if(!0===e.subscribed)E=g+" "+this.locale["subscribed-tip"],O="hashover-has-email";else E=g+" "+this.locale["unsubscribed-tip"],O="hashover-no-email";void 0!==(e.editable&&this.ui["edit-link"])&&(k["edit-link"]=this.strings.parseTemplate(this.ui["edit-link"],{hashover:v,href:e.url||this.instance["file-path"],permalink:a})),!1!==this.setup["allows-likes"]&&this.optionalMethod("addRatings",[e,k,"like",a]),!1!==this.setup["allows-dislikes"]&&this.optionalMethod("addRatings",[e,k,"dislike",a]),k.name=this.strings.parseTemplate(this.ui["name-wrapper"],{class:n,link:w}),void 0!==e["status-text"]&&(h+=" ("+e["status-text"]+")"),k.date=this.strings.parseTemplate(this.ui["date-link"],{hashover:v,href:e.url||this.instance["file-path"],permalink:"hashover-"+a,title:e["date-time"],date:h}),k["reply-link"]=this.strings.parseTemplate(this.ui["reply-link"],{hashover:v,href:e.url||this.instance["file-path"],permalink:a,class:O,title:E}),void 0!==e.replies&&(k["reply-count"]=e.replies.length,k["reply-count"]>0&&(1!==k["reply-count"]?k["reply-count"]+=" "+this.locale.replies:k["reply-count"]+=" "+this.locale.reply));var R=e.body.replace(this.rx.links,this.rx.html.linksReplace);if(!1!==s.setup["allows-images"]&&(R=R.replace(this.rx.imageTags,function(e,t,i){return s.optionalMethod("embedImage",arguments)})),void 0!==this.parseMarkdown&&(R=this.parseMarkdown(R)),!0===this.rx.html.code.open.test(R)){R=R.replace(this.rx.html.code.replace,function(e,t,i,r){var a=t+"CODE_TAG["+p+"]"+r;return o[p]=s.EOLTrim(i),p++,a})}if(!0===this.rx.html.pre.open.test(R)){R=R.replace(this.rx.html.pre.replace,function(e,t,i,r){var a=t+"PRE_TAG["+m+"]"+r;return c[m]=s.EOLTrim(i),m++,a})}if(!0===this.rx.html.trimTags.open.test(R)){R=R.replace(this.rx.html.trimTags.replace,function(e,t,i,r,a){return t+s.EOLTrim(r)+a})}for(var A=R.split(this.rx.paragraphs),L="",M=0,_=A.length;M<_;M++){L+="<p>"+A[M].replace(this.rx.html.lines,"<br>")+"</p>"+this.setup["server-eol"]}p>0&&(L=L.replace(this.rx.html.code.marker,function(e,t){return o[t]})),m>0&&(L=L.replace(this.rx.html.pre.marker,function(e,t){return c[t]})),k.comment=L}else u+=" hashover-notice "+e["notice-class"],k.comment=e.notice,k.name=this.strings.parseTemplate(this.ui["name-wrapper"],{class:n,link:e.title});var G=this.strings.parseTemplate(this.ui.theme,k);if(void 0!==e.replies){u+=" hashover-has-replies";for(M=0,_=e.replies.length;M<_;M++)d+=this.parseComment(e.replies[M],e,i)}return this.strings.parseTemplate(this.ui["comment-wrapper"],{hashover:v,permalink:a,class:u,html:G+d})};