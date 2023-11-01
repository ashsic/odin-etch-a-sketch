// Main.js

function colorSquareOnHover(event){
    event.target.style.backgroundColor = "black";
}

function buildGame(lengthOfSide){
    let game = document.querySelector("#game");
    for (let i=0;i<lengthOfSide;i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0;j<lengthOfSide;j++){
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", colorSquareOnHover);
            row.appendChild(square);
        }
        game.appendChild(row);
    }
}

buildGame(16);