(function($,win){
	win.Wine = win.Wine || {}

	Wine.util = {
		/*
		* 点击更多菜单
		*/

		navMore: function(){
			$(".icon-app").on("click", function(){
				$(".nav-more").toggleClass('hide');
			});
		},

		/*
		* 回到顶部
		*/

		backTop: function(){
			var $goTop = $("#S_gotop");
			var h = window.innerHeight || window.screen.height;
			
			$(win).on('scroll', function(){
				(window.pageYOffset < 1.2* h) ? $goTop.addClass('hide') : $goTop.removeClass('hide');
			});
			$goTop.on("click", function(){
				win.scrollTo(0,0); 
			});
		},

		/*
		* 计数器计数
		*/

		counter: function(counterEl){
			counterEl.off('click').on("click", "a.num-oper", function(e){
				e.stopPropagation ();
				var $quantity = $(this).siblings('.num');
				var count = parseInt($quantity.val());
				if($(this).attr('value') == 'quantityMinus' && count > 0){
					count = count - 1;
				}else if($(this).attr('value') == 'quantityPlus'){
					count = count + 1;
				}
				$quantity.val(count);
			})
		}
	}
  
})(Zepto,window)

