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
