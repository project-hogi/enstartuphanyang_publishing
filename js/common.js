$(function(){
	
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
	
	
})

