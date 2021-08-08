const squares = document.querySelector("#squares");

let color = "black";

function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squares.appendChild(square);
    }
    
    squares.setAttribute("style", `grid-template-columns: repeat(${num}, calc(400px / ${num})); grid-template-rows: repeat(${num}, calc(400px / ${num}));`);
}

function addEL(color) {
    const children = squares.querySelectorAll("div");

    if (color === "random") {
        children.forEach(elem => {
            elem.addEventListener("mouseover", () => {
                elem.setAttribute("style", "background-color: " + `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
            });
        });
    } else {
        children.forEach(elem => {
            elem.addEventListener("mouseover", () => {
                elem.setAttribute("style", "background-color: " + color);
            });
        });
    }

}

function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    removeChilds(squares);

    let gridNum = prompt("Enter a number: ");
    if (gridNum > 100 || gridNum < 0) {
        gridNum = prompt("Invalid. Enter another number: ");
    }
    gridNum = Number(gridNum);
    createGrid(gridNum);
    addEL(color);
});

const btnRandom = document.querySelector("#btn-random");
btnRandom.addEventListener("click", () => {
    addEL("random");
});