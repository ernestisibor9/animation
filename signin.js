// Select the id or class
let myForm = document.getElementById('form');
let myEmail = document.getElementById('email');
let myPassword = document.getElementById('password');
let myError = document.querySelector('.error');
let mySuccess = document.querySelector('.success');

// Add an event listener to the Login form
myForm.addEventListener('submit', loginForm)

// Create a function to handle the login
function loginForm(e){
    e.preventDefault();

    if(myEmail.value === "" || myPassword.value === "" ){
        myError.innerHTML = "Fields cannot be empty"
    }
    else{
        let emailBukola = localStorage.getItem('email')
        let passwordBukola = localStorage.getItem('password')
        if(emailBukola === myEmail.value && passwordBukola === myPassword.value){
            // mySuccess.innerHTML = "Congratulations! You have successfully login"
            window.location.href = "welcome.html"
        }
        else{
            myError.innerHTML = "Invalid email or password"
            mySuccess.style.display = "none"
        }
    }
}
