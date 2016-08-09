(function($,win){
	Wine = win.Wine || {}

	Wine.dview = {
		init: function(){
			this.initListener();
			this.configSwiper();
		},
		initListener: function(){
			var $goTop = $("#S_gotop");
			var h = window.innerHeight || window.screen.height;
			var self = this;
			$(win).on('scroll', function(){
				(window.pageYOffset < 1.2* h) ? $goTop.addClass('hide') : $goTop.removeClass('hide');
			})

			$("#S_detail li").on("click", function(){  
				var self = $(this);
				self.addClass('cur').siblings().removeClass('cur');
			});

			//加入购物车
			$("#S_add_cart").on('click', function(){
				self.addToCart();
			})
		},
		configSwiper: function(){
			var config = {
				speed: 400,
			    spaceBetween: 100
			};
			$(".swiper-container").swiper(config); 
		},
		addToCart: function(){
			var $badge = $("#S_cart").find(".badge");
			var count = parseInt($badge.html().toString());
			if(isNaN(count)){
				$badge.removeClass('hide');
				count = 0;
			}
			$badge.html(++count); 
		}
	}

})(Zepto,window)

$(function(){
	Wine.dview.init();
})