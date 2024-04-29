const h={
    name:"hh",
    place:"bb",
    xx:"yyy"
}
const array=Object.keys(h);
console.log(array);
delete h[array[array.length-2]];
console.log(h);