$(function(){
	$('.main_visual').each(function() {
		var $visual = $(this);
		var $visualContent = $('>.visual-content', $visual);
		var options = {
			slides : '>li',
			timeout: 2400,
			fx: 'fade',
			log: false,
			pauseOnHover: false,
			pagerActiveClass: 'on'
		};
		var $prev = $('.btn_prev', $visual).each(function(){
			options.prev = this;
		});
		var $next = $('.btn_next', $visual).each(function(){
			var $this = $(this);
			
			options.next = this;
			
			setTimeout(function(){
				$this.click();
			}, 1000);
		});
		var $pager = $('.btn_pager', $visual).each(function(){
			options.pager = this;
			options.pagerTemplate = '';
			options.pagerEvent = 'mouseover';
		});
		
		var $pauseAndPlay = $('.btn_pager_play', $visual);
		
		$pauseAndPlay.on("click", function(event){
			event.preventDefault();
			
			if($pauseAndPlay.hasClass("on")){
				$pauseAndPlay.removeClass("on");
				$visualContent.cycle("resume");
			}else{
				$pauseAndPlay.addClass("on");
				$visualContent.cycle("pause");
			}
		});
		
		$visualContent.cycle(options);
	});
	
	var lan_ch = false;
	$("#language ul").hide()
	
	$("#language p").click(function(){
		if(lan_ch == false){
			$("#language ul").slideDown()
			lan_ch = true;
		}else if(lan_ch == true){
			$("#language ul").slideUp()
			lan_ch = false;
		}
	})
	
	$(".gnb li").mouseover(function(){
		$(this).siblings('li').removeClass("on");
		$(this).addClass("on");
	});
	
	
	$('.check_circle li').first().addClass('on')

	$('.notice ul li').hover(function(){
		$('.notice ul li').removeClass('on');
		$(this).addClass('on');
	});
	$('.notice ul li').on('mouseleave',function(){
		$('.notice ul li').removeClass('on');
	});
	
	/*
	$('.tab li').on('click',function(){
		$('.tab li').removeClass('selected')
		$(this).addClass('selected');
	})
	*/

	$('.sitemap_open').on('click',function(){
		$('body').addClass('on')
		$('.sitemap').css('display','block');
	})
	$('.sitemap_close').on('click',function(){
		$('body').removeClass('on');
		$('.sitemap').css('display','none');
	})
	
	$('#con_bottom .roll_prev').on('click',function(){
		rolling_prev()
	})

	$('#con_bottom .roll_next').on('click',function(){
		rolling_next()
	})
	
	var cnt = 0, timer = 0, delay = 2000, size=$('.rolling li').size()
	timer = setInterval(rolling,delay);
	function rolling(){
		rolling_prev();
	}

	$('#con_bottom').on('mouseover',function(){
		clearInterval(timer);
	})
	$('#con_bottom').on('mouseout',function(){
		timer = setInterval(rolling,delay);
	})
	
})

function rolling_prev(){
	$('.rolling').prepend($('.rolling li:last-child'));
}
function rolling_next(){
	$('.rolling').append($('.rolling li:first-child'));
}