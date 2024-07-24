let currentIndex = 0;
const totalSlides = 10;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = 12.5; // Width percentage of each slide
    currentIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

function nextSlide() {
    if (currentIndex >= totalSlides - 5) {
        showSlide(0); // Go back to the start
    } else {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        showSlide(totalSlides - 5); // Go back to the end
    } else {
        showSlide(currentIndex - 1);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Auto slide every 5 seconds
});