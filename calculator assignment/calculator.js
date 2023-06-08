let screen=document.querySelector(".screen")
let equal=document.querySelector(".btn_eql")
let btn=document.querySelectorAll(".btn")
let del=document.querySelector(".btn_del")
let clear=document.querySelector(".btn_clr")
btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        let values=e.target.value
        screen.value+=values
    })
})
equal.addEventListener('click',function(){
    if(screen.value==" "){
        screen.value=' '
    }
    else{
        let res =eval(screen.value)
        screen.value=res
    }
})
clear.addEventListener('click',function(){
    screen.value=" "
})
del.addEventListener('click',function(){
    let ans = screen.value.slice(0,-1)
    screen.value=ans
})
