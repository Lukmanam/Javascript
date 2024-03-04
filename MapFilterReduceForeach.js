let a=[12,543,89,43,9,52,78,689,23,67]



// MAP

let mapped=a.map((x)=>x*5)
console.log("mappp",mapped);


// FILTER

let filtered=a.filter((x)=>x%2===1);
console.log("FILTERR",filtered)


//REDUCE

let result=a.reduce((sum,x)=>sum+x);
console.log("REDUCE",result);


//FOREACH

a.forEach((x)=>

console.log(x));
