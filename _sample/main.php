<!DOCTYPE html>
<?PHP
	echo "hello";
?>
<html lang="ko">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="default.css">
<link rel="stylesheet" type="text/css" href="common.css">
<link rel="stylesheet" type="text/css" href="navigation.css" data-host="static-t">
<link rel="stylesheet" type="text/css" href="dictionary.css">
<link rel="stylesheet" type="text/css" href="shopping_clip.css">
<link rel="stylesheet" type="text/css" href="goods_list.css" data-host="static-branch-t">
<script type="text/javascript" src="//static.danawa.com/globaljs/external/jquery/core/last/jquery-last.min.js?v=1806140936"></script>
<script type="text/javascript" src="//markup.danawa.com/common.js"></script>
<title>Document</title>
</head>
<body>
	<div id="skip_navigation">
		<a href="#danawa_content" onclick="document.getElementById('danawa_content').tabIndex=-1;document.getElementById('danawa_content').focus();return false;"><span>주메뉴 바로가기</span></a>
		<a href="#main_content_start" onclick="document.getElementById('main_content_start').tabIndex=-1;document.getElementById('main_content_start').focus();return false;"><span>본문으로 바로가기</span></a>
	</div>
	<div id="danawa_wrap">
		
		<div id="danawa_header"><?PHP include 'header.html'; ?></div> 
		<div id="danawa_main_container">
			<div>
				<p style="text-align:center"><br /><br /><br /><br /><br /><br /><br />상품리스트 컨텐츠 html include<br /><br /><br /><br /><br /><br /><br /></p>
			</div>
		</div>
		<div class="footer_bottom_area"><?PHP include 'footer.html'; ?></div> 
	</div>
</body>
</html>