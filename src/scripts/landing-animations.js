// Elegant Scroll Reveal with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
	// Configuration for the observer
	const observerOptions = {
		threshold: 0.15, // Trigger when 15% of element is visible
		rootMargin: '0px 0px -50px 0px' // Start animation a bit before element is fully visible
	};

	// Create intersection observer
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Add revealed class with a small delay for smoother effect
				setTimeout(() => {
					entry.target.classList.add('revealed');
				}, 50);
				
				// Stop observing this element once revealed
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all reveal elements
	const revealElements = document.querySelectorAll('.reveal-element');
	revealElements.forEach(element => {
		observer.observe(element);
	});

	// Handle staggered elements separately for more control
	const staggerElements = document.querySelectorAll('.reveal-stagger');
	staggerElements.forEach((element, index) => {
		// Add reveal-element class for base styles
		element.classList.add('reveal-element');
		
		// Staggered observer with increasing delays
		const staggerObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// Staggered delay based on index
					setTimeout(() => {
						entry.target.classList.add('revealed');
					}, 75 + (index * 50)); // 75ms base + 50ms per item
					
					staggerObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);
		
		staggerObserver.observe(element);
	});

	// Special handling for navigation links to ensure direct access works
	const navLinks = document.querySelectorAll('a[href^="#"]');
	navLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			const targetId = link.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			
			if (targetElement) {
				// Immediately reveal the target section and its children
				const sectionRevealElements = targetElement.querySelectorAll('.reveal-element');
				sectionRevealElements.forEach(el => {
					el.classList.add('revealed');
				});
			}
		});
	});

	console.log('Scroll reveal initialized - elements will appear elegantly as you scroll');

	// Profile image animation
	const profileImage = document.querySelector('.animate-profile');
	if (profileImage) {
		const profileObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('animated');
					}, 300); // Small delay for better effect
					profileObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });
		
		profileObserver.observe(profileImage);
	}
});

// Force scroll to top on page load/refresh (after animations are set up)
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
	window.scrollTo(0, 0);
});

// Delayed scroll to top to not interfere with animations
setTimeout(() => {
	window.scrollTo(0, 0);
}, 50);
