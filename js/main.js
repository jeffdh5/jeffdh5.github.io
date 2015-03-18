window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

$('.how-it-works-btn').click(function() {
	if (window.mobilecheck()==false) {
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
								'<object type="image/svg+xml" data="img/icons/person154.svg" class="icon"></object>',
								'<h2>Find Travel Buddies Anywhere.</h2>',
								'<p>Discover friendly locals with personalities like yours around the world, and enlist them to help you with your travel plans.</p>',
								'</div>',
								'<div class="how-it-works-point">',
								'<object type="image/svg+xml" data="img/icons/map29.svg" class="icon"></object>',
								'<h2>Personalize Your Itineraries.</h2>',
								'<p>Your travel buddy will communicate with you through video chat to help plan logistics and customized activities. If desired, you can also meet up with them in person.</p>',
								'</div>',
								'<div class="how-it-works-point">',
								'<object type="image/svg+xml" data="img/icons/earth188.svg" class="icon"></object>',
								'<h2>Experience Life as a Local.</h2>',
								'<p>Enjoy off-the-beaten-path activities like crab fishing in Taiwan or underground food touring in Los Angeles. We\'ll help you feel like a local wherever you are.</p>',
								'</div>',
								'</div>',
								'</div>'
							]
	} else {
				var how_it_works = [
								'<div class="how-it-works-dropdown">',
								'</div>'
							]
	};


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