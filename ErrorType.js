try{
    let x=null;
    console.log(x.length)
  }
  catch(error)
  {
  if(error instanceof TypeError)
  {
    console.log("type Error")
  }
  if(error instanceof ReferenceError)
  {
    console.log("Reference Error")
  }
  }
  finally{
    console.log("kurach ok aan kurch all")
  }