const email = document.getElementById("email")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quiz = document.getElementById("quiz")


quiz.addEventListener("submit", function(event) {
    event.preventDefault();

    if (email.value == "") {
        alert("Please write your email");
    }

});
