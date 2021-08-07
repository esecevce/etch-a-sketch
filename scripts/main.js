const squares = document.querySelector("#squares");

let num = 16;

let square;
for (let i = 0; i < num * num; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    squares.appendChild(square);
}