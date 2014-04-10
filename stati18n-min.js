/*!
 * Stati18n v0.0.1
 * stati18n-min.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
$(document).ready(function(){var e=navigator.language||navigator.userLanguage;var t=new Array;$(".stati18n-language-selector").each(function(){t.push(this.getAttribute("value"))});$("body").append('<div id="stati18n-infos"></div>');var n=$("#stati18n-infos").css("content");n=n.replace(/'/g,"");var r=n.split(" ");var i=r[0];var s=r.slice(1,r.length);$("#stati18n-infos").remove();var o=t.indexOf(e);if(o>-1){e=t[o]}else e=t[0];$(".stati18n").addClass(e);$(".stati18n-language-selector").click(function(t){$("."+e).removeClass(e).addClass(this.getAttribute("value"));e=this.getAttribute("value");var n=i+"stati18n-"+e+".css";if(!$("link[href='"+n+"']").length&&$.inArray(e,s)>=0)$("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />')})})