let btn=document.getElementsByClassName("btn");
console.log(btn);
btn.onclick=function(){
    let demo11=document.getElementById("demo11")
    console.log(demo11);
    let res=list11.classList.toggle("true")
    if(res){
        list11.style.display="none"
    }else{
        list11.style.display="block"
    }
}