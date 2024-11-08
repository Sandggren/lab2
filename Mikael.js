const email = document.getElementById("email")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quiz = document.getElementById("quiz")
const errors = document.getElementById("error")
const success = document.getElementById("success")


quiz.addEventListener("submit", function(event) {
    event.preventDefault();

    let errorMessages = []

    success.innerText = ' ';
    
    errors.innerText = ' ';

    if (!email.value) {
        errorMessages.push("Please write your email!");
    }

    if (!firstName.value) {
        errorMessages.push("Please write your first name!");
    }

    if (!lastName.value) {
        errorMessages.push("Please write your last name!");
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        errors.innerText = errorMessages.join(' ');
    } 
    
    else {
        success.innerText = "The quiz has been successfully submitted!"
        console.log("Quiz was submitted successfully!")
    }

});