const a={
    a:"farhan",
    b:"shafeeq",
    c:"irfan",
    d:"junaid",
    e:"ridha"
}

let vowles=["a","e","i","o","u"];

for(let i in a)
{
    if(vowles.includes(i))
    {
        delete a[i]
    }
}


console.log(a);