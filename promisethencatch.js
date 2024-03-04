// const promise=new Promise((resolve,reject)=>{
//     let data=false
//     if(data)
//     {
//         resolve("ok")
//     }
//     else
//     {
//         reject("not ok")
//     }
// }).then((a)=>{
// console.log(a);

// }).catch((error)=>{
// console.log(error);
// })


const promise=new Promise((resolve,reject)=>{
    let data=false
    if(data){
        resolve("ok")
    }
    else{
        reject("not ok")
    }

})

promise.then((result)=>{
    console.log(result);

})
promise.catch((result)=>
{
    console.log(result);
})













