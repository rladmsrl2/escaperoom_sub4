$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.icon_top').fadeIn();
    } else {
        $('.icon_top').fadeOut();
    }
});

/*이코디언*/
$(function(){
	$(".box1-1> ul> li").click(function(){
		$(this).children("div").slideToggle();
		$(this).toggleClass('on').siblings().removeClass('on');
		$(this).siblings().children("div").slideUp();
        $(".box1-2> ul> li").children("div").slideUp();
        $(".icon_top").children("div").slideUp();
	});
    $(".box1-2> ul> li").click(function(){
		$(this).children("div").slideToggle();
		$(this).toggleClass('on').siblings().removeClass('on');
		$(this).siblings().children("div").slideUp();
        $(".box1-1> ul> li").children("div").slideUp();
        $(".icon_top").children("div").slideUp();
	});
    $(".icon_top").click(function(){
        $(".box1-1> ul> li").children("div").slideUp();
        $(".box1-2> ul> li").children("div").slideUp();
	});
});