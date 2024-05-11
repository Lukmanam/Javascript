const person={
    name:"Lukman",
    Address:"Atimannil",
    country:"India",
    age:23,
}

const key=Object.keys(person);
const lastelem=key[key.length-1]
console.log(lastelem);
delete person[lastelem]
console.log(person);

