function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
	
var host = window.location.hostname;
var url = '';
if (host.indexOf('timg') !== -1) {
	url = '//static.danawa.com/new/recss/';
}
else {
	url = "//" + window.location.host + "/css/";
}

$(function(){
	includeHTML();
	
	var links = window.document.getElementsByTagName('link');
	var link_href;
	var rel_val;
	$(links).each(function() {
		rel_val = $(this).attr('rel');
		if(rel_val=="stylesheet"){
			link_href = $(this).attr('href');
			if($(this).data('host')){
				url_re = url.replace("static", $(this).data('host'));
				$(this).attr('href',url_re+link_href);
			}else{
				$(this).attr('href',url+link_href);
			}
		}
	});
});
