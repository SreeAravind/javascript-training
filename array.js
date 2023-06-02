var arr1=[1,5,3,9,7,6,8,100]; 
let fruits =["Banana", "Orange", "Apple", "Mango"];
var arr2=[];
var arr4=[];
var arr3=[];
  console.log(arr1);
  
 function len(){
   
    arr=arr1.length;
    console.log(arr);
 }
 len();

 function method2(){
    arr=fruits.join(" "+" "+" ");
    console.log(arr);
 }
 method2()
 function method3(){
    arr1.push(1,5,8);;
    console.log(arr1);
    arr1.pop();
    console.log(arr1);
    arr1.shift();
    console.log(arr1);
    arr1.unshift(10);
    console.log(arr1);
 }
 method3();
 function method4(){
    arr=fruits.concat(arr1);
    console.log(arr);
 }
 method4()

 function method5(){
    arr=fruits.slice(0,2);
    console.log(arr);
    console.log(fruits);
 }
 method5()

 function method6(){
    arr=fruits.splice(1,1,"Grapes");
    console.log(arr);
    console.log(fruits);
 }
 method6()

 console.log("array sort method");
 function method7(){
    console.log(fruits);
    arr=fruits.sort();
    console.log(arr);
    console.log(fruits);
 }
 method7()
 console.log("array sort fn method");
 function method88(){
   let arr1=[1,5,3,9,7,6,8,100];

    console.log(arr1);
    arr=arr1.sort(function(a,b){return a-b});
    console.log(arr);
    console.log(arr1);
 }
 method88()

 console.log("array reverse method");
 function method8(){
    console.log(fruits);
    arr=fruits.reverse()
    console.log(arr);
    console.log(fruits);
 }
 method8()

 console.log("array foreach method");
 function method9(){
    console.log(fruits);
    fruits.forEach(function(num){
      arr2.push(num)
    })
   
    console.log("new array    " +arr2);
 }
 method9();

 console.log("array map method");
 function method10(){
    console.log(arr1);
    arr1.map(num=>
        arr4.push(num*2))
        console.log("new array    " +arr4);
   
 }
 method10();


