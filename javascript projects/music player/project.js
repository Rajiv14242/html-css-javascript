let progress =document.getElementById("progress");
let audio =document.getElementById("audio");
let playbtn =document.getElementById("playbtn");
audio.onloadedmetadata=function(){
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}
function pauseplay(){
    if(playbtn.classList.contains('fa-pause')){
        audio.pause();
        playbtn.classList.add('fa-play');
        playbtn.classList.remove('fa-pause');
    }
    else{
        audio.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
    }
}
if(audio.play()){
    setInterval(()=>{
        progress.value=audio.currentTime;
    },500);
}
progress.onchange=function(){
    audio.currentTime=progress.value;
}