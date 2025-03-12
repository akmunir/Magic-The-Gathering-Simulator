import "./styles.css";

let isDragging = false;
let currentCard = null;
let startX = 0, startY = 0;
let newX = 0, newY = 0;
let initialTop = 0, initialLeft = 0;
const cards = document.querySelectorAll(".card");
for (const card of cards) {
    card.addEventListener("mousedown", mouseDown);
}

function mouseDown(event) {
    event.preventDefault();
    isDragging = true;
    currentCard = event.target.closest(".card");
    startX = event.clientX;
    startY = event.clientY;
    const cardComputedStyles = window.getComputedStyle(currentCard);
    initialLeft = parseInt(cardComputedStyles.left);
    initialTop = parseInt(cardComputedStyles.top);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
    if (!isDragging)
    newX = event.clientX - startX;
    newY = event.clientY - startY;
    startY = newY;
    startX = newX;    
    currentCard.style.top = initialTop + newX + "px";
    currentCard.style.left = initialLeft + newY + "px";
    console.log(newX, newY);
    console.log(startX, startY);


}

function mouseUp(e) {
    isDragging = false;
    currentCard = null;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}