(function () {
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
})();