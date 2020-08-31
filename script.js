
document.addEventListener('scroll', (e)=>{
	if(pageYOffset >= 800){
		let progres = document.querySelector('.progress');
		progres.classList.add('.progress:after')
	}
})

$(window).scroll(function() { 
 var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()); 
 $('.bar__long').css('width', scrollPercent + "%"); 
});