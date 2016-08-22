(function($, win){
	win.Wine = win.Wine || {};
	Wine.order = {
		init: function(){
			Wine.util.navMore();
		}
	}
})(Zepto, window)


$(function(){
	Wine.order.init();
}) 