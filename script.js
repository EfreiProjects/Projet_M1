$(document).ready(function(){
	headerScrollEffect();
	scrollTo();
});

function headerScrollEffect(){
	$(window).scroll(function(){
		position = $(document).scrollTop();
		if(position > 0)   
			$('#header.floating').addClass('shadow');
		else  
        	$('#header.floating').removeClass('shadow');
	});
}

function scrollTo(){
	$('.scrollTo').click(function(){
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 400 );
		return false;
	});
}