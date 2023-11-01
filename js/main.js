// Main.js

let rainbowSquares = true;

function colorSquareOnHover(event){
    event.target.style.backgroundColor = "black";
    if (rainbowSquares){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        randomColor = "rgb(" + red + "," + green + "," + blue + ")";
        event.target.style.backgroundColor = randomColor;
    }
}

function buildGame(lengthOfSide){
    let game = document.querySelector("#game");
    for (let i=0;i<lengthOfSide;i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0;j<lengthOfSide;j++){
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = `${(480 / lengthOfSide)}px`;
            square.style.height = `${(480 / lengthOfSide)}px`;
            square.addEventListener("mouseover", colorSquareOnHover);
            row.appendChild(square);
        }
        game.appendChild(row);
    }
}

buildGame(32);