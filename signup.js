// Select the id or class
let myForm = document.getElementById('form');
let myUsername = document.getElementById('username');
let myEmail = document.getElementById('email');
let myPassword = document.getElementById('password');
let myPhone = document.getElementById('phone');
let myError = document.querySelector('.error');
let mySuccess = document.querySelector('.success');

// Add an event listener to the Registration form
myForm.addEventListener('submit', signup)

// Create a function to register
function signup(e){
    e.preventDefault();

    if(myUsername.value === "" || myEmail.value === "" || myPhone.value === "" || myPassword.value === "" ){
        myError.innerHTML = "Fields cannot be empty"
    }
    else{
        mySuccess.innerHTML = "Registration successful"
        localStorage.setItem("username", myUsername.value);
        localStorage.setItem("email", myEmail.value);
        localStorage.setItem("phone", myPhone.value);
        localStorage.setItem("password", myPassword.value);
    }
}