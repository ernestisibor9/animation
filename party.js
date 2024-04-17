// Filter'
// const subjects = ["Mathematics", "English", "Chemistry", "Physics", "Biology"]

// const filteredSubjects = subjects.filter(function(subject){
//     return subject === "Chemistry" || subject === "Physics"
// })

// console.log(filteredSubjects);

// const grades = ["A", "F", "D", "A", "B", "E", "B", "E", "B", "C"];

// const passGrades = grades.filter(function (grade) {
//     let passGrade = ["A", "B", "C", "D"];
//       if (passGrade.includes(grade)) {
//         return grade;
//       }
// });

// console.log(passGrades);


// // An array of objects (Products)

// const products = [
//       {
//         id: 1,
//         name: "black bag",
//         category: "women",
//         price: 500,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//       {
//         id: 2,
//         name: "shoe",
//         category: "women",
//         price: 400,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//       {
//         id: 3,
//         name: "shoe",
//         category: "men",
//         price: 400,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//       {
//         id: 4,
//         name: "laptop",
//         category: "electronics",
//         price: 400000,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//       {
//         id: 5,
//         name: "Hp laptop",
//         category: "electronics",
//         price: 500000,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//       {
//         id: 6,
//         name: "bag",
//         category: "men",
//         price: 500,
//         description:
//           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//       },
//     ];

//     // Create a function to find the id selected

//     function getSingleProduct(id){
//         // Find the product via the id
//         let myProduct = products.find(function(product){
//             return product.id === id;
//         });
//         console.log(myProduct);
//     }

//     getSingleProduct(4)

// Every


const cars = ["Volvo", "Camry"];

const everyCar = cars.some(function (car) {
  return car === "Volvo";
});
console.log(everyCar);