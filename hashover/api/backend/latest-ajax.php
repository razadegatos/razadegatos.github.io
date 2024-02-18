<?php namespace HashOver;chdir(realpath('../../'));if(isset($_GET['jsonp'])){require('backend/javascript-setup.php');}else{require('backend/json-setup.php');}try{$hashover=new \HashOver('json');$hashover->setup->apiCheck('latest');$hashover->setup->setupRemoteAccess();if($hashover->setup->getRequest('url')!==false){$hashover->setup->setPageURL('request');}else{$hashover->setup->setThreadName('request');$hashover->setup->setWebsite('request');}$hashover->initiate();$hashover->finalize();$data=array();$data['locale']=array('dislike'=>$hashover->locale->text['dislike'],'dislikes'=>$hashover->locale->text['dislikes'],'external-image-tip'=>$hashover->locale->text['external-image-tip'],'like'=>$hashover->locale->text['like'],'likes'=>$hashover->locale->text['likes'],'today'=>$hashover->locale->text['date-today'],'commenter-tip'=>$hashover->locale->text['commenter-tip'],'subscribed-tip'=>$hashover->locale->text['subscribed-tip'],'unsubscribed-tip'=>$hashover->locale->text['unsubscribed-tip'],'replies'=>$hashover->locale->text['replies'],'reply'=>$hashover->locale->text['reply'],'loading'=>$hashover->locale->text['loading'],'click-to-close'=>$hashover->locale->text['click-to-close']);$data['setup']=array('server-eol'=>PHP_EOL,'default-name'=>$hashover->setup->defaultName,'user-is-logged-in'=>$hashover->login->userIsLoggedIn,'image-extensions'=>$hashover->setup->imageTypes,'image-placeholder'=>$hashover->setup->getImagePath('place-holder'),'theme-css'=>$hashover->setup->getThemePath('latest.css'),'image-format'=>$hashover->setup->imageFormat,'device-type'=>($hashover->setup->isMobile===true)?'mobile':'desktop','allows-images'=>$hashover->setup->allowsImages,'uses-markdown'=>$hashover->setup->usesMarkdown);$data['ui']=array('user-avatar'=>$hashover->ui->userAvatar(),'name-link'=>$hashover->ui->nameElement('a'),'name-span'=>$hashover->ui->nameElement('span'),'thread-link'=>$hashover->ui->threadLink(),'reply-link'=>$hashover->ui->formLink('{href}','reply'),'like-count'=>$hashover->ui->likeCount('likes'),'dislike-count'=>$hashover->ui->likeCount('dislikes'),'name-wrapper'=>$hashover->ui->nameWrapper(),'date-link'=>$hashover->ui->dateLink(),'theme'=>$hashover->templater->parseTheme('latest.html'),'comment-wrapper'=>$hashover->ui->commentWrapper());$get_thread=$hashover->setup->threadName?:'auto';if($get_thread!=='auto'){$latest=$hashover->thread->data->readMeta('latest-comments',$get_thread);}else{$latest=$hashover->thread->data->readMeta('latest-comments','auto',true);}if($latest!==false){$latest=array_slice($latest,0,$hashover->setup->latestMax);}else{$latest=array();}$comments=array();foreach($latest as $raw){$key=$raw['comment'];$key_parts=explode('-',$key);$page_info=$hashover->thread->data->readMeta('page-info',$raw['thread']);if($page_info===false){continue;}$comment=$hashover->commentParser->parse($raw,$key,$key_parts);$comment=array_merge($page_info,$comment);$comments[]=$comment;}$data['instance']=array('comments'=>array('primary'=>$comments),'total-count'=>count($comments));$hashover->statistics->executionEnd();$data['statistics']=array('execution-time'=>$hashover->statistics->executionTime,'script-memory'=>$hashover->statistics->scriptMemory,'system-memory'=>$hashover->statistics->systemMemory);echo Misc::jsonData($data);}catch(\Exception $error){echo Misc::displayException($error,'json');}