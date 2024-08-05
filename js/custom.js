//Page Loading Content
if( $('.pgLoad').length > 0 )
{
	$(window).on('load',function(){
		$('.pgLoad').hide();
	})
}


/*-- -- -- -- -||
Revolution slider Start
||- -- -- -- --*/
$(document).ready(function() {
	$('.vrRevSldR').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		asNavFor: '.vrRevTxSldR',
	});

	
	$('.vrRevTxSldR').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		asNavFor: '.vrRevSldR',
	});
});
/*-- -- -- -- -||
Revolution slider End
||- -- -- -- --*/