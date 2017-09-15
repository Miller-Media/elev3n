jQuery(document).ready(function(){
	if(jQuery('div#signup-welcome').length > 0){
		jQuery('div#signup-welcome + p.view a[href*="admin-login"]').attr('href','/my-account');
	}
});
