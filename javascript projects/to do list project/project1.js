const search_bar = document.getElementById("search-bar");
const list_container = document.querySelector(".list");
function addTask(){
     if(search_bar.value===""){
        alert("Write something");
     }
     else {
        let li = document.createElement("li");
        li.innerHTML=search_bar.value;
        list_container.appendChild(li);    
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }
     search_bar.value="";
     setdata();
}
list_container.addEventListener("click",function(f){
         if(f.target.tagName==="LI"){
            f.target.classList.toggle("a");
            setdata();
         }
         else if(f.target.tagName==="SPAN"){
            f.target.parentElement.remove();
            setdata();
         }

},false);
function setdata(){
    localStorage.setItem("data",list_container.innerHTML);
}
function getdata(){
    list_container.innerHTML=localStorage.getItem("data");
}
getdata();