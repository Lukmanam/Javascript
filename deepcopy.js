const a={
    name:"lukman",
    place:"manjeri"
}


let acopy=JSON.parse(JSON.stringify(a));
let b={...a}
b.name="sahabas";
console.log(a,"aaaaaaaaaaa");
console.log(acopy);