<?php namespace HashOver;require('backend/javascript-setup.php');try{$settings=new Settings();$statistics=new Statistics('javascript');$statistics->executionStart();$javascript=new JavaScriptBuild('frontend');$javascript->registerFile('loader-constructor.js');$javascript->registerFile('onready.js');$javascript->registerFile('script.js');$javascript->registerFile('rootpath.js');$javascript->registerFile('cfgqueries.js');$output=$javascript->build($settings->minifiesJavascript,$settings->minifyLevel);echo $output,PHP_EOL;echo $statistics->executionEnd();}catch(\Exception $error){echo Misc::displayException($error,'javascript');}