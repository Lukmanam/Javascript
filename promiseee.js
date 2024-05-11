// const API=(()=>{
// return new Promise((resolve,reject)=>{
//    const data=null;
//    if(data)
//    {
//     resolve(data)
//    } 
//    else
//    {
//     reject("not available")
//    }
// })
// })
// async function fetch(){
//     try {
//         const user=await API();
//         console.log(user);
//     } catch (error) {
//      console.log(error);   
//     }
// }

// fetch()



const promise= new Promise((resolve,reject)=>{
   let data=false
   if(data){
    resolve("resolved")
   }else{
    reject("rejected")
   }
})

const hai=async()=>{
    try {
    let x=await promise
    console.log(x);
    
} catch (error) {
    
}
} 
hai();
