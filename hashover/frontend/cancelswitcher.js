HashOver.prototype.cancelSwitcher=function(t,e,n,c){var l={textContent:e.textContent,title:e.title,onclick:e.onclick};function i(){return n.textContent="",e.textContent=l.textContent,e.title=l.title,e.onclick=l.onclick,!1}if(e.textContent=this.locale.cancel,e.title=this.locale.cancel,e.onclick=i,!1!==this.setup["uses-cancel-buttons"]){var o=t+"-cancel-"+c;this.getElement(o).onclick=i}};