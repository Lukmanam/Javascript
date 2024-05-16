let string='Hello World'
let string2=string.split(' ');
for(let i=0;i<string2.length/2;i++){
    [string2[i],string2[string2.length-1-i]]=[string2[string2.length-1-i],string2[i]]
}
console.log(string2.join(' '));