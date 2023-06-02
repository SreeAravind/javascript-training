var obj={
    name:"aravind",
    bookread:[],
    books:function(bookname){
        this.bookread.push(bookname)
    },
    result:function(){
    return `I'm ${this.name} and i have read ${this.bookread.length} books`;
    function hello(){
        return this.name
    }

}


}
obj.books("poniyanselvan");
obj.books("javascript");
console.log(obj.result());

let i=0;
let n=0;
// while(i<5){
//     i++
//     if(i===3){
//         break;
//     }
//     n+=i;
//     console.log(n);
// }