<?php 
class FileManager{
	
	public function getContent($fileName)
	{
		if(file_exists($fileName))
			return simplexml_load_file($fileName);
		else
			throw new Exception("File not found : ".$fileName);
	}
	
	public function createFile($xml)
	{
		$fp = fopen($xml->file->name,"wb");
		$minify = ("true" == $xml->file->minified);
		$insertion = $xml->file->insertion;
		if("before" != $insertion && "after" != $insertion)
		{
			// Defaut after
			$insertion = "after";
		}
		fwrite($fp, "/*!
 * Generated by Stati18n v0.0.1
 * ".$xml->file->name."
 * Created by Florian Rotagnon
 * Licensed under MIT
 */
 ");
		foreach($xml->language->text as $text)
		{
			$id = $text['id'];

			foreach($text->translation as $translation)
			{
				
				$language = $translation['lang'];
				$data = $translation[0];
				if(!$minify)
				{
					fwrite($fp, "
.stati18n.".$language.".s18n-".$id.":".$insertion." {
    content: \"".$data."\";
}
");
				}
				else
				{
					fwrite($fp, ".stati18n.".$language.".s18n-".$id.":".$insertion."{content:\"".$data."\";}");
				}
			
			}
		}
        
        if (isset($xml->language->title)) {
            $title = $xml->language->title;
            
            foreach($title->translation as $translation)
			{
				$language = $translation['lang'];
				$data = $translation[0];
                
			     if(!$minify)
				{
					fwrite($fp, "
.stati18n.".$language.".s18n-title {
    content: \"".$data."\";
}
");
				}
				else
				{
					fwrite($fp, ".stati18n.".$language.".s18n-title{content:\"".$data."\";}");
				}
			}
        }

				
		fclose($fp);
	}
}

/*Script start*/
if (2 !== $argc) {
    echo "Usage: php $argv[0] [name.xml]\n";
    exit(1);
}

$fm = new FileManager();

try{
	$domArr = $fm->getContent($argv[1]);
	$fm->createFile($domArr);	
	
	echo "Stati18n  : compilation success";
}
catch(Exception $e)
{
	echo $e->getMessage();
}

?> 