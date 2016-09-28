//create function
function startup(input) {
  var output;

  //control and return statements
  if (input==="hello") {
    output = "Hello world!";
  }
  else {
    output = "You did not enter hello.";
  }
  //Alert user results
  alert(output);
}

//Prompt user for input and store variable
var message = prompt("Please enter hello.");
//Call function
startup(message);