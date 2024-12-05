document.addEventListener("DOMContentLoaded", function () {
    // Define the pages
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');

    // Define the buttons
    const bookNowButton = document.getElementById('book-now-button');
    const homeButton = document.getElementById('home-button');

    // Get the slider images
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    // Function to show the next slide with fade effect
    function showNextSlide() {
        // Remove active class from the current slide
        slides[currentSlideIndex].classList.remove('active');

        // Increment the slide index
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Add active class to the next slide
        slides[currentSlideIndex].classList.add('active');
    }

    // Set an interval to automatically change slides every 3 seconds
    setInterval(showNextSlide, 3000); // Change slides every 3 seconds

    // Function to fade out the current page and fade in the next page
    function fadeOutIn(currentPage, nextPage) {
        currentPage.style.opacity = 0;
        setTimeout(() => {
            currentPage.style.display = 'none';
            nextPage.style.display = 'block';
            setTimeout(() => {
                nextPage.style.opacity = 1;
            }, 10); // Small delay before the fade-in starts
        }, 500); // Duration of the fade-out
    }

    // Initial setup: Set the pages to be visible or hidden
    page1.style.display = 'block';
    page2.style.display = 'none';

    // Book Now button click event
    bookNowButton.addEventListener('click', function () {
        fadeOutIn(page1, page2); // Fade from page 1 to page 2
    });

    // Home button click event
    homeButton.addEventListener('click', function () {
        fadeOutIn(page2, page1); // Fade from page 2 to page 1
    });

    // Smooth transition on page load (fade-in for the first page)
    page1.style.opacity = 1;
    page2.style.opacity = 0;
});


const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
});
