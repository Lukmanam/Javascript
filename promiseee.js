const API=(()=>{
return new Promise((resolve,reject)=>{
   const data=null;
   if(data)
   {
    resolve(data)
   } 
   else
   {
    reject("not available")
   }
})
})
async function fetch(){
    try {
        const user=await API();
        console.log(user);
    } catch (error) {
     console.log(error);   
    }
}

fetch()