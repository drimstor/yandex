$(document).ready(function(){


	document.body.onload = function() {

		setTimeout(function(){
			var preloader = document.getElementById('page-preloader');
			if(!preloader.classList.contains('done'))
			{
				preloader.classList.add('done');
			}
		}, 1000);
	}

// Слайдер


$('.scrl').slick({
	arrows:true,
	dots:true,
	slidesToShow:1,
	autoplay:false,
	speed:1000,
	autoplaySpeed:2000,
	// centerMode: true,
	responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow:1
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow:1
			}
		}
	]
});

	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		// centerMode: true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});





});
