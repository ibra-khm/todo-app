let userName = prompt("What is your name?", "Name");
let gender = prompt("What is your gender?", "Male or Female");
let age = prompt("How old are you?");

if (age <= 0 || age == "") {
    alert("Invalid age");
    prompt("How old are you?");
}

let welcomeMessage = confirm("Do you want to continue to the welcome message?");

if (welcomeMessage == true) {
    if (gender == "Male" || gender == "male") {
        alert("Welcome Mr. " + userName)
    } 
    else if (gender == "Female" || gender == "female") {
        alert("Welcome Ms. " + userName)
    } 
    else {
        alert("Welcome " + userName)
    }
}