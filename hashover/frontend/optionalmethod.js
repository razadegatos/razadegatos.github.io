HashOverConstructor.prototype.optionalMethod=function(t,o,i){var n=i?this[i][t]:this[t],r=i?this[i]:this;if(n&&"function"==typeof n)return n.apply(r,o)};