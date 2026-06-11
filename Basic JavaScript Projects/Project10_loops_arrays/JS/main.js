// Function using a While loop
function Call_Loop() {
    var count = 0;
    var msg = "";
    while (count < 10) {
        count++;
        msg += count + "<br>";
    }
    var lengthOfMsg = msg.length;
    document.getElementById("Loop").innerHTML = msg + "The variable msg contains " + lengthOfMsg + " characters.";
}

// Function using a for loop
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// A function using an array
function array_Function() {
    var Cat_Pics = [];
    Cat_Pics[0] = "sleeping";
    Cat_Pics[1] = "playing";
    Cat_Pics[2] = "eating";
    Cat_Pics[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Pics[3] + ".";
}

// Declared a constant variable
const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };

// A function using the constant variable
function constant_function() {
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";

    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Function using the let keyword
function let_function() {
    var X = 52;
    var msg = X;
    {
        let X = 10; //This variable only has block range
        msg += "<br>" + X;
    }
    msg += "<br>" + X;
    document.getElementById("Let").innerHTML = msg;
}

// Function using return statement
function get_Name() {
    var name = "Erica";
    return name;
}

// Function calling the get_Name function that returns a string
function return_function() {
    document.getElementById("Return").innerHTML = "Hello, " + get_Name();
}

// Creating an object with the let Keyword
function object_function() {
    let car = {
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "red",
        description: function () {
            return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
    }

    document.getElementById("Car_Object").innerHTML = car.description();
}

//Function using a break within a loop
function break_function() {
    let text = "";

    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; } // Break out of the loop when i = 3
        text += "The number is " + i + "<br>";
    }

    document.getElementById("Break").innerHTML = text;
}

//Function using continue within a loop
function continue_function() {
    let text = "";

    for (let i = 1; i < 10; i++) {
        if (i === 3) { continue; } // Skip to the next iteration when i = 3
        text += i * 10 + "<br>";
    }

    document.getElementById("Continue").innerHTML = text;
}