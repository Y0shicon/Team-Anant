let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));

				if (entry.isIntersecting) {
					entry.target.classList.add('in-viewport');
				} else {
					entry.target.classList.remove('in-viewport');
				}
			});
		},
		{
			threshold: 0.2
		}
	);
}

export function slideIn(element) {
	ensureIntersectionObserver();

	element.classList.add('slide-in');
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}

export function fade(element) {
	ensureIntersectionObserver();

	element.classList.add('fade');
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}

export function scale(element) {
	ensureIntersectionObserver();

	element.classList.add('scale');
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}