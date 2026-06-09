console.log(2 + 2); // Log the result of adding 2 and 2 to the console which will be 4
console.log(10 < 5); // Log the result of the comparison 10 < 5 to the console which will be false

var x = true; // Declare a variable 'x' and assign it a boolean value of true
document.write("The value of x is: '" + x + "', which is of type " + typeof x + ".<br>"); // Write the value of 'x' to the document which will be "true"

x = "Now I'm a string!"; // Reassign the variable 'x' to a string value 

document.write("The value of x is now: '" + x + "', which is of type " + typeof x + ".<br>"); // Write the value of 'x' to the document which will be "Now I'm a string!"

x = 42; // Reassign the variable 'x' to a number value

document.write("The value of x is now: '" + x + "', which is of type " + typeof x + ".<br>"); // Write the value of 'x' to the document which will be 42

function Type_Of() {
    var x = true; // Declare a variable 'x' and assign it a value
    document.getElementById("Type_Of").innerHTML = typeof x; // Update the inner HTML of the element with id "Type_Of" to show the type of variable 'x'
}

function Show_Infinity() {
    var y = 2E310; // Declare a variable 'y' and assign it a value that exceeds the maximum limit for numbers in JavaScript
    document.getElementById("Infinity").innerHTML = y; // Update the inner HTML of the element with id "Infinity" to show the value of 'y', which will be displayed as "Infinity"
}

function Show_Negative_Infinity() {
    var z = -3E310; // Declare a variable 'z' and assign it a value that is less than the minimum limit for numbers in JavaScript
    document.getElementById("Negative_Infinity").innerHTML = z; // Update the inner HTML of the element with id "Negative_Infinity" to show the value of 'z', which will be displayed as "-Infinity"
}

function Boolean_Logic() {
    var result; // Declare a variable 'result' to store the outcome of the boolean comparison

    if (isNaN(document.getElementById("Num1Compare").value) || isNaN(document.getElementById("Num2Compare").value)) { // Check if either of the input values is not a number
        window.alert("Please enter valid numbers."); // If true, display an alert message prompting the user to enter valid numbers
    } else {
        var num1 = parseFloat(document.getElementById("Num1Compare").value);
        var num2 = parseFloat(document.getElementById("Num2Compare").value);
        result = num1 > num2; // Perform the boolean comparison and store the result
        document.getElementById("Boolean_Logic_Result").innerHTML = result; // Update the inner HTML of the result element to show the outcome
    }
}

function Equals_Logic() {
    var result = (10 == 10); // Declare a variable 'result' to store the outcome of the equality comparison
    document.getElementById("EqualsLogic").innerHTML = "The result of 10 == 10 is: " + result; // Update the inner HTML of the element with id "Equals_Logic_Result" to show the result of the equality comparison between the number 10 and the number 10, which will be true
}

function Not_Equals_Logic() {
    var result = (10 == 5); // Declare a variable 'result' to store the outcome of the equality comparison
    document.getElementById("NotEqualsLogic").innerHTML = "The result of 10 == 5 is: " + result; // Update the inner HTML of the element with id "Not_Equals_Logic_Result" to show the result of the equality comparison between the number 10 and the number 5, which will be false
}

function Strict_Equals_Logic(value1, value2, element) {
    var result = (value1 === value2); // Declare a variable 'result' to store the outcome of the strict equality comparison

    if (typeof value1 === "string") { // Check if the first value is a string
        value1 = '"' + value1 + '"'; // If true, wrap the first value in double quotes for better readability in the output
    }

    if (typeof value2 === "string") { // Check if the second value is a string
        value2 = '"' + value2 + '"'; // If true, wrap the second value in double quotes for better readability in the output
    }  

    element.innerHTML = "The result of " + value1 + " === " + value2 + " is: " + result; // Update the inner HTML of the element to show the result of the strict equality comparison between the two values, which will be false
}

function And_Logic(val1, val2, val3, val4, element) {
    var result = (val1 > val2 && val3 > val4); // Declare a variable 'result' to store the outcome of the logical AND comparison
    element.innerHTML = "The result of (" + val1 + " > " + val2 + ") && (" + val3 + " > " + val4 + ") is: " + result; // Update the inner HTML of the element to show the result of the logical AND comparison between the two conditions, which will be true
}

function Or_Logic(val1, val2, val3, val4, element) {
    var result = (val1 > val2 || val3 > val4); // Declare a variable 'result' to store the outcome of the logical OR comparison
    element.innerHTML = "The result of (" + val1 + " > " + val2 + ") || (" + val3 + " > " + val4 + ") is: " + result; // Update the inner HTML of the element to show the result of the logical OR comparison between the two conditions, which will be true
}

function Not_Logic(val1, val2, element) {
    var result = !(val1 > val2); // Declare a variable 'result' to store the outcome of the logical NOT comparison
    element.innerHTML = "The result of !(" + val1 + " > " + val2 + ") is: " + result; // Update the inner HTML of the element to show the result of the logical NOT comparison, which will be false
}