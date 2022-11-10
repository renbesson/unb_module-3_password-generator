// Assignment Code

// +++++ Stores the button and textarea refs into variables -----
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// ----- Stores the button and textarea refs into variables +++++

// +++++ Function that calls the confirm questions and return the answers -----
var questions = function () {
  // Password length (>= 8 && <= 128)
  do {
    var pswdLength = prompt(
      "What is the password length you desire?\nRemembering that it should be between 8 and 128 characteres."
    );
    pswdLength = Number(pswdLength);
  } while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128);

  // Criteria questions
  do {
    alert("Please select at least one criteria.");

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
  } while (
    !pswdLowercase &&
    !pswdUppercase &&
    !pswdNumbers &&
    !pswdSpecialCharacters
  );

  return {
    pswdLength,
    pswdLowercase,
    pswdUppercase,
    pswdNumbers,
    pswdSpecialCharacters,
  };
};
// ----- Function that calls the confirm questions and return the answers +++++

// +++++ Function that returns a character based on the type provided -----
var getChar = function (type) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!@#$%^&*()-_=+";

  if (type === "lowercase") {
    var position = Math.floor(Math.random() * alphabet.length);
    return alphabet[position];
  } else if (type === "uppercase") {
    var position = Math.floor(Math.random() * numbers.length);
    return alphabet.toUpperCase()[position];
  } else if (type === "number") {
    var position = Math.floor(Math.random() * numbers.length);
    return numbers[position];
  } else if (type === "special") {
    var position = Math.floor(Math.random() * special.length);
    return special[position];
  }
};
// ----- Function that returns a character based on the type provided +++++

// +++++ Function that returns a random type -----
var getType = function (answers) {
  do {
    var num = Math.floor(Math.random() * 4);
    if (num === 0 && answers.pswdLowercase === true) return "lowercase";
    if (num === 1 && answers.pswdUppercase === true) return "uppercase";
    if (num === 2 && answers.pswdNumbers === true) return "number";
    if (num === 3 && answers.pswdSpecialCharacters === true) return "special";
  } while (true);
};
// ----- Function that returns a random type +++++

// +++++ Function that returns the new password -----
var generatePassword = function (answers) {
  var newPassword = "";

  for (i = 1; i <= answers.pswdLength; i++) {
    var randomType = getType(answers);
    var randomChar = getChar(randomType);

    newPassword += randomChar;
  }
  return newPassword;
};
// ----- Function that returns the new password +++++

// Write password to the #password input
function writePassword() {
  var answers = questions();
  var password = generatePassword(answers);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
