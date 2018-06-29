var host = window.location.hostname;
var url = '';

$(function(){
	var links = window.document.getElementsByTagName('link');
	var link_href;
	var rel_val;
	var link_split;
	var link_host;
	var link_re;
	
	$(links).each(function() {
		rel_val = $(this).attr('rel');
		if(rel_val=="stylesheet" && host.indexOf('markup-local') !== -1){
			link_href = $(this).attr('href');
			
			link_split = link_href.split("/");
			link_host = link_split[2];
			
			link_re = link_href.replace(link_host,"static-local.danawa.com");
			$(this).attr('href', link_re);
		}
	});
});
