/*!
 * Stati18n v0.0.1
 * stati18n.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
 
$( document ).ready(function() {
	var userLanguages = navigator.language || navigator.userLanguage; 
	var languageList = new Array();
	
	$('.stati18n-language-selector').each(function() {
		languageList.push(this.getAttribute('value'));
	});
	
	$('body').append('<div id="stati18n-infos"></div>');
	
	var infos = $("#stati18n-infos").css("content");
	infos = infos.replace(/'/g, '');
	var infos_tab = infos.split(" ");
	
	var host = infos_tab[0];
	var languages = infos_tab.slice(1, infos_tab.length);
	$('#stati18n-infos').remove();
	
	var i = languageList.indexOf(userLanguages);
	if( i > -1 )
	{
		userLanguages = languageList[i]
	}
	else userLanguages = languageList[0];
	
	$('.stati18n').addClass(userLanguages);
			
	$('.stati18n-language-selector').click(function (e) {
		$('.'+userLanguages).removeClass(userLanguages).addClass(this.getAttribute('value'));
		userLanguages = this.getAttribute('value');
		var file = host+'stati18n-'+userLanguages+'.css';
		if (!$("link[href='"+file+"']").length && $.inArray(userLanguages, languages)>=0)
			$('head').append('<link rel="stylesheet" href="'+file+'" type="text/css" />');
	});
});