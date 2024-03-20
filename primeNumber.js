let a=[1,2,3,4,5,6,7,8,9,10,11,12,13];
for(let i=0;i<a.length;i++)
{
let flag=0
  if(a[i]===1)
  {
    continue
  }
  for(j=2;j<a[i];j++)
  {
    if(a[i]%j==0)
    {
      flag++;
      break
    }
  }
  if(flag===0)
  {
    console.log(a[i])
  }
  
}