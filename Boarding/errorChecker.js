try {
    
} catch (error) {
    if(error instanceof SyntaxError)
    {
        console.log("SYNTAX ERROR OCCURED");
    }
    else
    {
        console.log("An error Occured");
    }
}