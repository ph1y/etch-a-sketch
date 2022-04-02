function generateGrid(squaresPerSide) {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;

    if (gridContainer.firstChild) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    };

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        gridContainer.appendChild(document.createElement("div"));
    };

    const gridDivs = Array.from(document.querySelectorAll(".grid-container div"));
    gridDivs.forEach(div => div.addEventListener("mouseenter", addHighlight));
};

function addHighlight(event) {
    event.target.classList.add("highlighted");
};

function clearGrid() {
    let squaresPerSide = parseInt(prompt("How many squares should the grid have?"));

    if (squaresPerSide <= 100) {
        generateGrid(squaresPerSide);
    } else {
        alert("The maximum amount of squares is 100. Please try again.");
        clearGrid();
    };
};

const button = document.querySelector("button");
button.addEventListener("click", clearGrid);

generateGrid(16);