function currying(x)
{
  return function(y)
  {
    return function(z)
    {
      return x+y+z
    }
  }
}


console.log(currying(10)(20)(30))

const addx=currying(20);
const addy=addx(40);
const addzgetresult=addy(100);
console.log(addzgetresult,"partial application")