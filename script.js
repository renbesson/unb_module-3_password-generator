// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  // Password length (>= 8 && <= 128)
  var pswdLength = prompt(
    "What is the password length you desire?\nRemembering that it should be between 8 and 128 characteres."
  );
  pswdLength = Number(pswdLength);

  while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
    pswdLength = Number(pswdLength);
    pswdLength = prompt("Please select a number between 8 and 128.");
  }
  // Includes lowercase?
  var pswdLowercase = confirm(
    "Shall I include lowercase letters to your password?"
  );

  // Includes uppercase?
  var pswdUppercase = confirm("How about uppercase letters?");

  // Includes numbers?
  var pswdNumbers = confirm(
    "Numbers should be included in the criteria as well?"
  );

  // Includes special characters?
  var pswdSpecialCharacters = confirm(
    "The password will be more secure if it has special characters.\nShould I include any?"
  );

  while (
    !pswdLowercase ||
    !pswdUppercase ||
    !pswdNumbers ||
    !pswdSpecialCharacters
  ) {
    alert("Please select at least one criteria.");
    pswdLowercase = confirm(
      "Shall I include lowercase letters to your password?"
    );
    pswdUppercase;
    pswdNumbers;
    pswdSpecialCharacters;
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
