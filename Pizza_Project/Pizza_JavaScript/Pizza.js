function getReceipt() {
    //This initializes our string so it can get passed from 
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //Go through size radio buttons and add the size to the begining
    //of the order text to be displayed later
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //Determine starting price based on size of pizza selected
    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }  else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    //Log current variables to ensure program is running correctly
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

//This function goes through all the elements with the class "Topping"
//and adds all the checked items to the selectedTopping Array
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    
    if(toppingCount > 1){
        //as long as 1 topping selected, give first topping for free
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //Add the number of toppings selected to the running total 
    // (this assumes that each addition topping costs $1, if each topping were to
    //cost more than $1 you would multiply the cost per topping by number of toppings then
    //add it to the total
    runningTotal = (runningTotal + toppingTotal);
    //log everything to the console to check the program is running as intended
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = $"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: $"+runningTotal+".00");
    //Once all calculations are complete display the list of options and total price
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00</strong></h3>";
};