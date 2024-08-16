document.addEventListener("DOMContentLoaded", function () {
    const plane = document.getElementById('plane');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                const item = document.querySelector(`.timeline-item[data-target="${index}"]`);
                const itemPosition = item.offsetTop;

                plane.style.top = `${itemPosition + 60}px`; // Adjust to center the plane with the item
            }
        });
    });
});
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
const slider = document.querySelector('.projects-slider');
const projectCards = Array.from(document.querySelectorAll('.project-card'));

let slideIndex = 0;
const cardsToShow = 1; // Number of cards to show

function updateSlide() {
    const slideWidth = projectCards[0].offsetWidth;
    slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function showSlide(index) {
    const maxIndex = Math.ceil(projectCards.length / cardsToShow) - 1;
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    slideIndex = index;
    updateSlide();
}

prevButton.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

// Initialize the first slide
updateSlide();
