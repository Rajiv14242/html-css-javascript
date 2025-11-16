const in_var=document.getElementById('input');

function func(){
if(in_var.value==''){
  alert("You didn't typed anything");
}
else{
document.getElementById('demo').innerHTML=in_var.value;
in_var.value='';
}}
