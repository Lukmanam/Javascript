// let a=[12,34,56,21,98,65,231]

// let x=-1;
// for (let i=0;i<a.length;i++){
//     if(a[i]%2===1){
//         let temp=a[i];
//         a[i]=a[x+1];
//         a[x+1]=temp;
//         x++;
//     }

// }
// console.log(a);

//searchalgorithms


// linearSearch
// function linearSearch(a,target){
//     for(let i=0;i<a.length;i++)
//         {
//             if(a[i]===target)
//                 {

//                     return i;
//                 }
//         }
// }
// let a=[12,45,13,67,234,681,1,4];
// console.log(

//     linearSearch(a,45)
// )

// binarySearch recursion

// function binarySearch(a,target,left, right){
//     if(left>right){
//         return -1
//     }
//     let middle=Math.floor((left+right)/2);
//     if(a[middle]===target){
//         return middle
//     }
//     else if(target<a[middle]){
//         return binarySearch(a,target,left,middle-1)
//     }
//     else{
//         return binarySearch(a,target,middle+1,right)
//     }
// }
// let a=[1,2,3,4,5,6,7,8,9,10]
// console.log(binarySearch(a,1,0,a.length-1))

// binarySearchIteration

// function binarySearch(a,target){
//   let left =0;
//   let right=a.length-1;
//   while(left<=right)
//     {
//         let middle=Math.floor((left+right)/2);
//         if(a[middle]==target){
//             return middle
//         }
//         else if(target<a[middle]){
//             right=middle-1;

//         }
//         else{
//             left=middle+1
//         }
//     }
// }
// let a=[1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(a,10))



// bubbleSort
// function bubbleSort(a){
//     let n=a.length-1;
//     let swapped;
//     do {
//         swapped=false
//         for(let i=0;i<a.length;i++){
//             if(a[i]>a[i+1]){
//                 let temp=a[i];
//                 a[i]=a[i+1];
//                 a[i+1]=temp;
//                 swapped =true;
//             }
//         }

//         n--;
//     } while (swapped);
//     return a
// }

// Selectionsort
// function Selectionsort(a){
//     for(let i=0;i<a.length;i++){
//         let small=i;
//         for(let j=i+1;j<a.length;j++){
//             if(a[j]<a[small]){
//                 small=j;
//             }
//         }
//         if(i!==small){
//             [a[i],a[small]]=[a[small],a[i]]
//         }
//     }
//     return a
// }

// insertionSort
// function insertionSort(a){
//     for(let i=0;i<a.length;i++){
//         let temp=a[i];
//         let j=i-1;
//         while(j>=0 && a[j]>temp){
//             a[j+1]=a[j];
//             j--;
//         }
//         a[j+1]=temp
//     }
//     return a
// }

//QuickSort
// function QuickSort(a){
// if(a.length<2){
//     return a
// }
// let left=[];
// let right=[];
// let pivot=a[0];
// for(let i=1;i<a.length;i++){
//     if(a[i]>pivot){
//         right.push(a[i])
//     }
//     else{
//         left.push(a[i])
//     }
// }
// return [...QuickSort(left),pivot,...QuickSort(right)]
// }\


// mergesort
// function mergesort(a){
//     if(a.length<2){
//         return a
//     }
//     let middle=Math.floor(a.length/2)
//     let lefta=a.slice(0,middle);
//     let righta=a.slice(middle)
//     return merge(mergesort(lefta),mergesort(righta));
//     function merge(lefta,righta){
//         let sorted=[];
//         while(lefta.length && righta.length){
//             if(lefta[0]<righta[0]){
//                 sorted.push(lefta.shift())
//             }
//             else{
//                 sorted.push(righta.shift())
//             }
//         }
//         return [...sorted,...lefta,...righta]
//     }
// }
// let a=[234,35,6,92,31]
// console.log(mergesort(a))


// class stack{
//     constructor(){

//         this.items=[]
//     }

//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         if(this.items.length===0){
//             console.log('stack Underflow')
//         }else{
//             this.items.pop();
//         }
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }
// }

// const stack1=new stack();
// stack1.push(100);
// stack1.push(888);
// stack1.push(546);
// stack1.pop()
// console.log(stack1);
// console.log(stack1.isEmpty());

// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         if(this.items.length===0){
//             console.log("Underflow")
//         }else{

//             this.items.shift()
//         }
//     }
//     size(){
//         return this.items.length
//     }

// }
// const queue1=new Queue()
// queue1.enqueue(100);
// queue1.enqueue(200);
// queue1.enqueue(1000);
// queue1.dequeue()
// queue1.dequeue()
// queue1.dequeue()
// queue1.dequeue()
// queue1
// console.log(queue1)

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }

// }
// class Stack{
//     constructor(){
//         this.top=null;
//         this.size=0;
//     }

//     push(value){
//         const node=new Node(value)
//         if(this.top){
//             node.next=this.top
//         }
//         this.top=node;
//         this.size++;
//     }
//     pop(){
//         if(!this.top){
//             return 'underflow'
//         }
//         else{
//             const popped=this.top;
//             console.log(popped);
//             this.top=this.top.next;
//             this.size--;

//         }
//     }
//     peek(){
//         return this.top.value
//     }
//     size(){
//         return this.size
//     }
// }
// const stack1= new Stack();
// stack1.push(100);
// stack1.push(200);
// stack1.push(300);
// stack1.pop();
// console.log(stack1)




// queueLinkedlIST
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){

//         this.front=null;
//         this.rear=null;
//         this.size=0;

//     }

//     enqueue(value){
//         const node =new Node(value);
//         if(this.rear){
//             this.rear.next=node
//         }
//         else{
//             this.front=node
//         }
//         this.rear=node;
//         this.size++;
//     }
//     dequeue(){
//         if(!this.front){
//             return 'queue empty'
//         }
//         else{
//             this.front=this.front.next;
//             this.size--;

//         }
//     }
//     peek(){
//         return this.front.value
//     };
//     isEmpty(){
//         return this.size===0
//     }
//     printQueue(){
//         let current=this.front;
//         let queuevalues=[]
//         while(current){
//             queuevalues.push(current.value)
//             current=current.next
//         }
//         console.log( queuevalues.join('<'))
//     }


// }

// const queue1=new Queue()
// queue1.enqueue(100);
// queue1.enqueue(200);
// queue1.enqueue(300);
// queue1.dequeue()
// console.log(queue1);
// queue1.printQueue()



class 
