/*!
 * Stati18n v0.0.1
 * stati18n.js
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
 
$( document ).ready(function() {
	var userLanguage = navigator.language || navigator.userLanguage; 
	var languageList = new Array();
	
	$('.stati18n-language-selector').each(function() {
		languageList.push(this.getAttribute('value'));
	});
	
	//get info about css files
	$('body').append('<div id="stati18n-infos" style="display:none;"></div>');
	
	var infos = $("#stati18n-infos").css("content");
	//TODO change for slice
	infos = infos.slice(1, infos.length-1);
	var infosTab = infos.split(" ");
	
	var host = infosTab[0];
	var languages = infosTab.slice(1, infosTab.length);
	$('#stati18n-infos').remove();
	
	//get static content
	$('body').append('<div id="stati18n-fixed-values" style="display:none;"></div>');

	var infos = $("#stati18n-fixed-values").css("content");
	infos = infos.slice(1, infos.length-1);
	var fixedTab = infos.split(";;");
	
	$('#stati18n-fixed-values').remove();
	
	var i = languageList.indexOf(userLanguage);
	if( i > -1 )
	{
		userLanguage = languageList[i]
	}
	else userLanguage = languageList[0];
	
	$('.stati18n').addClass(userLanguage);
	updateStatic();
	
	/****** FUNCTION ******/ 
	
	//Add static content
	function updateStatic()
	{
		for(var ind in fixedTab)
		{
			var line = fixedTab[ind];
			var lineSplit = line.split("§§");
			var currentLanguage = lineSplit[0];
			if(currentLanguage == userLanguage)
			{
				var id = lineSplit[1];
				var content = lineSplit[2];
				
				if(typeof($(".s18n-"+id).attr("value")) != 'undefined')
					$(".s18n-"+id).attr("value", content);
				else
					$(".s18n-"+id).html(content);
			}
		}
	}
	
	/****** EVENTS ******/ 
				
	$('.stati18n-language-selector').click(function (e) {
		$('.'+userLanguage).removeClass(userLanguage).addClass(this.getAttribute('value'));
		userLanguage = this.getAttribute('value');
		var file = host+'stati18n-'+userLanguage+'.css';
		if (!$("link[href='"+file+"']").length && $.inArray(userLanguage, languages)>=0)
			$('head').append('<link rel="stylesheet" href="'+file+'" type="text/css" />');
		updateStatic();
	});
});