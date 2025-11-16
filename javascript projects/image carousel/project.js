
var index=0;
fun(index);
function fun(k){
    var arr=document.getElementsByClassName("images");
    for(i=0;i<arr.length;i++){
        arr[i].style.display="none";
    }
    index=index+k;
   
    if(index>arr.length-1){
        index=0;
    }
    if(index<0){
        index=arr.length-1;
    }
    arr[index].style.display='block';
}
function display(){
    var x = document.getElementById("button");
    x.style.display="block";
    
}
function remove(){
    var x = document.getElementById("button");
    
    x.style.display="none";
}