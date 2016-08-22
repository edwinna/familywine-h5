(function($,win){
	win.Wine = win.Wine || {}

	Wine.user = {
		init: function(){
			Wine.util.navMore();
		}
	}

})(Zepto,window)

$(function(){
	Wine.user.init();
})