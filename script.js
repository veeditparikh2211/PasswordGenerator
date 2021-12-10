// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

    var lowercaseletter = "abcdefghijklmnopqrstuvwxyz"
    var capitalsymbol = "ABCDEFGHIJKLMNOPQRSTYWXYZ"
    var number = "0123456789"
    var specialcharacters = "!@#$%^&*()_+-=~`{}\|[];':,.<>/";

    var password = "";
    var characters = "";
    var passwordlength = prompt("How many characters you need to generate the password");

    if (passwordlength >= 5 && passwordlength <= 15) {
        console.log(passwordlength);

    } else {
        alert("password must be betweeen 5 to 15 characters");

    }
    var numbers = confirm("Do you want numbers in your password");
    var lowercase = confirm("Do you want lowercase letter in your password");
    var uppercase = confirm("Do you want uppercase letter in your password");
    var specialchar = confirm("Do you want special characters in your password");

    if (numbers) {
        characters += number;

    }
    if (lowercase) {
        characters += lowercaseletter;
    }
    if (uppercase) {
        characters += capitalsymbol;
    }
    if (specialchar) {
        characters += specialcharacters;
    }

    if (!numbers && !lowercase && !uppercase && !specialchar) {
        return alert("please select atleast one character")
    }

    for (var i = 0; i < passwordlength; i++) {

        password += characters[Math.floor(Math.random() * characters.length)];

    }
    return password;


}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);