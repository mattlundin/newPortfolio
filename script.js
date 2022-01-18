//* Navbar
const nav = document.querySelector('nav');

//~ Hide navbar on scroll
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		nav.style.top = '0';
	} else {
		nav.style.top = '-60px';
	}
	prevScrollPos = currentScrollPos;

	if (window.screen.width <= '500px') {
		nav.style.top = '0';
	}
});

//* HOME PAGE
const enterBtn = document.querySelector('.enter-btn');
const btnCont = document.querySelector('.btn-container');
const enterScreen = document.querySelector('.enter');
const homePage = document.querySelector('#home');

enterBtn.addEventListener('click', () => {
	btnCont.style.display = 'none';
	enterScreen.style.visibility = 'hidden';
	homePage.style.display = 'flex';
	homePage.style.visibility = 'visible';

	// ! Refreshing page does not bring it back to homepage... how to fix???
	// document.querySelector('body').style.overflowY = 'visible';
	document.querySelector('.enter').classList.add('enter-fade');
	document.querySelector('.code-icon').style.animation = 'codeFade 6s ease-in';
	document.querySelector('.bicycle img').style.animation =
		'bicycleKick 3s 3.1s';
	document.querySelector('.code-icon').style.transform = 'rotate(-720deg)';
	document.querySelector('.code-icon').style.transition =
		'transform 1.8s ease-out 4.3s';

	document.querySelector('.breathe').classList.add('breathe-zoom');
	document.querySelector('.uppercut').style.animation = 'codeFade 5s ease-in';
	document.querySelector('.uppercut').style.animation =
		'uppercut 1.5s ease-out 2.3s';
	document.querySelector('.toasty img').classList.add('toasty-animation');

	setTimeout(function () {
		document.querySelector('nav').style.visibility = 'visible';
		document.querySelector('nav').style.animation = 'fadeIn 1s ease-in';
	}, 5000);

	//~ AUDIOS CLIPS
	// setTimeout(function () {
	// 	window.onload = function () {
	// 		document.getElementById('intro').play();
	// 	};
	// }, 0);

	setTimeout(function () {
		document.getElementById('intro').play();
	}, 0);

	setTimeout(function () {
		document.getElementById('uppercut').play();
	}, 2300);

	setTimeout(function () {
		document.getElementById('toasty').play();
	}, 2700);

	setTimeout(function () {
		document.getElementById('bicycleKick').play();
	}, 3400);

	setTimeout(function () {
		document.getElementById('sword').play();
	}, 5000);
});

//* ABOUT PAGE
// window.onscroll = function () {
// 	const responsiveContainer = document.querySelector('.responsive-icons');
// 	const phoneIcon = document.querySelector('.phone');
// 	const tabletIcon = document.querySelector('.tablet');
// 	const monitorIcon = document.querySelector('.monitor');

// 	if (
// 		window.scrollY >
// 		responsiveContainer.offsetTop -
// 			(window.innerHeight - responsiveContainer.clientHeight)
// 	) {
// 	}
// };

// icons animation
// window.addEventListener('scroll', () => {
// 	let iconBox = document.querySelector('.responsive-icons');
// 	let iconPosition = iconBox.getBoundingClientRect().top;
// 	let screenPosition = window.innerHeight / 1.4;

// 	if (iconPosition < screenPosition) {
// 		iconBox.classList.add('zoom-in');
// 	} else {
// 		iconBox.classList.remove('zoom-in');
// 	}
// });

//* PROJECTS PAGE

// window.addEventListener('scroll', () => {
// 	let projectsHeader = document.querySelector('.projects-header');
// 	const headerLetters = document.querySelectorAll('.projects-header span');
// 	let headerPosition = projectsHeader.getBoundingClientRect().top;
// 	let headerScreenPosition = window.innerHeight / 1.4;
// 	console.log('working');

// 	if (headerPosition < headerScreenPosition) {
// 		headerLetters.classList.remove('unstacked');
// 		headerLetters.classList.add('stacked');
// 		// alert('about time');
// 	} else {
// 		headerLetters.classList.remove('stacked');
// 		headerLetters.classList.add('unstacked');
// 	}
// });

// Using IntersectionObserver
// const unstacked = document.querySelectorAll('.unstacked');

// let observer = new IntersectionObserver(
// 	(entries) => {
// 		entries.forEach((entry) => {
// 			entry.target.classList.toggle('stacked', entry.isIntersecting);
// 		});
// 	},
// 	{
// 		root: null,
// 		threshold: 0.6,
// 		// rootMargin: '-100px',
// 	},
// );

// unstacked.forEach((unstack) => {
// 	observer.observe(unstack);
// });

// const fadeUp = document.querySelectorAll('.fade-up');
// const projectImg = document.querySelectorAll('.project-img');

// let observer2 = new IntersectionObserver(
// 	(entries2) => {
// 		entries2.forEach((entry2) => {
// 			entry2.target.classList.toggle('in-view', entry2.isIntersecting);
// 			// alert('yoyoyo');
// 		});
// 	},
// 	{
// 		root: null,
// 		threshold: 0.8,
// 	},
// );

// projectImg.forEach((img) => {
// 	observer2.observe(img);
// });

// window.addEventListener('scroll', () => {
// 	let fadeUp = document.querySelectorAll('.fade-up');
// 	let projectPosition = fadeUp.getBoundingClientRect().top;
// 	let boxPosition = window.innerHeight / 1.4;

// 	if (projectPosition < boxPosition) {
// 		fadeUp.classList.add('in-view');
// 	} else {
// 		fadeUp.classList.remove('in-view');
// 	}
// });
