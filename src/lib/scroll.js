export function smoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the target element's ID from the href attribute (remove the '#')
            const targetId = this.getAttribute('href');

            // Check if it's just '#' (often used for placeholder links)
            if (targetId === '#') {
                event.preventDefault(); // Prevent default jump
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Scroll smoothly to the top
                });
                return; // Stop processing further
            }

            // Find the target element on the page using the ID
            const targetElement = document.querySelector(targetId);

            // If the target element exists
            if (targetElement) {
                // Prevent the default anchor link behavior (instant jump)
                event.preventDefault();

                // Use scrollIntoView for smooth scrolling
                targetElement.scrollIntoView({
                    behavior: 'smooth', // The magic!
                    block: 'start'      // Aligns the top of the target element to the top of the viewport
                });
            }
            // If the target element doesn't exist, the link will behave normally
            // (or you could add custom handling here, like logging an error)
            });
    });
}

