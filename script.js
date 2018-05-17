
document.addEventListener('DOMContentLoaded', function() {

    let odd = true;
    let transparency = 10;

    const gradientColoring = function(square, colorA, colorB) {
        if (odd === true) {
            alteredColorA = `#${transparency.toString()}${colorA}`;
            square.style.cssText += ` background-color: ${alteredColorA};`;
            odd = false;
            if (transparency < 98){
                transparency += 2;
            }
            console.log(alteredColorA);
        }
        else {
            alteredColorB = `#${transparency.toString()}${colorB}`;
            square.style.cssText += ` background-color: ${alteredColorB};`;
            odd = true;
            console.log(alteredColorB);
        }
        return square;
    }   

    const randomColoring = function(square) {
        let hexidecimal = '#';
        let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i=0; i<6; i++) {
            let addDigit = Math.floor(Math.random() * 2);
            if (addDigit === 1) {
                hexidecimal += Math.floor(Math.random() * 10);
            }
            else {
                hexidecimal += letters[Math.floor(Math.random() * 6)];
            }
        }
        square.style.cssText += ` background-color: ${hexidecimal};`;
        return square;
    }

    const blackAndRedColoring = function(square) {
        if (odd === true) {
            square.style.cssText += " background-color: black;";
            odd = false;
        }
        else {
            square.style.cssText += " background-color: red;";
            odd = true;
        }
        return square;
    }

    const generateSquare = function(randomColors, gradient, gradientColorA, gradientColorB) {
        randomColors = randomColors || false;
        gradient = gradient || false;
        gradientColorA = gradientColorA || undefined;
        gradientColorB = gradientColorB || undefined;
        let square = document.createElement('div');
        square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
        if (randomColors === true) {
            square = randomColoring(square);
        }
        else if (gradient === true) {
            square = gradientColoring(square, gradientColorA, gradientColorB);
        }
        else {
            square = blackAndRedColoring(square);
        }
        document.body.appendChild(square);
    }

    const buildGrid = function(number, flash){
        document.body.innerHTML = "";
        for (let i=0; i<number; i++) {
            generateSquare(true, false); 
        }
        if (flash === "Y"){
            setInterval(buildGrid, 100, number);
        }
    }
    
    flash = prompt("Dance Party!? (Y/N)").toUpperCase();
    buildGrid(90, flash); //arg1: number of grid tiles, arg2: flashing bool

});