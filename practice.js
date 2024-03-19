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
// const x=10;
// const y=20
// console.log(eval("x+y"))

// let a=["lukman","sahabas","adnan","shageeq"];
// const x= a.includes("lukman");
// console.log(x)
// let a=[1,2,3,4,5,6,7,8,9,10]
// let largest=a.reduce((large,curr)=>
// {
    
//     if(curr>largeitem.largest)
//     {
//         largeitem.secondLargest=largeitem.largest
//         largeitem.largest=curr;       
// }
// if(curr<largeitem.largest && curr>largeitem.secondLargest)
// {
//     largeitem.secondLargest=curr
// }
// return largeitem

// },largeitem={
//     largest:a[0],
//     secondLargest:a[1]
// });


// console.log(largest)
// const str="lukman";
// const name=str.toUpperCase();
// console.log(name);
// let person={
//     name:"lukman",
//     place:"manejri",
    
// }
// let person2={
//     name:"shafeeq",
//     place:"calicut"
// }

// function userData(country){
     
//         console.log(`he is ${this.name} come from ${this.place}`);
//         console.log(country);
    
// }
const account={
    username:function(usersname){
        console.log("account name is",this.name,"username is ",usersname);
    }
}
const Student={
    name:"fayis"
}
account.username.call(Student,"lukmaaaaaaaaaaaaaaaaaan")
account.username.apply(Student,["lukmanAthimannil"])
// const final=account.username.bind(Student,"fayis kuttan")
// final()