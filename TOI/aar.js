let a=[12,34,56,21,98,65,231]

let x=-1;
for (let i=0;i<a.length;i++){
    if(a[i]%2===1){
        let temp=a[i];
        a[i]=a[x+1];
        a[x+1]=temp;
        x++;
    }
    
}
console.log(a);