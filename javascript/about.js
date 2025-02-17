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
        const moveDistance = (currentX - startPosition) * 1     ;
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

const slider = document.querySelector('.product-list');
let isDown = false;
let startX;
let scrollLeft;


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
    const walk = (x - startX) * 1; 
    slider.scrollLeft = scrollLeft - walk;
});







