$(document).ready(function() {
	//burger menu toggler

	let burgerMenu = () => {
		let btn = $('.header-burger');
		let menu = $('.header-nav');
		let doc = $(document);
		let body = $('body');

		btn.on('click', function() {
			menu.toggleClass('active');
			$(this).toggleClass('active');
			body.toggleClass('body-overlay');
		});

		doc.on('click', function(e) {
			let target = $(e.target);
			if(!menu.is(target) && menu.has(target).length === 0) {
				menu.removeClass('active');
				btn.removeClass('active');
				body.removeClass('body-overlay');
			}
		})
	}

	burgerMenu();


	let getToggleForm = () => {
		let pic = $('.pic-toy');
		let form = $('.present-form');


		pic.on('click', function() {
			$(this).addClass('active');
			form.addClass('active');
		})
	}

	getToggleForm();

	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.about-slider-nav'
	});

	$('.about-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.about-slider',
		centerMode: true,
		focusOnSelect: true,
		arrows: false
	});

	
	function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
	
})