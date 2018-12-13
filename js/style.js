$( document ).ready(function() {
    console.log( "ready!" );
});

var myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}