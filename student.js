// // Create a student object

// let student = {
//     name: "Michael Tyson",
//     car: "Ferrari", 
//     age: 23,
//     city: "London",
//     matric: "Eng4198",
//     isHeAStudent: true,
//     faculty:{
//         name: "Engineering",
//         department: "Mechanical Engineering"
//     },
//     greet: function(){
//         let zazzu = "Portable";
//         console.log("My favorite car is " + this.car + " " + zazzu + " is a local artist");
//     }
// };

// student.greet();

// console.log(student.faculty);

let person={
    name: "Michael Jackson",
    car: "Ferrari", 
    age: 50,
}

// Destructuring the object
let {name, car, age} = person;

console.log(car);