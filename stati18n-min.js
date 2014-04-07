/*!
 * Stati18n v0.0.1
 * stati18n-min.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
$(document).ready(function(){var e=new Array;$(".stati18n-language-selector").each(function(){e.push(this.getAttribute("value"))});var t=e[0];$(".stati18n").addClass(t);$(".stati18n-language-selector").click(function(e){$("."+t).removeClass(t).addClass(this.getAttribute("value"));t=this.getAttribute("value")})})