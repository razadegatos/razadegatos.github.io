HashOverConstructor.jsonp=[function(t){alert(t.message)}],HashOverConstructor.prototype.jsonp=function(t,e,n,o,s){var r=this.constructor.toString().match(/function (\w+)/)[1];this.constructor.jsonp.push(o),n.push("jsonp="+(this.constructor.jsonp.length-1)),n.push("jsonp_object="+r||"HashOver");var a=document.createElement("script");a.src=e+"?"+n.join("&"),a.async=s,document.body.appendChild(a)},HashOverConstructor.prototype.ajax=function(t,e,n,o,s){var r=this,a=arguments,i=function(){var t=JSON.parse(this.responseText);o.apply(this,[t])},p=function(){r.jsonp.apply(r,a),r.ajax=r.jsonp};if("withCredentials"in new XMLHttpRequest){var u=new XMLHttpRequest;return u.onreadystatechange=function(){if(4===this.readyState)return 200===this.status?i.apply(this):0===this.status?p():void 0},u.open(t,e,s),u.setRequestHeader("Content-type","application/x-www-form-urlencoded"),u.withCredentials=!0,void u.send(n.join("&"))}if("undefined"!=typeof XDomainRequest){var c=new XDomainRequest;return c.open(t,e),c.onload=i,c.onerror=p,void setTimeout(c.send,0)}p()};