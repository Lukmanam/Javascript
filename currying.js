function sum(a){
   return function sum1(b)
    {
       return function sum2(c){
        return result = a+b+c
        }
    }

}
let sum1 = sum(result)

console.log(sum1(1),(2),(3))



let greeting = ((a) => (b) => a + ' ' + b) 

greeting('Hello There')('General Kenobi') 
//returns Hello There General Kenobi