class student{
    studetail=[];
    constructor(stuname,stuid,stuemail){
        this.stuname=stuname;
        this.stuid=stuid;
        this.stuemail=stuemail;
    }
    stulst(){
      this.studetail.push(this.stuname);
      this.studetail.push(this.stuid);
      this.studetail.push(this.stuemail)
        
       }


    
    sturec(name){
       this.studetail.push(name)
    }
}

const objstu=new student("suganth","43","suganth@gamil.com");
console.log("...............*>............")
objstu.stulst();
// objstu.sturec("suganth");
// objstu.sturec("suganth");
// objstu.sturec("suganth");
objstu.studetail.forEach(c=>console.log(c));
