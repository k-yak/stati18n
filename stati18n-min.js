/*!
 * Stati18n v0.0.1
 * stati18n-min.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
$(document).ready(function(){var e=navigator.language||navigator.userLanguage;var t=new Array;$(".stati18n-language-selector").each(function(){t.push(this.getAttribute("value"))});var n=t.indexOf(e);if(n>-1){p=t[n]}else p=t[0];$(".stati18n").addClass(p);$(".stati18n-language-selector").click(function(e){$("."+p).removeClass(p).addClass(this.getAttribute("value"));p=this.getAttribute("value")})})