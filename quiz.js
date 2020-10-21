const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const nextbtn = document.getElementById('next');
const finishbtn = document.getElementById('finish');
const username = document.getElementById('username');
const finalscore = document.getElementById('finalscore');
const divscore = document.getElementById('scorediv');
const resultdiv = document.getElementById('resultdiv');
const quizdiv = document.getElementById('quiz');
const typedscores = document.getElementById('typedscores');
const userName = document.getElementById('username');
const userdatadiv = document.getElementById('user-data');
const displayuser=document.getElementById('ques-word')
const para = document.getElementById('para');
//localStorage.clear();



quizdiv.style.display="none";
divscore.style.display="none";
const CORRECT_BONUS =10;
const MAX_QUESTIONS=10;

let savedscores = [];
let currentQuestion = {};
let acceptingAnswers = false;
let score=0;
let questionCounter =0;
let availableQuestions =[];
const notRepeated=[];
let quizQuestions = [];
localStorage.setItem("quizQuestions",JSON.stringify(quizQuestions));
quizQuestions.push( {
    question : " Which of the following is not JavaScript Data Types?",
    choice1 : "A. Undefined",
    choice2 :"B. Number",
    choice3 :"C. Boolean",
    choice4 :"D. Float",
    answer :4
});

quizQuestions.push( {
    question : " Which company developed JavaScript?",
    choice1 : "A. Netscape",
    choice2 :"B. Bell Labs",
    choice3 :"C. Sun Microsystems",
    choice4 :"D. IBM",
    answer :1
});
quizQuestions.push({
    question : "Which of the following is correct about features of JavaScript?",
    choice1 : "A. It can not Handling dates and time.",
    choice2 :"B. JavaScript is a object-based scripting language.",
    choice3 :"C. JavaScript is not interpreter based scripting language.",
    choice4 :"D. All of the above",
    answer :2
});

quizQuestions.push({
    question : "Which of the following is not Javascript frameworks or libraries?",
    choice1 : "A. Polymer",
    choice2 :"B. Meteor",
    choice3 :"C. Cassandra",
    choice4 :"D. jQuery",
    answer :3
});

quizQuestions.push(
    {
        question : " Why so JavaScript and Java have similar name?",
        choice1 : "A. JavaScript is a stripped-down version of Java",
        choice2 :"B. JavaScript's syntax is loosely based on Java's",
        choice3 :"C. They both originated on the island of Java",
        choice4 :"D. None of the above",
        answer :2
    });
quizQuestions.push( {
    question : "What is the original name of JavaScript?",
    choice1 : "A. LiveScript",
    choice2 :"B. EScript",
    choice3 :"C. Mocha",
    choice4 :"D. JavaScript",
    answer :3
});
quizQuestions.push({
    question : " Among the keywords below, which one is not a statement?",
    choice1 : "A. if",
    choice2 :"B. with",
    choice3 :"C. debugger",
    choice4 :"D. use strict",
    answer :4
});
quizQuestions.push({
    question : "  Which of them is not the looping structures in JavaScript?",
    choice1 : "A. for",
    choice2 :"B. while",
    choice3 :"C. forwhich",
    choice4 :"D. dowhile",
    answer :2
});
quizQuestions.push({
    question : " Which of the following method checks if its argument is not a number?",
    choice1 : "A. isNaN()",
    choice2 :"B. nonNaN()",
    choice3 :"C. NaN()",
    choice4 :"D. None of the above",
    answer :1
});
quizQuestions.push({
    question : "Which of the following is correct about features of JavaScript?",
    choice1 : "A. It can not Handling dates and time.",
    choice2 :"B. JavaScript is a object-based scripting language.",
    choice3 :"C. JavaScript is not interpreter based scripting language.",
    choice4 :"D. All of the above",
    answer :2
});
quizQuestions.push({
    question : "Which of the following is true?",
    choice1 : "A. If onKeyDown returns false, the key-press event is cancelled.",
    choice2 :"B. If onKeyPress returns false, the key-down event is cancelled.",
    choice3 :"C. If onKeyDown returns false, the key-up event is cancelled.",
    choice4 :"D. If onKeyPress returns false, the key-up event is canceled.",
    answer :1
});
quizQuestions.push({
    question : " The _______ method of an Array object adds and/or removes elements from an array.",
    choice1 : "A. Reverse",
    choice2 :"B. Shift",
    choice3 :"C. Slice",
    choice4 :"D. Splice",
    answer :4
});
quizQuestions.push({
    question : " What is the purpose of the Attr object in the HTML DOM?",
    choice1 : "A. Used to focus on a particular part of the HTML page",
    choice2 :"B. HTML Attribute",
    choice3 :"C. Used to arrange elements",
    choice4 :"D. None of the mentioned",
    answer :2
});
quizQuestions.push({
    question : "What will happen if you reference document.location from within an object?",
    choice1 : "A. Traverses the queue",
    choice2 :"B. Finds the bugs",
    choice3 :"C. Traverses the stack",
    choice4 :"D. Traverses the array",
    answer :3
});

localStorage.setItem("quizQuestions",JSON.stringify(quizQuestions));

startGame = () => {
    questionCounter =0;
    score =0;
    availableQuestions =JSON.parse(localStorage.getItem("quizQuestions")||"[]");
    let i = availableQuestions.length;
    let j=0;
    while(i--){
        j = Math.floor(Math.random() * (i+1));
        notRepeated.push(availableQuestions[j]);
        availableQuestions.splice(j,1);
    }
    getNewQuestion();
}


getNewQuestion = () => {
    
    questionCounter++;
    questionCounterText.innerText =questionCounter +"/"+MAX_QUESTIONS;
    currentQuestion = notRepeated[questionCounter-1];
    console.log(currentQuestion); 
    question.innerText= currentQuestion.question;
    choices.forEach(choice => {
    const number =choice.dataset["number"];
    choice.innerText = currentQuestion["choice"+number];
      
    });
 
}

function shuffle(array) {
    let i = array.length,
    j = 0,
        temp;

    while (i--) {

        questionIndex = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        
    }
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return j;
}

choices.forEach(choice => {
    choice.addEventListener('click',e =>{
        if(questionCounter === MAX_QUESTIONS){
        finishbtn.disabled=false;
        nextbtn.disabled=true;}
    
        else if(questionCounter <= MAX_QUESTIONS){
        nextbtn.disabled=false;
        const selectedCoice = e.target;
        const selectedAnswer = selectedCoice.dataset['number'];
       if(selectedAnswer == currentQuestion.answer){
       
        incrementScore(CORRECT_BONUS);
    }
}
    
    });
});

incrementScore = num => {
    score += num;
}

function next(){
    getNewQuestion();
    nextbtn.disabled=true;
}

function finish(){
   
    const highScores =JSON.parse(localStorage.getItem('highScores')) || [];
    console.log(highScores);
    
    localStorage.setItem("username",JSON.stringify( userName.value));
    localStorage.setItem("newScore",JSON.stringify(score));
    const score1 = {
        score : score,
        name : username.value
    };
    console.log("score1 "+score1.score);
    console.log("score1 "+score1.name);
    highScores.push(score1);
    highScores.sort((a,b)=>{
        return b.score-a.score;
    });
    localStorage.setItem("highScores",JSON.stringify(highScores));
    console.log("High score  "+highScores);
    quizdiv.style.display="none";
    divscore.style.display="block";
    resultdiv.style.display="block";
    resultdiv.innerText="YOUR SCORE IS "+score;

}

function displayHigh(){
    
savedscores = JSON.parse(localStorage.getItem("newScore")||"[]");
typedscores.innerText =savedscores;
return window.location.assign("/highestscore.html");
}
function play(){
    console.log(userName.value);
   
if(!userName.value){
   para.innerText="Please enter your name";
   console.log("Please enter your name");
}
else{
  userdatadiv.style.display ="none"
  quizdiv.style.display="block";
  displayuser.innerText ="User Name is   "+userName.value;
  
startGame();
}

}


