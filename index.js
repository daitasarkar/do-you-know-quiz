var readlineSync=require("readline-sync");

var userName=readlineSync.question("ENter your name ");
console.log("Welcome "+ userName+ " to DO YOU KNOW Daita?")

var score=0;
function play(ques,ans)
{
var userAnswer=readlineSync.question(ques);
if(userAnswer.toUpperCase()===ans)
  {
    console.log("correct answer")
    score++;
    console.log("current score: "+score)
  }
else
  {
    console.log("wrong answer")
    score--;
    console.log("current score: "+score)
  }
}
var questionlist=[{
  question:"Where do I live?",
  answer:"KOLKATA"
},
{
  question:"In which month was I born?",
  answer:"MAY"
},
{
  question:"Which is my favorite color?",
  answer:"WHITE"
},
{
  question:"Which is my favorite dish?",
  answer:"BIRIYANI"
}];
for(var i=0;i<questionlist.length;i++)
{
  play(questionlist[i].question,questionlist[i].answer)
}

console.log("your final score is "+ score);