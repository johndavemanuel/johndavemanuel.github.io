$(document).ready(function() {
	console.log('custom.js loaded');

	let themeColorSwitch = $('.switch__input');

	$(".clients.owl-carousel").owlCarousel({
		nav: !1,
		items: 2,
		loop: !1,
		navText: !1,
		margin: 10,
		autoHeight: !1,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
	});

	const themeStorage = localStorage.getItem('toggleState');
	let initialState;

	if (themeStorage === null || themeStorage === 'light') {
		initialState = 'light';
		setTheme('light');
	} else {
		initialState = 'dark';
		setTheme('dark');
	}

	themeColorSwitch.on('change', function() {

		if (this.checked === true) {
			setTheme('light');
		} else {
			setTheme('dark');
		}

		console.log(this.checked);
		console.log(localStorage.getItem('toggleState'));
	});

	function setTheme(theme) {
		if (theme === 'light') {
			$('[data-skin="light"]').attr('disabled', false).attr('rel', 'stylesheet');
			$('[data-skin="dark"]').attr('disabled', true).attr('rel', '');
			$('body').removeClass('dark');
			$('body').addClass('light');
			$('.switch__input').attr('checked', true);
			localStorage.setItem('toggleState', 'light');
		} else {
			$('[data-skin="dark"]').attr('disabled', false).attr('rel', 'stylesheet');;
			$('[data-skin="light"]').attr('disabled', true).attr('rel', '');
			$('body').removeClass('light');
			$('body').addClass('dark');
			$('.switch__input').attr('checked', false);
			localStorage.setItem('toggleState', 'dark');
		}
	}
});