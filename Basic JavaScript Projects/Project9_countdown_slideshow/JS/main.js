// Countdown timer function
function countdown() {

    //gets the input from the user
    var seconds = document.getElementById("seconds").value;

    //function to perform the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick(); //Calls local function tick
}

//Image slideshow functions
let slideIndex = 0;
showSlidesAuto(); // Calls showSlidesAuto to run automatic slideshow

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Displays slides based on button clicked
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Gets array of slides based on how many "mySlides" elements there are
    let dots = document.getElementsByClassName("dot"); // Gets array of dots based on how many "dot" elements there are
    if (n > slides.length) { slideIndex = 1 } // Resets slideIndex to 1 if end of slides is reached
    if (n < 1) { slideIndex = slides.length } // sets slideIndex to # of slides if n is less than 1
    for (i = 0; i < slides.length; i++) { // goes through and hides all slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // resets all dots to inactive
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; // displays the current slide
    dots[slideIndex - 1].className += " active"; // sets the selected dot to active css style
}

// Runs automatic slideshow
function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Gets array of slides based on how many "mySlides" elements there are
    let dots = document.getElementsByClassName("dot"); // Gets array of dots based on how many "dot" elements there are
    for (i = 0; i < slides.length; i++) { // goes through and hides all slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // resets all dots to inactive
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++; // increases slideIndex for auto slideshow
    if (slideIndex > slides.length) { slideIndex = 1; } // Resets slideIndex once last slide is reached
    slides[slideIndex - 1].style.display = "block"; // displays the current slide
    dots[slideIndex - 1].className += " active"; // sets the selected dot to active css style
    setTimeout(showSlidesAuto, 5000); //Change image every 2 seconds
}



