const squares = document.querySelector("#squares");

let num = 16;

for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    squares.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.setAttribute("style", "background-color: red");
    });
}