$(document).ready(function() {

	let themeColorSwitch = $('.switch__input');

	$(".preloader").fadeOut(800, "linear");

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

	const currentSelectedTheme = localStorage.getItem('toggleState');

	if (currentSelectedTheme === null || currentSelectedTheme === 'light') {
		setTheme('light');
	} else {
		setTheme('dark');
	}

	themeColorSwitch.on('change', function() {
		if (this.checked === true) {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	});

	function setTheme(theme) {
		$('body').css('visibility', 'hidden');
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
		$('body').css('visibility', 'visible');
	}
});