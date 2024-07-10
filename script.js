/* 
1 dodać w jsie bazowe 16x16 divów DONE
2 dodać możliwość wpisywania ilości divów minumum 4x4 max 100x100 DONE
3 dodać hover efect z losowym kolorem
4 dodać reset płótna 
*/
function createGrid(dimension) {
    let totalDivs = dimension * dimension;
    let size = 540 / dimension;
    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");
        div.classList.add("dice");
        div.style.background = "black";
        div.style.width = size + "px";
        div.style.height = size + "px";
        divsContainer.appendChild(div);
    }
}

let divsContainer = document.getElementById("container");
let buttonGrid = document.getElementById("grid")

let dimension = 16;
createGrid(dimension);

buttonGrid.addEventListener('click', e => {
    let newDim = prompt("Type size of new grid (min 4, max 50)");
    while (divsContainer.firstChild) {
        divsContainer.removeChild(divsContainer.firstChild)
    }
    createGrid(newDim);
}
)
