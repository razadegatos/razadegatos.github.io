HashOver.prototype.parseAll=function(e,n,t,r){for(var o="",a=0,s=e.length;a<s;a++)o+=this.parseComment(e[a],null,t,r);var i=Date.now();"insertAdjacentHTML"in n?(n.textContent="",n.insertAdjacentHTML("beforeend",o)):n.innerHTML=o;var l=Date.now()-i;for(a=0,s=e.length;a<s;a++)this.addControls(e[a]);return l};