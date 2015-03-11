$('.how-it-works-btn').click(function() {
	
	var how_it_works = [
							'<div class="how-it-works-dropdown">',
							'<div class="how-it-works-x">',
							'<span style="float:right" class="how-it-works-x-link" onclick="closeit()">x</span>',
							'</div>',
							'<div class="how-it-works-content">',
							'<div class="how-it-works-header">',
							'<h1>How It Works</h1>',
							'</div>',
							'<div class="how-it-works-point">',
							'<object type="image/svg+xml" data="img/icons/person154.svg" width="100px" height="100px" style="fill:#569e26"></object>',
							'<h2>Find Travel Buddies Anywhere.</h2>',
							'<p>Discover friendly locals with personalities like yours around the world, and enlist them to help you with your travel plans.</p>',
							'</div>',
							'<div class="how-it-works-point">',
							'<object type="image/svg+xml" data="img/icons/map29.svg" width="100px" height="100px" style="fill:#569e26"></object>',
							'<h2>Personalize Your Itineraries.</h2>',
							'<p>Your travel buddy will communicate with you through video chat to help plan logistics and customized activities. If desired, you can also meet up with them in person.</p>',
							'</div>',
							'<div class="how-it-works-point">',
							'<object type="image/svg+xml" data="img/icons/earth188.svg" width="100px" height="100px" style="fill:#569e26"></object>',
							'<h2>Experience Life as a Local.</h2>',
							'<p>Enjoy off-the-beaten-path activities like crab fishing in Taiwan or underground food touring in Los Angeles. We\'ll help you feel like a local wherever you are.</p>',
							'</div>',
							'</div>',
							'</div>'
						]

	$('.navbar-fixed-top').prepend(how_it_works.join(''));
	

});


function closeit() {
	console.log("OK");
	$('.how-it-works-dropdown').remove();

}

$('.how-it-works-x-link').click(function() {
	console.log("OK")
	$('.how-it-works-dropdown').empty();
});


$(window).load(function() {
	"use strict";
	
	//preloader
    $('.preloader img').fadeOut();
	$('.preloader').delay(300).fadeOut(1000);
	
	
	//Full page settings
	$('#fullpage').fullpage({
		anchors: ['intro', 'story', 'benefits'],
		scrollOverflow: true,
		menu: '#nav',
		scrollingSpeed: 750,
		slidesNavigation: false,
		autoScrolling: true,
		css3:false
	});
	
	//countdown timer
	$(function(){
		$('#future-date').countdowntimer({
			dateAndTime : getDateAndTime()
		});
	});
	
	
	//tooltip settings
	$('.tool-tip').tooltip();
	
	
	/* skill bars animation  */
	$('.skills-wrap').appear(function(){
		$('.bar-percentage[data-percentage]').each(function () {
			var progress = $(this);
			var percentage = Math.ceil($(this).attr('data-percentage'));
			$({countNum: 0}).animate({countNum: percentage}, {
				duration: 1500,
				easing:'linear',
				step: function() {
					// What todo on every count
					var pct = Math.floor(this.countNum+1) + '%';
					progress.text(pct) && progress.siblings().children().css('width',pct);
				}
			});
		});
	});
	
	
	
	// campaign monitor subscription
	// form settings	
	$(function () {
		$('#sub-form').on('submit', function (e) {
			e.preventDefault();
			$.getJSON(
			this.action + "?callback=?",
			$(this).serialize(),
			function (data) {
				if (data.Status === 400) {
					alert("Error: " + data.Message);
				} else { // 200
					alert("Success: " + data.Message);
				}
			});
		});
	});


});


// get date and time function
function getDateAndTime(){
	var dateTime = $('#countdowntimer').attr('data-date-time');
	return dateTime;
}