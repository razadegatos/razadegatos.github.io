HashOver.prototype.postRequest=function(e,t,n,o,i){var s=this,a=e.elements,c=[];function u(a){if(void 0===a.comment)return s.showMessage(a.message,n,o,!0),!1;"edit"!==n?s.AJAXPost.apply(s,[a,o,n]):s.AJAXEdit.apply(s,[a,o]),"function"==typeof i&&i(),s.getElement(a.comment.permalink).scrollIntoView({behavior:"smooth",block:"start",inline:"start"}),e.comment.value="",setTimeout(function(){t.disabled=!1},1e3)}function l(){var n=c.concat([t.name+"="+encodeURIComponent(t.value)]);s.ajax("POST",e.action,n,u,!0)}for(var m=0,r=a.length;m<r;m++)if("submit"!==a[m].type&&("checkbox"!==a[m].type||!0===a[m].checked)){var p=encodeURIComponent(a[m].value);c.push(a[m].name+"="+p)}if(c=c.concat(["time="+HashOver.getClientTime(),"ajax=yes"]),!0!==this.setup["user-is-admin"]&&!1!==this.setup["uses-auto-login"])if(!0!==this.setup["user-is-logged-in"]){var h=c.concat(["login=Login"]);this.ajax("POST",e.action,h,l,!0)}else l();else l();return setTimeout(function(){t.disabled=!1},1e4),!1};