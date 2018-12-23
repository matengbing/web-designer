$('.content li').click(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
});

$('.bottomnav li').click(function(){
	$(this).addClass('nav_active').siblings('li').removeClass('nav_active');
});
