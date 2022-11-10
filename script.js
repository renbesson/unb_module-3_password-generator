// Assignment Code
var generateBtn = document.querySelector("#generate");

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

var randomType = function (answers) {
  do {
    var num = Math.floor(Math.random() * 4);
    if (num === 0 && answers.pswdLowercase === true) return "lowercase";
    if (num === 1 && answers.pswdUppercase === true) return "uppercase";
    if (num === 2 && answers.pswdNumbers === true) return "number";
    if (num === 3 && answers.pswdSpecialCharacters === true) return "special";
  } while (true);
};

var generatePassword = function () {
  var newPassword = "";
  var answers = questions();

  for (i = 1; i <= answers.pswdLength; i++) {
    newPassword += getChar(randomType(answers));
  }
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
