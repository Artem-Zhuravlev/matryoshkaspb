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


let prevStep = $('.quiz .prev-step');
let nextStep = $('.quiz .next-step');
let quizStep = $('.quiz-step');

let quizCounter = 0;
let progress = $('.quiz .progress-bar');
let progressStartPos = 0
let progressStep = 100 / (quizStep.length - 1);
let floor = $('.floors input[type="radio"]');
let area = $('.area');
let areaItem = $('.area .radio');
let areaInput = $('.area .input[type="radio"]');
let textures = $('.textures');
let materials = $('.material');
let apartment = $('.apartment');
let apartmentField = $('.apartment-field');


function addCurClass(counter) {
	quizStep.eq(counter).addClass('active');
}

function removeActiveClass() {
	quizStep.removeClass('active');
}

function changeProgressMore() {
	let curPos = progressStartPos += progressStep;
	progress.css('width', curPos + '%');
}

function changeProgressLess() {
	let curPos = progressStartPos -= progressStep;
	progress.css('width', curPos + '%');
}

function setInputsVal(arr) {
	arr.each(function(i, item) {
		let cur = $(item).find('input').data('cur');
		$(item).find('input').attr('value', cur * quizData.floors);
		$(item).find('span').text(cur * quizData.floors);
	})
}

let quizData = {
	floors: 1,
	area: 50,
	texture: '',
	materials: '',
	apartment: '',
	phone: ''
}

nextStep.on('click', function() {
	if(quizCounter < quizStep.length - 1) {
		removeActiveClass();
		++quizCounter;
		addCurClass(quizCounter);
		changeProgressMore();
	}	
});

prevStep.on('click', function() {
	if(quizCounter > 0) {
		removeActiveClass();
		--quizCounter;
		addCurClass(quizCounter);
		changeProgressLess();
	}

	nextStep.attr('type', 'button');
	nextStep.text('Далее');
});

floor.on('click', function() {
	quizData.floors = parseInt($(this).val());
	setInputsVal(areaItem);
});


area.on('click', 'input', function() {
	quizData.area = parseInt($(this).val());
});

textures.on('click', 'input', function() {
	quizData.texture = $(this).val();
	console.log(quizData);
})
materials.on('click', 'input', function() {
	quizData.materials = $(this).val();
	console.log(quizData);
})
apartmentField.on('click', 'input', function() {
	quizData.apartment = $(this).val();
});
apartment.on('click', 'input', function() {
	quizData.phone = $(this).val();
	nextStep.attr('type', 'submit');
	nextStep.text('Отправить');
});

$('#contact-form').on('show.bs.modal', function (event) {
  	var button = $(event.relatedTarget);
  	console.log(button);
  	var recipient = button.data('whatever');
  	console.log(recipient);
  	var modal = $(this);
  	modal.find('.modal-title').text(recipient)
  	modal.find('.hidden-field').val(recipient);
});

$('.selfarea').on('click', function() {
	// $('.area input[type="radio"]').attr('checked', false);
	$('.area input[type="radio"]').prop('checked', false);
})

$(".phone-number").mask("+7(999) 999-9999");
$('.lazy').Lazy({
	effect: 'fadeIn'
});



});