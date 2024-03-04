const promise=new Promise((resolve,reject)=>{
    let data=false
if(data)
{
    resolve("success")
}
else
{
    reject("failed")
}
})

async function fetchdata(){
    try {
         datatrue=await promise
        console.log(datatrue);
        
        
    } catch (error) {
        console.log(error);
    }
}

fetchdata()