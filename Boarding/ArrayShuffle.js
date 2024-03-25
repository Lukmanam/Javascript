let a = [1,2,3,4,5]
// for (let i = 0; i < a.length; i++) {
//     let randomPosition = Math.floor(Math.random() * 10);
 
//     if (randomPosition < a.length) {
//         let temp = a[i];
//         a[i] = a[randomPosition];
//         a[randomPosition] = temp
//     }
// }

// console.log(a);

// function reverse(a){
//     for(let i=0;i<a.length/2;i++)
//     {
//         let temp=a[i];
//         a[i]=a[a.length-1-i];
//         a[a.length-1-i]=temp
//     }
//     console.log(a);

// }
// reverse(a)

var greet = function sayHello(name) {
    return 'Hello, ' + name + '!';
  };