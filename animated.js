var contain = document.querySelector(".container");
var signUp = document.querySelector(".sign-up-button");
var signIn = document.querySelector(".sign-in-button");
signUp.addEventListener("click", function() {
    contain.classList.add("sign-mode");
});
signIn.addEventListener("click", function() {
    contain.classList.remove("sign-mode");
});