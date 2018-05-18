
document.addEventListener('DOMContentLoaded', function() {

    let odd = true;
    let transparency = 1;
    let number = 0;

    const addNumberToSquare = function(square) {
        square.innerHTML = `${number.toString()}`;
        number++;
        return square;
    }

    const gradientColoring = function(square) {
        if (odd === true) {
            let alpha = `${parseFloat(transparency).toString()}`;
            square.style.cssText += ` background-color: rgba(251, 0, 255, ${alpha});`;
            odd = false;
            if (transparency < 98){
                transparency -= 0.02;
            }
        }
        else {
            let alpha = `${parseFloat(transparency).toString()}`;
            square.style.cssText += ` background-color: rgba(55, 55, 55, ${alpha});`;
            odd = true;
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

    const newSquare = function(color) {
        let square = document.createElement('div');
        square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
        if (color === "random") {
            square = randomColoring(square);
        }
        else if (color === "gradient") {
            square = gradientColoring(square);
        }
        else if (color = "blackAndRed") {
            square = blackAndRedColoring(square);
        }
        return square;
    }

    const buildGrid = function(size, color) {
        document.body.innerHTML = "";
        for (let i=0; i<size; i++) {
            square = newSquare(color);
            square = addNumberToSquare(square);
            document.body.appendChild(square);
        }
    }

    buildGrid(90, "random");
    
    // let flash = prompt("Dance Party!? (Y/N)").toLowerCase();
    // if (flash === "y") {
    //     setInterval(buildGrid, 200, 90, "random");
    // }
    // else {
    //     let color = prompt("What colors would you like? (redAndBlack, random, or gradient)").toLowerCase();
    //     buildGrid(90, color);
    // }

});