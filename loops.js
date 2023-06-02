console.log("...for each loops...")
let arr =["Banana", "Orange", "Apple", "Mango"];
arr.forEach(function(f){
    if(arr.length>0){
        console.log(f);
    } 
})
console.log("...for of loops...")

for(const r of arr){
    console.log(r);

}

 let stuobj={
    stuid:1,
    stuname:"siva",
    stucls:"10th",
    stuage:12
}
for(const num in stuobj){
    console.log(num+" "+":  "+stuobj[num]);
}
