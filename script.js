
document.addEventListener('DOMContentLoaded', function() {

    let odd = true;

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

    const generateSquare = function(randomColors) {
        let square = document.createElement('div');
        square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
        if (randomColors === true) {
            square = randomColoring(square);
        }
        else {
            square = blackAndRedColoring(square);
        }
        let newSquare = document.body.appendChild(square);
        console.log(square.style.cssText);
        return newSquare;
    }

    for (let i=0; i<90; i++) {
        generateSquare(true);
    }

});