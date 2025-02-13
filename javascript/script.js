
document.querySelectorAll(".newparent-card").forEach((cardSlider) => {
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
        const moveDistance = (currentX - startPosition) * 2; // Adjust scrolling speed
        cardSlider.scrollLeft = initialScroll - moveDistance;
    });
});


const slider = document.querySelector(".grab-card");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

const carousel = document.querySelector(".wrapper");
let isDragging = false;
let startY, scrollLeft1;

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});



document.querySelectorAll(".ingparent-card").forEach((cardSlider) => {
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
        const moveDistance = (currentX - startPosition) * 2; // Adjust scrolling speed
        cardSlider.scrollLeft = initialScroll - moveDistance;
    });
});


