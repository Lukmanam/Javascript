
function  countDown(){
    let num=10;
   let x= setInterval(()=>{

        console.log(num)
        num--;
        if(num===-1)
        {
            clearInterval(x)
        }
    },1000)
}
countDown();