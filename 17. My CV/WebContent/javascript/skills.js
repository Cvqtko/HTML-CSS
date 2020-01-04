function isElementInViewport(elem) {
	var $elem = $(elem);

	// Get the scroll position of the page.
	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('skills') != -1) ? 'body'
			: 'html');
	var viewportTop = $(scrollElem).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	// Get the position of the element on the page.
	var elemTop = Math.round($elem.offset().top);
	var elemBottom = elemTop + $elem.height();

	return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation(element) {
	var $elem = $('.bar .' + element);
	var el = document.getElementById(element);
	// If the animation has already been started

	if (!isElementInViewport($elem)) {
		el.style.animation = 'none';
		el.offsetHeight; /* trigger reflow */
		el.style.animation = null;
	}
}

// Capture scroll events
$(window).scroll(function() {
	checkAnimation('java');
	checkAnimation('html');
	checkAnimation('css');
	checkAnimation('my-sql');
	checkAnimation('javascript');
	checkAnimation('junit');
	checkAnimation('design-patterns');
});