//* HOME PAGE
const enterBtn = document.querySelector('.enter-btn');
const btnCont = document.querySelector('.btn-container');
const enterScreen = document.querySelector('.enter');
const homePage = document.querySelector('#home');

enterBtn.addEventListener('click', () => {
	btnCont.style.display = 'none';
	enterScreen.style.visibility = 'none';
	homePage.style.display = 'flex';
	homePage.style.visibility = 'visible';

	document.querySelector('body').style.overflowY = 'visible';
	document.querySelector('.enter').classList.add('enter-fade');
	document.querySelector('.code-icon').style.animation = 'codeFade 6s ease-in';
	document.querySelector('.bicycle img').style.animation =
		'bicycleKick 3s 3.1s';
	document.querySelector('.code-icon').style.transform = 'rotate(-720deg)';
	document.querySelector('.code-icon').style.transition =
		'transform 1.8s ease-out 4.3s'; /* -1 sec */

	document.querySelector('.breathe').classList.add('breathe-zoom');
	document.querySelector('.uppercut').style.animation = 'codeFade 5s ease-in';
	document.querySelector('.uppercut').style.animation =
		'uppercut 1.5s ease-out 2.3s'; /* -1 sec */
	document.querySelector('.toasty img').classList.add('toasty-animation');

	setTimeout(function () {
		document.querySelector('nav').style.visibility = 'visible';
		document.querySelector('nav').style.animation = 'fadeIn 1s ease-in';
	}, 5000);

	//~ AUDIOS CLIPS
	setTimeout(function () {
		window.onload = function () {
			document.getElementById('intro').play();
		};
	}, 0);

	setTimeout(function () {
		document.getElementById('intro').play();
	}, 0);

	setTimeout(function () {
		document.getElementById('uppercut').play();
	}, 2300); /* -1 sec */

	setTimeout(function () {
		document.getElementById('toasty').play();
	}, 2700); /* -1 sec */
	setTimeout(function () {
		document.getElementById('bicycleKick').play();
	}, 3400); /* -1 sec */
});
