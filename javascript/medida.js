!function(e){"use strict";function t(e,t){if(t)this.valor=e,this.tipo=t;else{t="";var r=e+t;console.log("valor de unit: "+r);var s=/^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i;r=r.match(s),this.valor=r[1],this.tipo=r[2]}}t.matchRegExp=function(e){var t=XRegExp("^\\s*(?<numero> [+-]?\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?)\\s*  # numero  \n(?<tactual> [ckf])\\s+  # TempActual \n(?<to> to\\s+)?(?<tdestino> [ckf])\\s*$ # TempDestino \n","xi"),e=XRegExp.exec(e,t);return e},t.measures={},t.convertir=function(e){if(e=t.matchRegExp(e),!e)return"Fallo";var r=e[1],s=e[2].toLowerCase(),a=e[4].toLowerCase();r=parseFloat(r);var o=t.measures;o.c=Celsius,o.f=Farenheit,o.k=Kelvin;try{var n=new o[s](r),i="to"+o[a].name;return n[i]()}catch(c){return"Imposible"}},e.Medida=t}(this);