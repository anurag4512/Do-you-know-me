var readlineSync = require('readline-sync');
const chalk = require('chalk')

var userName = readlineSync.question("What's your name? ")
var score =0;
console.log(chalk.redBright("welcome "+userName+ " to do you know Anurag?"))


var questionOne = {
  question: "Where is Mariana Trench?",
  answer: "Pacific ocean"
}
var questionTwo = {
  question: "which article in Indian constitution talks about Freedom of Speech?",
  answer: "Article19"
}
var questionThree = {
  question: "Where do you live? ",
  answer: "Begusarai"
}


// quiz function

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer  === answer){
    console.log(chalk.blue(answer +" is Right Answer."));
    score+=1;
    console.log("your current score is "+ score)
  }
  else{
    console.log(chalk.redBright("THis is wrong answer."));
    console.log(chalk.blue("your current score is " + score))
  }
}

//Array of objects
var questions = [questionOne, questionTwo, questionThree];
for(var i=0;i<questions.length;i++){
  //call Quiz function
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.green("your Final score is "+score))