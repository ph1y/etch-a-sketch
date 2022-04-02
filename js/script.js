let gridSize = 16;
let drawMode = "default";

function generateGrid(squaresPerSide) {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.style.setProperty("--custom-grid-template-columns", `repeat(${squaresPerSide}, 1fr)`);

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

function getRandomRgbValue() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function addHighlight(event) {
    if (!event.target.classList.contains("highlighted")) {
        event.target.classList.add("highlighted");
        
        if (drawMode === "rgb") {
            event.target.style.setProperty("--square-color", getRandomRgbValue());
        };
    };

    console.log(event.target.classList[0]);
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

function setDrawMode(event) {
    drawMode = event.target.id;
};

const defaultButton = document.querySelector("#default");
defaultButton.addEventListener("click", setDrawMode);

const gradientButton = document.querySelector("#gradient");
gradientButton.addEventListener("click", setDrawMode);

const rgbButton = document.querySelector("#rgb");
rgbButton.addEventListener("click", setDrawMode);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearGrid);

generateGrid(gridSize);