HashOverConstructor.prototype.embedImage=function(e,t,a){var s=a.split("#")[0];if(s=(s=(s=s.split("?")[0]).split(".")).pop(),this.setup["image-extensions"].indexOf(s)>-1){var r=this.createElement("span",{className:"hashover-embedded-image-wrapper"});return r.appendChild(this.createElement("img",{className:"hashover-embedded-image",src:this.setup["image-placeholder"],title:this.locale["external-image-tip"],alt:"External Image",dataset:{placeholder:this.setup["image-placeholder"],url:a}})),r.outerHTML}return t};