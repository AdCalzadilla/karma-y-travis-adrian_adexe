!function(t){"use strict";function e(t,e){if(e)this.valor=t,this.tipo=e;else{e="";var o=t+e;console.log("valor de unit: "+o);var r=/^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i;o=o.match(r),this.valor=o[1],this.tipo=o[2]}}function o(t,o){e.call(this,t,o)}function r(t){o.call(this,t,"c")}function n(t){o.call(this,t,"f")}function i(t){o.call(this,t,"k")}o.prototype=Object.create(e.prototype),o.prototype.constructor=o,r.prototype=Object.create(o.prototype),r.prototype.toFarenheit=function(){return new n(1.8*this.valor+32)},r.prototype.toKelvin=function(){return new i(this.valor+273.15)},r.prototype.toString=function(){return this.valor.toFixed(2)+" C"},r.prototype.constructor=r,n.prototype=Object.create(o.prototype),n.prototype.toCelsius=function(){return new r((this.valor-32)/1.8)},n.prototype.toKelvin=function(){return new i(5*(this.valor+459.67)/9)},n.prototype.toString=function(){return this.valor.toFixed(2)+" F"},n.prototype.constructor=n,i.prototype=Object.create(o.prototype),i.prototype.toCelsius=function(){return new r(this.valor-273.15)},i.prototype.toFarenheit=function(){return new n(1.8*this.valor-459.67)},i.prototype.toString=function(){return this.valor.toFixed(2)+" K"},i.prototype.constructor=i,t.Temperatura=o,t.Celsius=r,t.Farenheit=n,t.Kelvin=i,t.convertir=function(){var t=document.getElementById("convert").value,e=document.getElementById("converted"),o=XRegExp("^\\s*(?<numero> [+-]?\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?)\\s*  # numero  \n(?<tactual> [ckf])\\s+  # TempActual \n(?<to> to\\s+)?(?<tdestino> [ckf])\\s*$ # TempDestino \n","xi"),t=t.match(o);if(t){var a=t[1],c=t[2].toLowerCase(),s=t[4].toLowerCase();a=parseFloat(a),console.log("Valor: "+a+", Temperatura actual: "+c+", Temperatura a convertir: "+s);var l=c+s;switch(e.className="salidaValido",l){case"cf":var p=new r(a);e.innerHTML=p.toFarenheit().toString();break;case"ck":var p=new r(a);e.innerHTML=p.toKelvin().toString();break;case"fc":var u=new n(a);e.innerHTML=u.toCelsius().toString();break;case"fk":var u=new n(a);e.innerHTML=u.toKelvin().toString();break;case"kc":var v=new i(a);e.innerHTML=v.toCelsius().toString();break;case"kf":var v=new i(a);e.innerHTML=v.toFarenheit().toString();break;default:e.className="salidaError",e.innerHTML=" Conversión imposible"}}else e.className="salidaError",e.innerHTML="Error, cadena incorrecta. Ejemplo válido: -3.5e2c to f"}}(this);