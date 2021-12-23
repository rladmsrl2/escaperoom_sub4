$(function(){
	$('.tab_content > div').hide();
	$('.tab_nav a').click(function () {
		$('.tab_content > div').hide().filter(this.hash).fadeIn();
		$('.tab_nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
