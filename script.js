/* 
1 dodać w jsie bazowe 16x16 divów 
2 dodać możliwość wpisywania ilości divów minumum 4x4 max 100x100
3 dodać hover efect z losowym kolorem
4 dodać reset płótna 
*/
let divsContainer = document.getElementById("container");

let dimension = 16;
let totalDivs = dimension * dimension;
let size = 540 / dimension;
for (let i = 0; i < totalDivs; i++) {
    let div = document.createElement("div");
    div.style.background = "black";
    div.style.width = size + "px";
    div.style.height = size + "px";
    divsContainer.appendChild(div);
}
