
document.addEventListener('DOMContentLoaded', function() {

    let odd = true;

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

    const generateSquare = function() {
        let square = document.createElement('div');
        square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
        square = blackAndRedColoring(square);
        let newSquare = document.body.appendChild(square);
        return newSquare;
    }

    for (let i=0; i<90; i++) {
        generateSquare();
    }

});