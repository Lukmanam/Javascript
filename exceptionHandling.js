function division(a,b){
    if(b===0)
    {
        throw new Error("not possible to divide with zero")
    }
    return a/b
}

try {
   const result= division(10,0)
    console.log(result)
} catch (error) {
    console.log("An Error Occured .",error.message)

    
}


