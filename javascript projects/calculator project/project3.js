setInterval(()=>{
    let x= document.getElementById('time');
let y= new Date();
let m=y.getHours();
let n=y.getMinutes();
let time=m+":"+n;
x.innerHTML=time;
},1000)
// const dup=document.getElementById("view");
