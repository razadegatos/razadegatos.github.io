HashOverConstructor.prototype.classes=new function(){if(document.documentElement.classList)return this.contains=function(s,t){return s.classList.contains(t)},this.add=function(s,t){s.classList.add(t)},void(this.remove=function(s,t){s.classList.remove(t)});this.contains=function(s,t){return!(!s||!s.className)&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(s.className)},this.add=function(s,t){s&&!this.contains(s,t)&&(s.className+=(s.className?" ":"")+t)},this.remove=function(s,t){if(s&&s.className){var n=new RegExp("(^|\\s)"+t+"(\\s|$)","g");s.className=s.className.replace(n,"$2")}}};