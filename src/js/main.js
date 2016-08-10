(function($,win){
	Wine = win.Wine || {}

	Wine = {
		init: function(){
			this.initListener();
		},
		initListener: function(){
			var $goTop = $("#S_gotop");
			var h = window.innerHeight || window.screen.height;
			
			$(win).on('scroll', function(){
				(window.pageYOffset < 1.2* h) ? $goTop.addClass('hide') : $goTop.removeClass('hide');
			})
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

			$goTop.on("click", function(){
				win.scrollTo(0,0); 
			});
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
	Wine.init();
})


