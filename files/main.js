/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

$(document).ready(function() {
	$("#header, #header > div").css("height", $(window).height());
	$(".preview-bluray-dvd-cd-book-collection .boxes li a").css("line-height", $(".preview-bluray-dvd-cd-book-collection > div").height()+"px");
	$(".preview-html-blank-template .boxes li a").css("line-height", $(".preview-html-blank-template > div").height()+"px");
	$(".preview-joomla-3-blank-template .boxes li a").css("line-height", $(".preview-joomla-3-blank-template > div").height()+"px");


	/* Menu */
	$('#menu a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	/* Portfolio */
	$('#portfolio .box > div').each( function() { $(this).hoverdir(); } );
});

/* Google Analyctis */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41913842-1', 'fabiorochafg.github.io');
ga('send', 'pageview');