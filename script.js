$(function(){
	$('#top-btn').click(function(){
		$('html,body').animate({
			'scrollTop':0
		},500);
	});
	$(".menu-trigger").click(function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")) {
			$(".slide-menu-nav").addClass("open");
		} else {
			$(".slide-menu-nav").removeClass("open");
		}
		return false;
	})
});
