// Main.js

let rainbowSquares = false;
let darkeningEffect = false;

document.forms.options.testButton.addEventListener("click", monitorForm);
function monitorForm(event){
    event.preventDefault();
    document.querySelector("#game").textContent = "";
    buildGame(document.forms.options.numOfSquares.value);
    rainbowSquares = document.forms.options.rainbowSquares.checked;
    darkeningEffect = document.forms.options.darkeningEffect.checked;
}

document.forms.options.numOfSquares.addEventListener("input", function monitorSlider(event){
    document.querySelector("#numOfSquares-text").textContent = event.target.value;
})

function colorSquareOnHover(event){
    event.target.style.backgroundColor = "black";
    if (rainbowSquares){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        randomColor = "rgb(" + red + "," + green + "," + blue + ")";
        event.target.style.backgroundColor = randomColor;
    }
    if (darkeningEffect && event.target.style.opacity < 1){
        event.target.style.opacity = (parseFloat(event.target.style.opacity) + 0.1).toString();
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
            if (darkeningEffect) {
                square.style.opacity = '0';
            }
            square.addEventListener("mouseover", colorSquareOnHover);
            row.appendChild(square);
        }
        game.appendChild(row);
    }
}

buildGame(16);