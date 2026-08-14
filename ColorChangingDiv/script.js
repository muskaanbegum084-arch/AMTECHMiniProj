let div=document.querySelector("div");
let btn=document.querySelector("button");
let h2=document.querySelector("h2");

btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    div.style.backgroundColor=`rgb(${red},${green},${blue})`;
    h2.innerText=`rgb(${red},${green},${blue})`
})