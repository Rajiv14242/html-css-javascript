const questions=[
    {
        question:"Which is the largest animal in the world?",
        answer:[
            {text:"elephant",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Giraff",correct:false},
            {text:"lion",correct:false}
        ]

    },
    {
        question:"Which is the smallest country in the world?",
        answer:[
            {text:"Vactican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Srilanka",correct:false}
        ]

    },
    {
        question:"Which is the largest desert in the world?",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true}
        ]

    },
    {
        question:"Which is the smallest continent in the world?",
        answer:[
            {text:"Asis",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Europe",correct:false}
        ]

    }
];
const question_var=document.getElementById('question');
const button_var=document.getElementById('answer-button');
const nextbutton_var=document.getElementById('next-button');

let Question_index=0;
let Score=0;

function start_quiz(){
    Question_index=0;
    Score=0;
    nextbutton_var.innerHTML="Next";
    showQuestions();
}
function showQuestions(){
    resetstate();
    let prasna=questions[Question_index];
    let prasna_no=Question_index+1;
    question_var.innerHTML=prasna_no+"."+prasna.question;
    prasna.answer.forEach((data)=>{
        const button=document.createElement("button");
        button.innerHTML=data.text;
        button.classList.add("btn");
        button_var.appendChild(button);
        if(data.correct){//below is for click property
            button.dataset.correct=data.correct;
        }
        button.addEventListener("click",clickfunc);//this is for click event and to call the function clickfunc after it is called
            });
}
start_quiz();
function resetstate(){
    nextbutton_var.style.display="none";
    while(button_var.firstChild){
        button_var.removeChild(button_var.firstChild);
    }
}
function clickfunc(e){
    const selectedbtn=e.target;//e.target denotes the button which is pressed
    const check= selectedbtn.dataset.correct === "true";
    if(check){
        selectedbtn.classList.add("correct");
        Score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(button_var.children).forEach((x)=>{
      if(x.dataset.correct==="true"){
        x.classList.add("correct");
      }
      x.disabled="true";
    });
    nextbutton_var.style.display="block";
}
//below code is for getting to next question
nextbutton_var.addEventListener("click",()=>{
      if(Question_index<questions.length){
        fun1();
      }
      else{
        start_quiz();
      }

});
function fun1(){
    Question_index++;
    if(Question_index<questions.length){
        showQuestions();
    }
    else{
     showscore();    
    }
}
function showscore(){
    resetstate();
    question_var.innerHTML="You have scored "+Score+" out of "+Question_index+" questions.";
    nextbutton_var.style.display="block";
      nextbutton_var.innerHTML="Try again";
}