(function($,win){
	Wine = win.Wine || {}

	Wine = {
		init: function(){
			this.initListener();
			this.scrollLoadProlist();
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

			this.initSearchEvent();
		},
		
		initSearchEvent: function(){
			
		},
		scrollLoadProlist: function(){
			// 加载flag
      		var loading = false;
      		// 最多可加载的条目
      		var maxItems = 100;

      		// 每次加载添加多少条目
      		var itemsPerLoad = 20;

      		//加载一页的数据
      		function addItems(number, lastIndex) {
              	
              	
          	}
         	//预先加载第一页的10条
      		addItems(itemsPerLoad, 0);

      		// 上次加载的序号
      		var lastIndex = 10;

	      	// 注册'infinite'事件处理函数
	      	$(document).on('infinite', '.infinite-scroll-bottom',function() {

	          // 如果正在加载，则退出
	          if (loading) return;

	          // 设置flag
	          loading = true;

	          // 模拟1s的加载过程
	          setTimeout(function() {
	              // 重置加载flag
	              loading = false;

	              if (lastIndex >= maxItems) {
	                  // 加载完毕，则注销无限加载事件，以防不必要的加载
	                  $.detachInfiniteScroll($('.infinite-scroll'));
	                  // 删除加载提示符
	                  $('.infinite-scroll-preloader').remove();
	                  return;
	              }

	              // 添加新条目
	              addItems(itemsPerLoad, lastIndex);
	              // 更新最后加载的序号
	              lastIndex = $('.pro-list li').length;
	              //容器发生改变,如果是js滚动，需要刷新滚动
	              $.refreshScroller();
	          }, 1000);
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