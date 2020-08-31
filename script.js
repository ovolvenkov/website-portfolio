const progress = document.querySelectorAll('.progress');

const dataProgress = {
	'HTML/CSS': 80,
	'JAVASCRIPT': 60,
	'PHP': 87,
	'PHYTON': 75,
	'RUBY': 40,
	'JAVA': 28,
}



document.addEventListener('scroll',(e)=>{
		if (document.querySelector('.skills').getBoundingClientRect().y < 200 ) {
				for (const elem of progress) {
					let str = elem.parentNode.innerText;
					console.log(str)
					elem.style.width = `${dataProgress[str]}%`
				}
		}
})

