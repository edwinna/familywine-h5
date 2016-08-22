(function($,win){
	win.Wine = win.Wine || {}

	Wine.cart = {
		init: function(){
			this.initListener();
		},
		initListener: function(){
			Wine.util.navMore();
			this.handleCheckAll();
			this.initEditEvent();
		},
		handleCheckAll: function(){
			var cartItems = $('.cart-list li');
			$("#checkAll").on('change', function(){
				if($(this).prop('checked')){   //全选
					cartItems.each(function(){
						$(this).find(".cart-checkbox").attr('checked','checked');
					});
					this.calculateTotal();
				}else{ 
					cartItems.each(function(){   //取消全选
						$(this).find(".cart-checkbox").removeAttr('checked');
					});
				} 
			}) 
		},
		/*
		 ** 计算总价
		 */
		calculateTotal: function(){

		},
		/*
		 ** 购物车数量编辑事件 
		 */
		initEditEvent:function(){
			$(".cart-btn").on('click', 'span.btn-edit', function(e){
				e.stopPropagation();
				var counterContainer = $(this).parents('.cart-num').find('.cart-counter');
				var count = 0;
				counterContainer.removeClass('hide');
				$(this).parent().next().removeClass('hide');
				$(this).parent().addClass('hide');
				Wine.util.counter(counterContainer);
			}).on("click", 'span.btn-delete', function(){
				var self = $(this);
				$.confirm('确定要删除此商品吗?', function () {
          			 $.showIndicator();
          			 setTimeout(function(){
          			 	$.hideIndicator();
          			 	self.parents('.cart-item').remove();
          			 },1500);
      			});
			}).on('click', 'span.btn-complete', function(){
				var counterContainer = $(this).parents('.cart-num').find('.cart-counter');
				$(this).parent().prev().removeClass('hide');
				$(this).parent().addClass('hide');
				counterContainer.addClass('hide');
				count = parseInt(counterContainer.find('.num').val());
				$(this).parents('.cart-num').find(".num-count").text(count);
			});
		}
	}

})(Zepto,window)

$(function(){
	Wine.cart.init();
})