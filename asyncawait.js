// const promise=new Promise((resolve,reject)=>{
//     let data=true
// if(data)
// {
//     resolve("success")
// }
// else
// {
//     reject("failed")
// }
// })

// async function fetchdata(){
//     try {
//          datatrue=await promise
//         console.log(datatrue);
        
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchdata()
const promise=new Promise((resolve,reject)=>{

    let data=true;
    if(data)
    {
        resolve("full success")
    }
    else
    {
        reject ("failed")
    }
});


async function fetchdata(){
    try {
       const data= await promise;
       console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}