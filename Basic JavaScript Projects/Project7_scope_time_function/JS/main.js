var X = 10; // Declare a global variable 'X' and assign it the value of 10

function Add_numbers_1() {
    document.write(20 + X + "<br>"); // Write the result of adding 20 to the global variable 'X' to the document, followed by a line break
}

function Add_numbers_2() {
    document.write(X + 100 + "<br>"); // Write the result of adding 100 to the global variable 'X' to the document, followed by a line break
}

function Add_numbers_3() {
    var Y = 10; // Declare a local variable 'Y' and assign it the value of 10
    document.write(20 + Y + "<br>"); // Write the result of adding 20 to the local variable 'Y' to the document, followed by a line break
}

function Add_numbers_4() {
    console.log(Y + 100 + "<br>"); // Attempt to write the result of adding 100 to the local variable 'Y' to the console. This will result in an error because 'Y' is not defined in this scope (it is only defined within the 'Add_numbers_3' function).
}

Add_numbers_1(); // Call the function 'Add_numbers_1' to execute its code
Add_numbers_2(); // Call the function 'Add_numbers_2' to execute its code
Add_numbers_3(); // Call the function 'Add_numbers_3' to execute its code
Add_numbers_4(); // Call the function 'Add_numbers_4' to execute its code, which will result in an error due to 'Y' being undefined in this scope

function get_Time() {
    if (new Date().getHours() < 12) { // Check if the current hour of the day is less than 12 (noon)
        document.getElementById("Greeting").innerHTML = "Good morning!"; // If the condition is true, update the inner HTML of the element with id "Greeting" to display a greeting message
    }
}

function Age_Function() {
    var Age = document.getElementById("Age").value;
    var Vote = "";
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }
    // This line will overwrite the previous inner HTML updates with an empty string, which may not be the intended behavior. It should be removed or modified to reflect the correct output based on the age input.
    document.getElementById("How_old_are_you?").innerHTML = Vote; 
}

function Time_function() {
    var Time = new Date().getHours(); // Get the current hour of the day using the Date object and assign it to the variable 'Time'
    var Reply;
    if (Time < 12 == Time > 0) { // Check if 'Time' is less than 12 and greater than 0 to determine the time of day
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) { // Check if 'Time' is greater than or equal to 12 and less than 18 to determine if it is afternoon
        Reply = "It is afternoon.";
    } else { // If neither of the previous conditions are true, it is assumed to be evening time
        Reply = "It is evening time.";
    }
    // Update the inner HTML of the element with id "Time_of_day" to display the appropriate message based on the current time of day determined by the previous conditions
    document.getElementById("Time_of_day").innerHTML = Reply;
}