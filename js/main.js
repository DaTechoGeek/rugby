//========================================================
//==================BLOG==================================
//========================================================
	$('.blog-posts').hover(
		function(){
			$(this).find('.hover-background').stop().animate({bottom: 0}, 150, 'easeOutQuad');
			$(this).find('.content-blog').stop().animate({bottom: 0}, 400, 'easeOutQuad');
			$(this).find('.content-blog p').stop().animate({bottom: 0}, 400, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: 0}, 250, 'easeOutQuad');
		}, 
		function(){
			$(this).find('.hover-background').stop().animate({bottom: -350}, 250, 'easeOutQuad');
			$(this).find('.content-blog').stop().animate({bottom: -350}, 200, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: -350}, 200, 'easeOutQuad');
		});
