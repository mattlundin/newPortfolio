//* NAVBAR
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

//* MOBILE NAV
const navSlide = () => {
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list li');
	const burger = document.querySelector('.burger');
	const body = document.querySelector('body');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');

		//~ disable overscroll while nav is open
		if (navList.classList.contains('open')) {
			body.style.overflow = 'hidden';
			burger.style.marginRight = '1.2rem';
		} else {
			body.style.overflow = 'scroll';
			burger.style.marginRight = '1rem';
		}
	});
	//~ close when clicking on nav-link
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];
		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');

			body.style.overflow = 'scroll';
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//* HOME PAGE
const enterBtn = document.querySelector('.enter-btn');
const btnCont = document.querySelector('.btn-container');
const enterScreen = document.querySelector('.enter');
const homePage = document.querySelector('#home');
const body = document.querySelector('body');

enterBtn.addEventListener('click', () => {
	btnCont.style.display = 'none';
	enterScreen.style.visibility = 'hidden';
	homePage.style.display = 'flex';
	homePage.style.visibility = 'visible';

	if ((body.style.overflowY = 'hidden')) {
		body.style.overflowY = 'auto';
	}

	document.querySelector('.enter').classList.add('enter-fade');

	let breathe = document.querySelector('.breathe');
	breathe.classList.add('breathe-zoom');
	// for mozilla
	setTimeout(() => {
		breathe.style.animation = 'breathe 4s infinite';
	}, 3500);

	document.querySelector('.code-icon').style.animation = 'codeFade 6s ease-in';
	document.querySelector('.bicycle img').style.animation =
		'bicycleKick 3s 3.1s';
	document.querySelector('.code-icon').style.transform = 'rotate(-720deg)';
	document.querySelector('.code-icon').style.transition =
		'transform 1.8s ease-out 4.3s';
	document.querySelector('.uppercut').style.animation = 'codeFade 5s ease-in';
	document.querySelector('.uppercut').style.animation =
		'uppercut 1.5s ease-out 2.3s';
	document.querySelector('.toasty img').classList.add('toasty-animation');

	document.querySelector('.header').style.overflowY = 'hidden';

	setTimeout(function () {
		document.querySelector('nav').style.visibility = 'visible';
		document.querySelector('nav').style.animation = 'fadeIn 1s ease-in';
	}, 5000);

	//~ AUDIOS CLIPS
	setTimeout(() => {
		document.getElementById('intro').play();
	}, 0);

	setTimeout(() => {
		document.getElementById('uppercut').play();
	}, 2300);

	setTimeout(() => {
		document.getElementById('toasty').play();
	}, 2700);

	setTimeout(() => {
		document.getElementById('bicycleKick').play();
	}, 3400);

	setTimeout(() => {
		document.getElementById('what').play();
	}, 5200);
	document.getElementById('what').volume = '0.3';
});

// bring page back to top on reload
window.onbeforeunload = () => {
	window.scrollTo(1, 0);
};

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
