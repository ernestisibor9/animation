// $str = "Hello world";
// // Slice
// console.log($str.slice(10));

// $str = "interpolation";
// console.log($str.substr(6, 9));

// console.log($str.slice(6, 9).concat(" love programming"));

// let str2 = "angular";

// let str3 = str2.slice(0, 2);
// console.log(str3.toUpperCase().concat("gular"));

const age = [23, 10, 5, 30, 54, 41, 9, 10, 5];

let ourAge = age.filter((ages)=>{
    return ages == 5
})

console.log(ourAge);