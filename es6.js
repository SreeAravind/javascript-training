// console.log("...........Es6 Arrow Function..........")

// for(let i=0;i<=5;i++){
//     setTimeout(()=>console.log("set timeout : "+i),1000)
//     console.log("normal : " +i);
// }

// class Employee{
//     constructor(name,id){
//          this.name=name
//         this.id=id
//     }
//     getemployedetail(){
//         setTimeout(()=>console.log(this.name),1000)
//     }
//     user=setTimeout(()=>{console.log(this.id)},1000)
// }
// const objemp=new Employee("suganth",20)
// objemp.getemployedetail()


// console.log("...........Es6 Destructuring Assignment ..........")
// console.log(".........object destructuring..........")
// const myobj={
//     fstname:"siva",
//     job:"soft developer",
//     id:123124,
//     education:{
//         school:true,
//         college:true,
//         postgrd:false
//     }
// }

// const {fstname,job,id,education:{school,college,postgrd}}=myobj
// console.log(fstname,job,id,school,college,postgrd)
// console.log(".........array destructuring..........")
// let fruits = ["Apple", "Banana","orange","lemon"];
// let [a1,b1,c1,d1,e1] = fruits; 
// console.log(a1, b1,c1,d1);

// console.log(".........Enhanced Object Literals...........");
// const workingdays=['mon','tue','wed','thr','fri'];
// const myobj1={
//     fstname:"siva",
//     job:"soft developer",
//     id:123124,
//     education:{
//         school:true,
//         college:true,
//         postgrd:false
//     },
//     workingdays

// }
// console.log(myobj1)


console.log(".........spread operators...........");
let arr1=[1,3,5,7,9];
let arr2=[0,2,4,6,8];
const arr3=[...arr1,...arr2];
console.log(arr3);

console.log(".........Rest operators...........");
