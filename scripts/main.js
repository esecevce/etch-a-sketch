const squares = document.querySelector("#squares");

function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squares.appendChild(square);
    
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background-color: red");
        });
    }
    
    squares.setAttribute("style", `grid-template-columns: repeat(${num}, calc(400px / ${num})); grid-template-rows: repeat(${num}, calc(400px / ${num}));`);
}

function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    removeChilds(squares);

    let gridNum = prompt("Enter a number: ");
    if (gridNum > 100 || gridNum < 0) {
        gridNum = prompt("Invalid. Enter another number: ");
    }
    gridNum = Number(gridNum);
    createGrid(gridNum);
});

createGrid(16);