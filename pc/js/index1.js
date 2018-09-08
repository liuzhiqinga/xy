/*
 * 文档就绪
 */
$(function() {
	
	//获得回到顶部按钮对象
	var topcontrol = $('#topcontrol');
	
	//获得导航条对象
	var nav = $('.nav-wrap');
	
	//获得导航条相对于网页原点的位置
	var navPos = nav.offset().top;
	
	//导航条高度
	var navHeight = nav.outerHeight();
	
	$(window).scroll(function() {
		
		//滚动条位置
		var sTop = $(window).scrollTop();
		
		if (sTop >= 200) {
			topcontrol.fadeIn('normal');	
		} else {
			topcontrol.fadeOut('normal');
		} 
		
		//给导航条加fixed样式
		if (sTop >= navPos) {
			
			if ( !nav.hasClass('fix') ) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);//占位
				
			} 

		} else {
			nav.removeClass('fix');
			$('.banner').css('margin-bottom',0);//取消占位
			
		}
		
		//判断是否进入海量正版免费下区域
		var introPos = {
			start:$('.post-intro').offset().top - navHeight,
			end:$('.post-intro').offset().top + $('.post-intro').outerHeight() - navHeight
		}
		if (sTop >= introPos.start && sTop < introPos.end) {
			$('.intro').addClass('active');
		} else {
			$('.intro').removeClass('active');
		}
		
		//判断是否进入无需苹果账号区域
		var usagePos = {
			start:$('.post-usage').offset().top - navHeight,
			end:$('.post-usage').offset().top + $('.post-usage').outerHeight() - navHeight
		}
		if (sTop >= usagePos.start && sTop < usagePos.end) {
			$('.usage').addClass('active');
		} else {
			$('.usage').removeClass('active');
		}
		
		//判断是否进入手机瘦身区域
		var choicePos = {
			start:$('.choiceness').offset().top - navHeight,
			end:$('.choiceness').offset().top + $('.choiceness').outerHeight() - navHeight
		}
		if (sTop >= choicePos.start && sTop < choicePos.end) {
			$('.choice').addClass('active');
		} else {
			$('.choice').removeClass('active');
		}
	});
	
	//回到顶部按钮单击
	topcontrol.click(function() {
		
		$('html,body').animate({
			scrollTop:0
		},1000)
	});
	
	//网页内部锚点跳转链接
	$('.nav-wrap a').click(function() {
		
		//板块位置
		var top = $(this.hash).offset().top - navHeight + 7;
		
		$('html,body').animate({
			scrollTop:top
		},1000);
		
		
	});
	
	
});
