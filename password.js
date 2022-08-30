let password = "testPassword1!";
let minChars = false;
let numCheck = false;
let lowercaseCheck = false;
let uppercaseCheck = false;
let specialCheck = false;
let passArray = password.split('');

// Minimum length check
if (passArray.length >= 10) {
    minChars = true;
}

// Check to see if it contains a number
for (let i = 0; i < passArray.length; i++) {
    if (!isNaN(parseFloat(passArray[i])) === true) {
        numCheck = true;
    }
}

// Check to see if it contains uppercase letters
for (let i = 0; i < passArray.length; i++) {
    if (/[a-z]/.test(passArray[i]) === true) {
        lowercaseCheck = true;
    }
}

// Check to see if it contains lowercase letters
for (let i = 0; i < passArray.length; i++) {
    if (/[A-Z]/.test(passArray[i]) === true) {
        uppercaseCheck = true;
    }
}

// check to see if it contains special characters
for (let i = 0; i < passArray.length; i++) {
    if (/[!@#\$%\^\&*\)\(+=._-]/.test(passArray[i]) === true) {
        specialCheck = true;
    }
}

// Final validation
if (
    numCheck === true
    && minChars === true
    && lowercaseCheck === true
    && uppercaseCheck === true
    && specialCheck === true
) {
    console.log('success')
}
else {
    console.log('failure')
}
