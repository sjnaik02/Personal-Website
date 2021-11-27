var i = 0;
var txt = 'Shourya Naik'; // The text 
var speed = 200; // The speed/duration of the effect in milliseconds 

window.onload = function typeWriter() {
    console.log('hello')
        if (i < txt.length) {
          document.getElementById("hero-text").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
     }
 }

 //Making the navbar appear after scrolling through hero

 // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = window.innerHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("hidden")
  } else {
    navbar.classList.add("hidden");
  }
}

