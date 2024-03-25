// let a=[12,54,7,3,64,67,76,8];
// a.reduce((small,curr)=>{
//     if(curr<small)
//     {
//         small=cu
//     }
    
//     curr=small;
//     if(curr<)
// })
// const a=()=>{
//     console.log("hai");
//     let x=10;
//     return x
// }


// function a(){
    
// }

// const Api=()=>{
//     return new Promise((resolve,reject)=>{
//         let data=true;
//         if(data)
//         {
//             resolve("data available")
//         }
//         else
//         {
//             reject("not available")
//         }
//     })
// }

// const fetch=async()=>{
//     try {
//       const a=await Api();
//       console.log(a)
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetch();
// let a=[12,34,67,35,578,897,35,1];
// let b=[23,46,76,43,1,89,54634,897];

// function commonMinMax(a,b){
//    let sorteda= a.sort((a,b)=>a-b)
//     for(let i=0;i<b.length;i++)
//     {
//         for(let j=0;j<b.length;j++)
//         {
         
//             if(sorteda[i]===b[j])
//             {
//                 console.log("common min=",a[i]);
//                 break;
//             }
//         }
//     }

//     for(let i=0;i<b.length-1;i++)
//     {
//         for(let k=b.length-1;k>=0;k--)
//         {
          
//             if(sorteda[i]=== b[k])
//             {
//                 console.log("common max",b[k]);
//                 break;
                
//             }
//         }
//     }


// }


// commonMinMax(a,b)
// function commonMinMax(a, b) {
//     let sortedA = a.sort((a, b) => a - b);

//     // Finding common min
//     for (let i = 0; i < b.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (sortedA[i] === b[j]) {
//                 console.log("Common min =", a[i]);
//                 break;
//             }
//         }
//     }

//     // Finding common max
//     let sortedB = b.sort((a, b) => a - b);
//     for (let i = 0; i < a.length; i++) {
//         for (let k = b.length - 1; k >= 0; k--) {
//             if (sortedA[i] === sortedB[k]) {
//                 console.log("Common max =", b[k]);
//                 break;
//             }
//         }
//     }
// }

// let a = [12, 34, 67, 35, 578, 897, 35, 100,364783];
// let b = [23, 46, 76, 43, 1, 89, 54634, 897,364783];

// commonMinMax(a, b);
