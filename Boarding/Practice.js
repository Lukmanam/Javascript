// // let a=[12,54,7,3,64,67,76,8];
// // a.reduce((small,curr)=>{
// //     if(curr<small)
// //     {
// //         small=cu
// //     }
    
// //     curr=small;
// //     if(curr<)
// // })
// // const a=()=>{
// //     console.log("hai");
// //     let x=10;
// //     return x
// // }


// // function a(){
    
// // }

// // const Api=()=>{
// //     return new Promise((resolve,reject)=>{
// //         let data=true;
// //         if(data)
// //         {
// //             resolve("data available")
// //         }
// //         else
// //         {
// //             reject("not available")
// //         }
// //     })
// // }

// // const fetch=async()=>{
// //     try {
// //       const a=await Api();
// //       console.log(a)
        
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }
// // fetch();
// // let a=[12,34,67,35,578,897,35,1];
// // let b=[23,46,76,43,1,89,54634,897];

// // function commonMinMax(a,b){
// //    let sorteda= a.sort((a,b)=>a-b)
// //     for(let i=0;i<b.length;i++)
// //     {
// //         for(let j=0;j<b.length;j++)
// //         {
         
// //             if(sorteda[i]===b[j])
// //             {
// //                 console.log("common min=",a[i]);
// //                 break;
// //             }
// //         }
// //     }

// //     for(let i=0;i<b.length-1;i++)
// //     {
// //         for(let k=b.length-1;k>=0;k--)
// //         {
          
// //             if(sorteda[i]=== b[k])
// //             {
// //                 console.log("common max",b[k]);
// //                 break;
                
// //             }
// //         }
// //     }


// // }


// // commonMinMax(a,b)
// // function commonMinMax(a, b) {
// //     let sortedA = a.sort((a, b) => a - b);

// //     // Finding common min
// //     for (let i = 0; i < b.length; i++) {
// //         for (let j = 0; j < b.length; j++) {
// //             if (sortedA[i] === b[j]) {
// //                 console.log("Common min =", a[i]);
// //                 break;
// //             }
// //         }
// //     }

// //     // Finding common max
// //     let sortedB = b.sort((a, b) => a - b);
// //     for (let i = 0; i < a.length; i++) {
// //         for (let k = b.length - 1; k >= 0; k--) {
// //             if (sortedA[i] === sortedB[k]) {
// //                 console.log("Common max =", b[k]);
// //                 break;
// //             }
// //         }
// //     }
// // }

// // let a = [12, 34, 67, 35, 578, 897, 35, 100,364783];
// // let b = [23, 46, 76, 43, 1, 89, 54634, 897,364783];

// // commonMinMax(a, b);


// // function commonMinMax(a, b) {
   
// //     let minA = Math.min(...a);
// //     let maxA = Math.max(...a);

    
// //     if (b.includes(minA)) {
// //         console.log("Common min =", minA);
// //     } else {
// //         console.log("No common minimum value found.");
// //     }

// //     if (b.includes(maxA)) {
// //         console.log("Common max =", maxA);
// //     } else {
// //         console.log("No common maximum value found.");
// //     }

//     // Check if minimum and maximum values in b are present in a
//     // if (a.includes(minB)) {
//     //     console.log("Common min =", minB);
//     // } else {
//     //     console.log("No common minimum value found.");
//     // }

//     // if (a.includes(maxB)) {
//     //     console.log( maxB);
//     // } else {
//     //     console.log("No common maximum value found.");
//     // }
// // }

// // commonMinMax(a, b);

// // function commonMinandMax(a,b)
// // {

// //     let common=[]
// //     for(let i=0;i<a.length;i++)
// //     {
// //        if(b.includes(a[i]))
// //        {
// //         common.push(a[i])
// //        }
// //     }
// //     let commonminimum=Math.min(...common);
// //     let commonmaximum=Math.max(...common);
// //   console.log("common minimum=",commonminimum);
// //   console.log("common maximum=",commonmaximum);

// // }
// // commonMinandMax(a,b)

// // LinrearSearch

// // function binarySearch(start,end,a,target){
// //     if(start>end)
// //     {
// //         return -1
// //     }
// //     let middle=Math.floor((start+end)/2)
// //     if(a[middle]===target)
// //     {
// //         return middle
// //     }
    
// //     if(target<a[middle])
// //     {
// //         return binarySearch(start,middle-1,a,target)
// //     }
// //     else
// //     {
// //         return binarySearch(middle+1,end,a,target)
// //     }
    
// // }
// // let a=[12,23,45,67,89,90,120]
// // let start=0;
// // let end=a.length-1;
// // console.log(
// // binarySearch(start,end,a,17720));

// function insertionSort(a){
// for(let i=1;i<a.length;i++)
// {
//     let j=i-1
//     let temp=a[i];
//     while(j>=0&&a[j]>temp)
//     {
//         a[j+1]=a[j];
//         j--;
//     }
//     a[j+1]=temp;
// }
// }


let a=[[0,0,1],
       [1,0,0],
       [1,0,0]    
]
let count=0;
for(let i=0;i<a.length;i++)
{
for(let j=0;j<a[i].length;j++)
{
    if(a[j]===1)
    {
        if(a[j]===a[j+1])
        {
            count++;
        }
        if(a[j]===a[i])
        {
            count++; 
        }

    }


}
}
console.log(count);