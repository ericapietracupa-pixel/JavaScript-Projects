// This JavaScript code defines several functions and a constructor to demonstrate the use of ternary operators, constructors, and nested functions in JavaScript.

//A function with HTML and JS using a ternary operator to determine if a user is tall enough to ride an attraction based on their height input. The function retrieves the user's height from an input element, checks if it is less than 52 cm, and updates the inner HTML of an element to display whether the user can ride or not.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote; // Declare variables 'Age' and 'Can_vote' to store the user's age and the result of the voting eligibility check
    Age = document.getElementById("Age").value; // Get the value of the input element with id "Age" and assign it to the variable 'Age'
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!"; // Use a ternary operator to check if the user's age is less than 18. If true, assign "You are not old enough to vote." to 'Can_vote'; otherwise, assign "You can vote!"
    document.getElementById("Vote").innerHTML = Can_vote; // Update the inner HTML of the element with id "Vote" to show the result of the voting eligibility check stored in 'Can_vote'
}

// A constructor function utilizing "new" and "this" keywords to create objects representing vehicles. The constructor takes parameters for the make, model, year, and color of the vehicle and assigns them to properties of the object being created. Then, instances of the Vehicle constructor are created for Jack, Emily, and Erik, each with different vehicle attributes. Finally, a function is defined to display information about Erik's vehicle using the properties of the 'Erik' object.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; // Assign the value of the 'Make' parameter to the 'Vehicle_Make' property of the object being created
    this.Vehicle_Model = Model; // Assign the value of the 'Model' parameter to the 'Vehicle_Model' property of the object being created
    this.Vehicle_Year = Year; // Assign the value of the 'Year' parameter to the 'Vehicle_Year' property of the object being created
    this.Vehicle_Color = Color; // Assign the value of the 'Color' parameter to the 'Vehicle_Color' property of the object being created
}   

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Create a new instance of the Vehicle constructor function for Jack's vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // Create a new instance of the Vehicle constructor function for Emily's vehicle
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // Create a new instance of the Vehicle constructor function for Erik's vehicle

// A function to display information about Erik's vehicle by updating the inner HTML of an element with id "Keywords_and_Constructors". The function constructs a string that describes Erik's vehicle using the properties of the 'Erik' object created from the Vehicle constructor function.
function myFunction() {
    // Update the inner HTML of the element with id "Keywords_and_Constructors" to show a description of Erik's vehicle using the properties of the 'Erik' object created from the Vehicle constructor function
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + 
    Erik.Vehicle_Color + 
    "-colored " + 
    Erik.Vehicle_Model + 
    " manufactured in " + 
    Erik.Vehicle_Year; 
}

function Nested_Function() {
    // Update the inner HTML of the element with id "Nested_Function" to show the result of calling the 'Count' function, which is defined as a nested function inside 'Nested_Function'
    document.getElementById("Nested_Function").innerHTML = Count(); 

    function Count() { // Define a nested function named 'Count' inside the 'Nested_Function'
        var Starting_point = 9; // Declare a variable 'Starting_point' and assign it the value of 9
        function Plus_one() {Starting_point += 1;} // Define another nested function named 'Plus_one' that increments the value of 'Starting_point' by 1
        while (Starting_point < 20) { // Use a while loop to check if 'Starting_point' is less than 20
            Plus_one(); // Call the 'Plus_one' function to increment 'Starting_point'
        }
        return Starting_point; // Return the updated value of 'Starting_point' after it has been incremented
    }
}