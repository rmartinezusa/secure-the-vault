
// assigning variables with the correct calculation to the combination.
const vaultVarOne = 5 + 5; // 5 + 5 = 10
const vaultVarTwo = 50 - 10; // 50 - 10 = 40 
const vaultVarThree = 3 * 13; // 3 * 13 = 39

// This will change the HTML content of an element with id:
document.getElementById("numOne").innerHTML = vaultVarOne;
document.getElementById("numTwo").innerHTML = vaultVarTwo;
document.getElementById("numThree").innerHTML = vaultVarThree;

// this will create a javaScript alert popup. 
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination: " + vaultVarOne + ", " +vaultVarTwo + ", " + vaultVarThree)