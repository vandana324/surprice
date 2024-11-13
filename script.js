function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function replayPage() {
    window.location.reload();
}


let currentSlide = 0;
const slides = document.querySelectorAll('.diary-image');
const totalSlides = slides.length;

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Update the slide index
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to 0 after the last slide

    // Show the next slide
    slides[currentSlide].style.display = 'block';
}

// Initialize slideshow
function startSlideshow() {
    slides[currentSlide].style.display = 'block'; // Show the first image
    setInterval(showNextSlide, 2000); // Change image every 3 seconds
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
