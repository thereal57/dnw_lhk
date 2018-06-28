$(function(){
	var host = window.location.hostname;
	var url = '';
	
	var links = window.document.getElementsByTagName('link');
	var link_href;
	var rel_val;
	$(links).each(function() {
		rel_val = $(this).attr('rel');
		if(rel_val=="stylesheet"){
			link_href = $(this).attr('href');
			
			if (host.indexOf('markup-local') !== -1) {
				url = '//static-local.danawa.com/new/recss/';
				$(this).attr('href',url+link_href);
			}
			else {
				url = '//static.danawa.com/new/recss/';
}
				if($(this).data('host')){
					url_re = url.replace("static", $(this).data('host'));
					$(this).attr('href',url_re+link_href);
				}else{
					$(this).attr('href',url+link_href);
				}
			}
		}
	});
});
