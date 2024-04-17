const myForm = document.getElementById("form");
const myLoginForm = document.getElementById("login-form");
const myUsername = document.getElementById("username");
const myEmail = document.getElementById("email");
const myPassword = document.getElementById("password");
const myPhone = document.getElementById("phone");
const myError = document.querySelector(".error");
const mySuccess = document.querySelector(".success");

// Add an event listener to the Registration form
// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     localStorage.setItem("username", myUsername.value);
//     localStorage.setItem("email", myEmail.value);
//     localStorage.setItem("password", myPassword.value);
//     localStorage.setItem("phone", myPhone.value);


//     if(myUsername.value.length === 0){
//         myError.innerHTML = "Please enter username"
//     }
//     else if(myEmail.value.length === 0){
//         myError.innerHTML = "Please enter email address"
//     }
//     else if(myPassword.value.length === 0){
//         myError.innerHTML = "Please enter password"
//     }
//     else if(myPassword.value.length > 6){
//         myError.innerHTML = "Password must not exceed  6 characters"
//     }
//     else if(myPhone.value.length === 0){
//         myError.innerHTML = "Please enter phone number"
//     }
//     else if(isNaN(myPhone.value)){
//         myError.innerHTML = "Invalid phone number"
//     }
//     else{
//         mySuccess.innerHTML = "Congratulations! You have successfully submitted"
//     }
// });

// Login Functionalities
myLoginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    if(myEmail.value === ''){
        myError.innerHTML = "Email is required"
    }
    else if(myEmail.value !== email){
        myError.innerHTML = "Email does not exists"
    }
    else if(myPassword.value === ''){
        myError.innerHTML = "Password is required"
    }
    else if(myPassword.value !== password){
        myError.innerHTML = "Password does not exists"
    }
    else{
        mySuccess.innerHTML = "You have successfully logged in"
        window.location.href = "profile.html"
    }
})