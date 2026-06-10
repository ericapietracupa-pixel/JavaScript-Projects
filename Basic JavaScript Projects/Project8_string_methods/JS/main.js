function concat_String() {
    // Concatenating multiple strings together
    var str1 = "I have ";
    var str2 = "made this ";
    var str3 = "into a complete ";
    var str4 = "sentence.";
    // Using the concat() method to combine the strings into one string
    var result = str1.concat(str2, str3, str4);
    // Displaying the result in an HTML element with id "Concat"
    document.getElementById("Concat").innerHTML = result;
}

function slice_Method() {
    // Using the slice() method to extract a portion of a string
    var Sentence = "All work and no play makes Johnny a dull boy.";
    // Using the slice() method to extract characters from index 27 to 33
    var Section = Sentence.slice(27, 33);
    // Displaying the result in an HTML element with id "Slice"
    document.getElementById("Slice").innerHTML = Section;
}

function toUpperCase_Method() {
    // Using the toUpperCase() method to convert a string to uppercase
    var str = "this sentence is originally in lowercase!";
    // Converting the string to uppercase
    var result = str.toUpperCase();
    // Displaying the result in an HTML element with id "Upper"
    document.getElementById("Upper").innerHTML = result;
}

function search_Method() {
    // Using the search() method to find the position of a substring within a string
    var str = "Look for the word 'word' in this sentence.";
    // Searching for the substring "word" in the string
    var result = str.search("word");
    // Displaying the result in an HTML element with id "Search"
    document.getElementById("Search").innerHTML = result;
}

function to_String_Method() {
    // Using the toString() method to convert a number to a string
    var num = 12345;
    // Converting the number to a string
    var str = num.toString();
    // Displaying the result in an HTML element with id "ToString"
    document.getElementById("ToString").innerHTML = str;
}

function precision_Method() {
    // Using the toPrecision() method to format a number to a specified length
    var num = 123.456789;
    // Formatting the number to 5 significant digits
    var result = num.toPrecision(5);
    // Displaying the result in an HTML element with id "Precision"
    document.getElementById("Precision").innerHTML = result;
}

function toFixed_Method() {
    // Using the toFixed() method to format a number to a specified number of decimal places
    var num = 3.14159;
    // Formatting the number to 2 decimal places
    var result = num.toFixed(2);
    // Displaying the result in an HTML element with id "Fixed"
    document.getElementById("Fixed").innerHTML = result;
}

function valueOf_Method() {
    // Using the valueOf() method to get the primitive value of a string
    var str = new String("This is a string object.");
    // Getting the primitive value of the string object
    var result = str.valueOf();
    // Displaying the result in an HTML element with id "Value"
    document.getElementById("Value").innerHTML = result;
}
