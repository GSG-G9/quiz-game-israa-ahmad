const highScoreList = document.getElementById('typedscores');
const highScores =JSON.parse(localStorage.getItem('highScores'))||[];
console.log(highScores);

highScoreList.innerHTML=highScores.map(score =>{
    return '<li class = "high-score">'+'<span style="color:blue; font-size:40px;">'+score.name+'</span>'
   +"'s score is  "+ '<span style="color:blue; font-size:40px;">'+score.score+'</span>'+'</li>'

}).join("");