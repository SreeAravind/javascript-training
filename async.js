
function student(){
    return new Promise((resolve,reject)=>{
    passed=false;
    if(passed){
        resolve("i have passed in the exam")
    }
    else{
        reject(" i have failed")
    }
}
)}



async function res(){
    try{
        result=await student();
        console.log(result);
       }
       catch(err){
        console.log(err)

       }
    }

    res();
    
