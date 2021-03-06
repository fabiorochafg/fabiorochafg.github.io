/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

$(document).ready(function() {

	/* Menu */
	$('nav a, .anchor').on('click', function (e) {
		$("nav a").removeClass("active");
		$(this).toggleClass("active");
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() == 0) {
			$("nav a").removeClass("active");
			$("header p").removeClass("opacity");
		} else {
			$("header p").addClass("opacity");
		}
        if ($(this).scrollTop() <= $(window).height()-50) {
        	$("nav").removeClass("menufixo");
            $("nav").css("bottom", $(this).scrollTop());
        } else {
            $("nav").addClass("menufixo");
        }
    });

});

/* Google Analyctis */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41913842-1', 'fabiorochafg.github.io');
ga('send', 'pageview');