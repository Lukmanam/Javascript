function a(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("positive resolved")
    },4000)
    })
  }
  
  function b(){
   setTimeout(()=>{
     console.log("hello")
   },3000)
  }
  async function hello(){
   try{
    let x= await a();
    console.log(x)
     b();
   }catch(error){
     console.log(error)
   }
  }
  hello();