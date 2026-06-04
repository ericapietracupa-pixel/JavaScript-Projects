function My_First_Function() {
    var str = "You clicked the button!"; // Variable str is declared and assigned a string value
    var fontColor = "blue"; // Variable fontColor is declared and assigned the string value "blue"
    document.getElementById("Paragraph_Text").innerHTML = str; // The innerHTML property of the element with id "Paragraph_Text" is set to the value of str
    document.getElementById("Paragraph_Text").style.color = fontColor; // The color style of the element with id "Paragraph_Text" is set to the value of fontColor
}

function Concatenate_Strings() {
    var sentence = "This is a "; // Variable sentence is declared and assigned the string value "This is a "
    sentence += "concatenated string!"; // The value of sentence is updated by concatenating the string "concatenated string!" to the existing value of sentence
    document.getElementById("Paragraph_Text").innerHTML = sentence; // The innerHTML property of the element with id "Paragraph_Text" is set to the value of sentence, which is the concatenation of "This is a , " and "concatenated string!"
}