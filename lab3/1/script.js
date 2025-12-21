const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue.length < 5) {
        setError(username, "Usernames must be at least 5 characters");
    } else {
        setSuccess(username);
    }

    if (!isEmail(emailValue)) {
        setError(email, "The email format is incorrect");
    } else {
        setSuccess(email);
    }

    if (!isPhone(phoneValue)) {
        setError(phone, "Phone number must be 10 digits long");
    } else {
        setSuccess(phone);
    }

    if (!isPasswordComplex(passwordValue)) {
        setError(password, "Passwords must be at least 8 characters and include an upper case letter, lower case letter, number, and special character");
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === "") {
        setError(confirmPassword, "Please confirm password");
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Password do not match");
    } else {
        setSuccess(confirmPassword);
    }

    const formControls = document.querySelectorAll('.form-control');
    const allSuccess = [...formControls].every(fc => fc.classList.contains('success'));
    if (allSuccess) {
        alert("Registrations completed!");
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function isPhone(phone) {
        return /^[0-9]{10}$/.test(phone);
    }

    function isPasswordComplex(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password);
    }
}