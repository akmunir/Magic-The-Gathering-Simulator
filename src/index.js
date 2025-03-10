import "./styles.css";

let startX = 0, startY = 0;
let newX = 0, newY = 0;
const cards = document.querySelectorAll(".card");
for (const card of cards) {
    card.addEventListener("mousedown", mouseDown);
}

function mouseDown(e) {
    console.log("mousedown");
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
    newX = startX - event.clientX;
    newY = startY - event.clientY;
    startY = newY;
    startX = newX;
    console.log(event.target);
    
    event.target.style.top = startY + "px";
    event.target.style.left = startX + "px";

    console.log(newX, newY);
    console.log(startX, startY);


}

function mouseUp(e) {

}