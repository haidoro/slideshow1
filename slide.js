var slide = document.getElementById('slideshow');
setInterval(function(){
	slide.appendChild(slide.children[0]);
	slide.children[0].classList.remove('alt');
	slide.children[3].classList.add('alt');	
},3000);
