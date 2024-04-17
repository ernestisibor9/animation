// // creating a class
// class Person {
//       constructor(name) {
//         this.name = name;
//       }

//     // Greet method
//     greet() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// class Student extends Person{
//     myProperty() {
//         console.log("This is my property");
//     }
// }

// // Create an instance of the student class
// let student1 = new Student("Wura");
// console.log(student1.myProperty());

// console.log(student1.greet());

// CORRECTION
// Parent class
class School{
    constructor(name){
        this.name = name;
    }

    registerStudent(){
        console.log(this.name + " is registering students");
    }

    employTeachers(){
        console.log(this.name + " is employing teachers");
    }
}

// Child class
class Teacher extends School{

}

// Create an instance of a child class
let teacher1 = new Teacher("Peter");

console.log(teacher1.registerStudent());