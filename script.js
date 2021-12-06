var i = 0;
var txt = 'Shourya Naik'; // The text 
var speed = 200; // The speed/duration of the effect in milliseconds 

window.onload = function typeWriter() {
        if (i < txt.length) {
          document.getElementById("hero-text").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
     }
 }

 //Making the navbar appear after scrolling through hero

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

var sticky = window.innerHeight;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("hidden")
  } else {
    navbar.classList.add("hidden");
  }
}

