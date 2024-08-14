let bt=document.querySelectorAll("#btn")
let parg=document.querySelectorAll(".paragraph")
let pl=document.getElementsByClassName("plus")
let mi=document.getElementsByClassName("minus")

let pargraph=Array.from(parg);
let btn=Array.from(bt);
let icon=Array.from(pl)
let minus=Array.from(mi)
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        if(pargraph[i].style.display=="block"){
            pargraph[i].style.display="none"
            icon[i].style.display="block"
            minus[i].style.display="none"

        }else{
            pargraph[i].style.display="block"
            icon[i].style.display="none"
            minus[i].style.display="block"
            pargraph[i].style.transition="all 1s";
        }


    })
}