HashOverConstructor.prototype.getElement=function(t,e){return t=!0===e?t:this.prefix(t),document.getElementById(t)},HashOverConstructor.prototype.elementExists=function(t,e,n){var r=this.getElement(t,n);return null!==r&&e(r)};