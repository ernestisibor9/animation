// Select the class
const myBtn = document.querySelector('.btn')
const myTextColor = document.querySelector('.text-color')

// Add an event listener to the button
myBtn.addEventListener('click', changeBackgroundColor)

// Create a function to change the background color
function changeBackgroundColor(){
    // Create an array of colors
    let colors = ["red", "green", "yellow", "blue", "indigo", "brown", "orange", "violet", "black"]

    // Generate random number
    let randomNumber = Math.floor(Math.random() * colors.length)
    myTextColor.innerHTML = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
}