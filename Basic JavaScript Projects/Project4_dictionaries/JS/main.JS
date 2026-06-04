function my_Dictionary() {
    // Person is a KVP (Key-Value Pair) object that contains information about a person. Each key is a property of the person, and each value is the corresponding information for that property.
    var Person = {
        Name: "Erica",
        Eye_Color: "Hazel",
        Hair_Color: "Blonde",
        Age: 37,
        Spoken_Language: "English"
    };
    // The delete operator removes a property from an object. If the property is successfully deleted, it returns true; otherwise, it returns false. After deletion, the property will no longer exist in the object.
    delete Person.Spoken_Language;
    
    // This will display "Erica speaks: undefined" because the Spoken_Language property has been deleted from the Person object.
    document.getElementById("Dictionary").innerHTML = Person.Name + " speaks: " + Person.Spoken_Language; 
}