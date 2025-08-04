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
  const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      fetch("https://bc1fxeu4rg.execute-api.ap-south-1.amazonaws.com/prod/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
      });
    });
