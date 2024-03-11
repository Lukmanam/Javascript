let a = [12, 354, 57, 3, 6, 457];
a.map((num) => {
    console.log(num, "aaa");
})



a.filter((num) => {
    num % 2 === 0 ? console.log(num) : console.log("not even");
})


let x = a.reduce((acc, curr) => {
    return acc + curr;

})
console.log(x, "this is sum");
console.log(a);