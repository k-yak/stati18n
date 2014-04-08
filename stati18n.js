/*!
 * Stati18n v0.0.1
 * stati18n.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
 
$( document ).ready(function() {
	var ul = navigator.language || navigator.userLanguage; 
	var l = new Array();
	
	$('.stati18n-language-selector').each(function() {
		l.push(this.getAttribute('value'));
	});
	
	var i = l.indexOf(ul);
	if( i > -1 )
	{
		p = l[i]
	}
	else p = l[0];
	
	$('.stati18n').addClass(p);
			
	$('.stati18n-language-selector').click(function (e) {
		$('.'+p).removeClass(p).addClass(this.getAttribute('value'));
		p = this.getAttribute('value');
	});
});