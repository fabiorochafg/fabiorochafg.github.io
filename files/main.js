/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

$(document).ready(function() {
	$("#header, #header > div").css("height", $(window).height());

	/* Menu */
	$('#menu li:not(.language) a').on('click',function (e) {
		$("#menu a").removeClass("active");
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
			$("#menu a").removeClass("active");
		}
        if ($(this).scrollTop() <= $(window).height()-50) {
        	$("#menu").removeClass("menufixo");
            $("#menu").css("bottom", $(this).scrollTop());
        } else {
            $("#menu").addClass("menufixo");
        }
    });

});

$(window).load(function(){
	/* Portfolio */
	$('#portfolio .box').masonry({
	  	itemSelector: '.box3'
	});
	$("#portfolio .box3").each(function(){
    	$(this).find("div").css("height", $(this).find("img").height());
    });
});

/* Google Analyctis */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41913842-1', 'fabiorochafg.github.io');
ga('send', 'pageview');