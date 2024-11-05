const email = document.getElementById("email")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quiz = document.getElementById("quiz")
const errors = document.getElementById('error')


quiz.addEventListener("submit", function(event) {
    
    let errorMessages = []

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
        alert("Quiz answers has been submitted successfully!");
    }

});