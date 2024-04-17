// Select the id or class
let myBasicSalary = document.getElementById('basic_salary');
let myTaxPercent = document.getElementById('tax_percent');
let myBtn = document.querySelector('.btn')
let myError = document.querySelector('.error');
let mySuccess = document.querySelector('.success');

// Add an event listener to the button
myBtn.addEventListener('click', myTaxCal)

// Create a function to calculate the tax
function myTaxCal(){
    if(myBasicSalary.value === "" || myTaxPercent.value === ""){
        myError.innerHTML = "Please enter a basic or tax percentage"
    }
    else{
        let myTax = myTaxPercent.value * myBasicSalary.value
        mySuccess.innerHTML = "Your tax is &#8358;" + myTax.toFixed(2)
    }
}