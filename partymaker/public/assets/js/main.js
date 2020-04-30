$(document).ready(function(){
	$(window).on('load', function(){
		setTimeout(function(){
			$(".loader").fadeOut();
		},1000);
		
	})
$(".audio-down").hide();
	$(".audio-up").click(function(){
		$('audio').each(function(){
			this.pause(); // Stop playing
			this.currentTime = 0; // Reset time
		});
		$(this).hide();
		$(".audio-down").fadeIn();
		
		
		
	})

	$(".audio-down").click(function(){
		$('audio').each(function(){
			this.play(); // Stop playing
			this.currentTime = 0; // Reset time
		});
	
				$(this).hide();
		$(".audio-up").fadeIn();
		
		
	})
	$(".start-promo").on('click', function(){
		$(".intro-1").animate({
			'top': '-120vh'
		}, 700)
	})
	$(".start-promo-2").on('click', function(){
		$(".intro-2").animate({
			'top': '-120vh'
		}, 700)
	})
	$(".start-promo-3").on('click', function(){
		$(".intro-3").animate({
			'top': '-120vh'
		}, 700)
	})
	$(".start-promo-4").on('click', function(){
		$(".intro-4").animate({
			'top': '-120vh'
		}, 700)
	})
	$(".start-promo-5").on('click', function(){
		$(".intro-5").animate({
			'top': '-120vh'
		}, 700)
		 $("html, body").animate({ scrollTop: 0 }, 0);
	})
	$(".start-promo-7").on('click', function(){
		$(".scroll-container").fadeOut('Slow');
		$(".intro-7").fadeIn();
		 $("html, body").animate({ scrollTop: 0 }, 0);
	})

	$(".up-1").on('click', function(){
		$(".intro-1").animate({
			'top': '0vh'
		}, 700)
	})
	$(".up-2").on('click', function(){
		$(".intro-2").animate({
			'top': '0vh'
		}, 700)
	})
	$(".up-3").on('click', function(){
		$(".intro-3").animate({
			'top': '0vh'
		}, 700)
	})
	$(".up-4").on('click', function(){
		$(".intro-4").animate({
			'top': '0vh'
		}, 700)
	})
	$(".up-5").on('click', function(){
		$(".intro-5").animate({
			'top': '0vh'
		}, 700)
	})
	$(".up-7").on('click', function(){
		$(".intro-7").hide();
		$(".scroll-container").fadeIn();
	})

	$(".restart").on('click', function(){
		$(".intro").show();
		$(".intro").animate({
			'top': '0'
		}, 700)
	})
})
