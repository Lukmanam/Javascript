const x=(()=>{
    let num=10;
    const interval=setInterval(()=>{
        console.log(num);
        num--;
        if(num===-1){
            clearInterval(interval)
        }
    },1000)
})

x()

