$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("canvas").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
   // $("body").toggleClass("push-left");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

/* scroll top */
//Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  // home button scroll down
  $('.home-btn').click(function(){

  var WH = $(window).height();  
 // alert(WH);
  var SH = 1323;//$('body').prop("scrollHeight");
 // alert(SH);
  $('html, body').stop().animate({scrollTop: SH-WH}, 1000);

}); 
 
});

// calannder
$(window).load( function() {
		$('#mycalendar').monthly({
			mode: 'event',
			xmlUrl: 'events.xml'
		});
		$('#mycalendar2').monthly({
			mode: 'picker',
			target: '#mytarget',
			setWidth: '250px',
			startHidden: true,
			showTrigger: '#mytarget',
			stylePast: true,
			disablePast: true
		});
	switch(window.location.protocol) {
	case 'http:':
	case 'https:':
	// running on a server, should be good.
	break;
	case 'file:':
	//alert('Just a heads-up, events will not work when run locally.');
	}
	});
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navmenu-fixed-left").addClass("top-nav-collapse");
    } else {
        $(".navmenu-fixed-left").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.sidebar-anchor, .findmore').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
$(document).ready( function() {
$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("right") === "-76px") {
				$("#style-switcher").animate({
					right: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					right: "-76px"
				});
			}
		});
	
	// setting gear
		$('.settings').hover(
		  function () {
			//$(this).children('i').addClass("fa-spin");
		  },
		  function () {
		//	$(this).children('i').removeClass("fa-spin");
		  }
		);
	
});
