
function progressBar(){
	const progress = document.querySelectorAll('.progress');

	const dataProgress = {
	'HTML/CSS': 80,
	'JAVASCRIPT': 90,
	'PHP': 17,
	'PHYTON': 35,
	'RUBY': 40,
	'JAVA': 99,
	}

	document.addEventListener('scroll',(e)=>{
		if (document.querySelector('.skills').getBoundingClientRect().y < 400 ) {
				for (const elem of progress) {
					let str = elem.parentNode.innerText;
					elem.style.width = `${dataProgress[str]}%`
				}
		}
	})
}

progressBar();

function smoothScrollingTop() {

let scrollBtn = document.querySelector('.scrollBtn');

document.addEventListener('scroll', ()=>{
	if (window.pageYOffset >= 500) {
		scrollBtn.style.opacity = '1';
		//scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.opacity = '0';
		//scrollBtn.style.display = 'none';
	}

})

scrollBtn.addEventListener('click', (e=>{
	if(window.pageYOffset >= 500){document.querySelector('.header').scrollIntoView({ behavior: 'smooth' })}
}))

	//document.querySelector('.expirience_header').onclick = function(e){
		//document.querySelector('.header').scrollIntoView({ behavior: 'smooth' })
}



smoothScrollingTop()