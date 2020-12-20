var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArray = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArray = abcLower.split("");
var num = "0123456789";
var numArray = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArray = sym.split("");

//  alert to start

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// password

function generatePass(){
 var allChars = [];
 var resultPass = "";

// variables

 var Totlength = prompt("How many characters would you like your password to be? Choose betwwen 8-128");

 if(Totlength <8 || Totlength > 128){
     alert("Password must be between 8 and 128 characters long!\nPlease start over.");
 }

// Character options
 
 else{
     if(confirm("Would you like your password to contain upper case letters?Choose *cancel* for No")){
         Array.prototype.push.apply(allChars, abcUpperArray);
     }

     if(confirm("Would you like your password to contain lower case letters?Choose *cancel* for No")){
         Array.prototype.push.apply(allChars, abcLowerArray);
     }

     if(confirm("Would you like your password to contain numbers?Choose *cancel* for No")){
         Array.prototype.push.apply(allChars, numArray);
     }

     if(confirm("Would you like your password to contain symbols? Choose *cancel* for No")){
         Array.prototype.push.apply(allChars, symArray);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }


else{
  for(var i=0; i<Totlength; i++){
      var random = Math.floor(Math.random()*allChars.length);
      resultPass += allChars[random];
  }
}
}

// show password

document.getElementById("password").innerHTML = resultPass;
}

  