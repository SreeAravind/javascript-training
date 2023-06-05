function stu1(){
    return "i'm suganth";
}
function stu2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( "i'm siva");
        },3000)
        
    })
    
}
function st3(){
    return "i'm aswath"
}
const callme=async()=>{
console.log(stu1());
console.log(await(stu2()));
console.log(st3());
}

callme();

function frndz(){
    return new Promise((resolve,reject)=>{
        reachedhome=false;
        if(reachedhome){
            resolve();
        }
        else{
            reject();
        }
    })
}
frndz().then(()=>console.log("i have reached"))
     .catch(()=>console.log("not yet reached"));

