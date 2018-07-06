$(function(){
	setInterval(function(){
		$('#slideshow img:first-child').fadeOut().appendTo('#slideshow').addClass('alt');
		$('#slideshow img:first-child').fadeIn().removeClass('alt');
	},3000);
});