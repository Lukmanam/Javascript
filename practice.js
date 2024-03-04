// const map=new Map()

// let mymap=map.set(23,"lukman");
// console.log(mymap);
// console.log(mymap.has(23));


// console.log(map);
// console.log(mymap.has(23));
// console.log(map.size);

// x=map.get(23)
// console.log(x);


// const set=new Set()

// let a=set.add(23)
// set.add(23)
// set.add(23)


// console.log(a);

// let a=[12,43,43,87,3,97,242,97,3]
// let b=[...new Set(a)]
// b

// const promise=new Promise((resolve,reject)=>
// {
//     let data=true
//     if(data)
//     {
//         setTimeout(()=>{
//             console.log("data fetched after 5 seconds");
//         },5000)
//     }
//     else
//     {
//         reject("not ok")
//     }
// })


// async function datafetch(){
//     try {
//         const fetched=await promise
//         console.log(fetched); 
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// datafetch()


// function * generator(){
//     yield 20;
//     yield 100
// }

// let a=generator()
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// (function(){
//     console.log("sajid iife");
// })()

// setInterval(()=>{
//     console.log("sajid")
// },5000)

// function sum(a,b,cb)
// {
//     console.log("sum is",a+b);
//     cb(a,b)
// }

// function mult(a,b){
//     mult=a*b
//     console.log("multiple is",mult)
// }

// sum(10,12,mult)

// const person={
//     name:"sajid",
//     place:"manjeri",
// }

// const country={
// country:"india"
// }

// function print(place){
//     console.log(this.name);
//     console.log(this.country);
//     console.log(place)
// }

// print.call(person)
// print.call(country)
// print.apply(person,["calicut"])
// let a=print.bind(person)
// a(person,123);


// function a()
// {
//     let x=10;
//     function b()
//     {

//         let y=20;
//         function c()
//         {
//             let c=x+y;
//             console.log(c);
//         }
//         c()
//     }
//     b()
// }
// a()
// function sum(a){
//     return function(b){
//         return function(c)
//         {
//         return function(d)
//         {
//             return a+b+c+d
//         }}
//     }
// }


// console.log(sum(12)(22)(32)(34));