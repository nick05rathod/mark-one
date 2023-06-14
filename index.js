var readlineSync = require("readline-sync")
var userName = readlineSync.question("What is your name? ")
console.log("Welcome to the quiz " + userName + ",let's play.")
function reply(questionOne, answerOne) {
  var userReply = readlineSync.question(questionOne);
  if (userReply.toUpperCase() === answerOne) {
    console.log("let's start the quiz")
  } else {
    console.log("Thankyou for your time")
  }
}
reply("Do you want to play the quiz? ", "yes")
var score = 0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right!")
    score = score + 1;
    console.log("you score " + score)
  } else {
    console.log("Your are wrong")
    score = score - 1;
  }
  console.log("___________")
}
var questions = [{
  question: "who is the Prime minister of India? ",
  answer: "Narendra Modi"
}, {
  question: "Who is the Finance minister for India? ",
  answer: "Nirmala Sitaraman"
}, {
  question: "who is the defence minister of India? ",
  answer: "Rajnath Singh"
}, {
  question: "who is the Railway minister of India? ",
  answer: "Ashwini Vaishnav"
}, {
  question: "who is the foreign minister of India? ",
  answer: "S jayshankar"
}];
for (var i = 0; i < questions.length; i = i + 1) {
  var currentreply = questions[i];
  quiz(currentreply.question, currentreply.answer)
}
console.log("Yeah,you scored" + score);

