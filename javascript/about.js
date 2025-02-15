document.querySelectorAll(".blog-wrapper").forEach((cardSlider) => {
    let isMouseDown = false;
    let startPosition;
    let initialScroll;

    cardSlider.addEventListener("mousedown", (event) => {
        isMouseDown = true;
        cardSlider.classList.add("active");
        startPosition = event.pageX - cardSlider.offsetLeft;
        initialScroll = cardSlider.scrollLeft;
    });

    cardSlider.addEventListener("mouseleave", () => {
        isMouseDown = false;
        cardSlider.classList.remove("active");
    });

    cardSlider.addEventListener("mouseup", () => {
        isMouseDown = false;
        cardSlider.classList.remove("active");
    });

    cardSlider.addEventListener("mousemove", (event) => {
        if (!isMouseDown) return;
        event.preventDefault();
        const currentX = event.pageX - cardSlider.offsetLeft;
        const moveDistance = (currentX - startPosition) * 2;
        cardSlider.scrollLeft = initialScroll - moveDistance;
    });
});


function toggleFAQ(element) {
    let question = element.querySelector(".question");
    let answer = element.querySelector(".answer");

    if (question.style.display === "none") {
        question.style.display = "block";
        answer.style.display = "none";   
    } else {
        question.style.display = "none"; 
        answer.style.display = "block";  
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const wishlistIcons = document.querySelectorAll(".wishlist-icon");

    wishlistIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            if (icon.style.fill === "red") {
                icon.style.fill = "currentColor"; // Default color (black)
            } else {
                icon.style.fill = "red"; // Change to red when clicked
            }
        });
    });
});
const slider = document.querySelector('.product-list');
let isDown = false;
let startX;
let scrollLeft;

// Mouse drag functionality
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    slider.scrollLeft = scrollLeft - walk;
});

// Navigation Buttons
document.querySelector('.prev').addEventListener('click', () => {
    slider.scrollLeft -= 300; // Adjust scrolling step
});

document.querySelector('.next').addEventListener('click', () => {
    slider.scrollLeft += 300; // Adjust scrolling step
});
