(function($,win){
	win.Wine = win.Wine || {}

	Wine.main = {
		init: function(){
			this.initListener();
		},
		initListener: function(){
			Wine.util.backTop();
			Wine.util.navMore();
			$(".s-classify li").on("click", function(){  
				var self = $(this);
				self.addClass('cur').siblings().removeClass('cur');
				
				//选中价格，默认按升序排序
				if(self.attr('value') == 'price'){
					var arrow = self.find('.ico-sort');
					arrow.hasClass('up') ? arrow.addClass('down').removeClass('up'):
					arrow.addClass('up').removeClass('down');
				}else{
					$(".ico-sort").removeClass('down').removeClass('up');
				}
			});

			this.navFixTop("S_classify");  //分类置顶

		
		},
	
		navFixTop: function(el){
			var $target = $('#'+el);
 				dftop = $target.offset().top,
	        	dfcss = [$target.css("position"),$target.css("zindex")],
	       	
			$(win).on('scroll orientationchange', function(){
				win.scrollY > dftop ? $target.css({
	                position: "fixed",
	                top: "0px",
	                left: "0px", 
	                "z-index": "201",
	                width: '100%',
	                background: '#fff'
            	}) : $target.css({
	                position: dfcss[0],
	                "z-index": dfcss[1]
            	});
            });
		}
	}

})(Zepto,window)

$(function(){
	Wine. main.init();
})


