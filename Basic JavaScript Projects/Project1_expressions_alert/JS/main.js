var message = "\"Hello, World!\", I said. \"Welcome to JavaScript programming.\""; // This is a string that includes escaped double quotes.
var message2 = "<br>This is a new line of text." + 
    " <br>This is another line of text that has been concatenated."; // This is a string that includes HTML line break tags and demonstrates string concatenation.

// This line declares multiple variables in a single statement, assigning them string values representing family members' names.
var FamilyName = "Smith", Mom = "Maria", Dad = "John", Son = "Michael", Daughter = "Emily"; 
var Sent1 = "This is the beginning of the string"; // This is a string variable initialized with a value.
var Sent2 = " and this is the end of the string"; // This is another string variable initialized with a value.

// This line displays an alert box with a message to the user.
window.alert("Hello, World! This is an alert box."); 

 // This line writes the value of the variable 'message' to the document, which includes the escaped double quotes.
document.write(message);

// This line writes the value of the variable 'message2' to the document, which includes HTML line break tags and demonstrates string concatenation.
document.write(message2);

// This line writes the value of the variable 'Son' to the document, preceded and followed by HTML line break tags for formatting.
document.write("<br>" + Son + "<br>"); 

// This line writes the result of the multiplication expression to the document.
document.write(3 * 4); 

document.write("<br>"); // This line writes an HTML line break to the document for formatting.

// This line concatenates the two string variables 'Sent1' and 'Sent2' and writes the result to the document.
document.write(Sent1 + Sent2); 