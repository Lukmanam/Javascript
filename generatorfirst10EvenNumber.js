function * generateevennumbers(){
    let count=0;
    while(count<10);
    {   console.log("hai");
        yield count *2;
        count++; 
    }
}
const generatenumbers=generateevennumbers();

    for(let i=0;i<10;i++)
    {
      console.log( generatenumbers.next().value) 
    }

