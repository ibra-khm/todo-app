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

let answers = []
let questions = []
questions[0]=prompt("Are you an early bird?")
questions[1]=prompt("Do you like coffee?")
questions[2]=prompt("Do you use a todo list often?")

for (let x = 0 ; x < 3 ; x++){
    switch(answers[x]){
        case "Yes":
        case "yes":
        case "y":
            answer.push("Yes")
            break;

        case "No":
        case "no":
        case "n":
            answers.push("No")
            break;

        default:
            answers.push("invalid")
    }
}

console.log(answers);

let rate = prompt("How would you rate your experience out of 5 stars?")

if (rate >=5) {
    rate = 5;
    alert("wow you gave us 5 stars! Thank You!")
}
    else if (rate <= 0){
        rate = 0;
        alert("We're sorry to see you rated us 0 stars")
    }
    else if (rate > 0 && rate < 5){
        alert("Thank you for your " + rate + " stars rating")
    }


// if (moreQuestions == false){
//     alert("thank you for your time")
// }
// if (moreQuestions == true){

// }