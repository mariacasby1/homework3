//these variables will hold boolean answers to my confirm messages.
let char1
let special
let numeric
let lower
let upper
//these variables will hold strings of charactersets and then arrays of character sets
let lowerset1 = "abcdefghijklmnopqrstuvwxyz";
let lowerset = lowerset1.split("");
let upperset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperset = upperset1.split("");
let numberset1 = "1234567890";
let numberset = numberset1.split("");
let specialset1 = "!@#$%^&*()";
let specialset = specialset1.split("");
//this variable allow me to put final password as text on the page
let textareaEl = document.getElementById('password');

//This function holds all the rest of the code
function genpassFunction() {
  //prompt variable char1 will hold a number - confirm variables will hold true or false.
   char1 = prompt("How many characters would you like your password to contain? Enter a number 8-128.");
    if (char1 > 8 && char1 < 129) {
      var special = confirm("Click OK to confirm including special characters.");      
    } 
    else {
       return alert("Try Again. Enter a number between 8 and 128.");
      
    }
  numeric = confirm("Click ok to use numeric characters.");
  upper = confirm("Click ok to use uppercase characters.");
  lower = confirm("Click ok to use lowercase characters.");
  
  //check in my console of my variables to be removed in final code.
  console.log(char1, special, numeric, lower, upper);
//if statements to remove characters from character sets and later from final set  if confirm answer was false.
if (upper === false) {
  upperset = [];
}
if (special === false) {
  specialset = [];
}
if (numeric === false) {
  numberset = [];
}
//Will remove lowercase character set only if another set is true.
if (lower === false && (numeric === true || special === true || upper === true)) {
  lowerset = [];
  console.log(lowerset);
}
//if all character sets removed, alerts user that the password will be lowercase.
if (lower === false && numeric === false && special === false && upper === false) { 
  alert("You cannot eliminate all characters.  Your password will be lowercase.");
}
//Joins together all four character set arrays into one big array.
let fullset = lowerset.concat(upperset, numberset, specialset);
//console logs full set - to be removed later
 console.log(fullset);
//for loop creates an array of random numbers equal to the length of the char1, which holds the password length chosen by user
let numpass = [];
for (var i = 0; i < char1; i++) { 
numpass[i] = Math.floor(Math.random() * fullset.length);
  } 
  console.log(numpass);
  //uses random number array as indexes to form character array
  newPassword = [];
  console.log(fullset[numpass[0]]);
  for (var i = 0; i < numpass.length; i++) {
    newPassword[i] = fullset[numpass[i]];
    console.log(newPassword.join(""));
  }
  //puts final password in text area of document
  let finalPassword = newPassword.join("");
textareaEl.value = finalPassword;
  }
