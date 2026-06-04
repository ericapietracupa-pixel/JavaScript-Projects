function Addition_Function() {
    var simple_Math = 2 + 2; // Variable addition is declared and assigned the result of adding 2 and 2
    // The innerHTML property of the element with id "Math" is set to a string that shows the addition operation and its result
    document.getElementById("add").innerHTML = "2 + 2 = " + simple_Math; 
}

function Subtraction_Function() {
    var simple_Math = 5 - 2;
    // The innerHTML property of the element with id "subtract" is set to a string that shows the subtraction operation and its result
    document.getElementById("subtract").innerHTML = "5 - 2 = " + simple_Math; 
}

function Multiplication_Function() {
    var simple_Math = 6 * 8;
    // The innerHTML property of the element with id "multiply" is set to a string that shows the multiplication operation and its result
    document.getElementById("multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function Division_Function() {
    var simple_Math = 48 / 6;
    // The innerHTML property of the element with id "divide" is set to a string that shows the division operation and its result
    document.getElementById("divide").innerHTML = "48 / 6 = " + simple_Math;
}

function More_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    // The innerHTML property of the element with id "more" is set to a string that shows the combined mathematical operations and their result
    document.getElementById("more").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracting 5 equals " + simple_Math;
}

function Modulus_Operator() {
    var simple_Math = 25 % 6;
    // The innerHTML property of the element with id "modulus" is set to a string that shows the modulus operation and its result
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6, the remainder is: " + simple_Math;
}

function Negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x; // The negation operator is used to change the sign of the variable x, which is 10, resulting in -10
}

function Increment() {
    var increment = document.getElementById("Increment").innerHTML; // The current value of the element with id "Increment" is assigned to the variable increment
    increment++;
    // The increment operator (++) is used to increase the value of the variable increment by 1 each time the function is called, and the updated value is displayed in the element with id "Increment"
    document.getElementById("Increment").innerHTML = increment;
}

function Decrement() {
    var decrement = document.getElementById("Decrement").innerHTML; // The current value of the element with id "Decrement" is assigned to the variable decrement
    decrement--;
    // The decrement operator (--) is used to decrease the value of the variable decrement by 1 each time the function is called, and the updated value is displayed in the element with id "Decrement"
    document.getElementById("Decrement").innerHTML = decrement;
}

function Random_Number() {
    // The Math.random() function generates a random decimal number between 0 and 100, which is then displayed in the element with id "Random"
    document.getElementById("Random").innerHTML = Math.round(Math.random() * 100); 
    // The Math.round() function is used to round the random number to the nearest whole number
}