// const a=[12,1,46,78,35,768,38,253]
// // Can be done useing three ways
// // spread  operator
// // using map
// // using slice

// x=[...a]

// console.log("spread operator",x);

// const y=a.slice(0,9)
// console.log(" using slice",y);

// z=x.map((a=>a))
// console.log("using map",z);



// // REST OPERATOR
// let array=[1,3,4,1,67,35,67]

// const [lukman,...rest]=array
//  console.log(lukman);
//  console.log(rest);


// //can also use in function to passs parameters
// let mult=1
// function multiple(...numbers){

//     for (number of numbers){
//         mult=mult*number
//     }
//     console.log(mult);
// }

// multiple(12,34,56,3)
let a=[12,43,[123,9],56,43,8,4]
let b=JSON.parse(JSON.stringify(a))
a[2][0]=5600

console.log();

