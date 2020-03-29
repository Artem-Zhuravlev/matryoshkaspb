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
	})
})