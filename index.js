var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '! ' + 'Welcome to Social media Quiz ');

var score = 0;

// play functions to check answers
function play(question, answer) {
  var inputAnswer = readlineSync.question(question);
  if (inputAnswer === answer) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    console.log("corect answer is " + answer);
  }
  console.log("score is ", score);
  console.log("--------------");
}

let questions = [

  {
    "question": "After Google, what is the second most popular website in the world? ",
    "answer": "youtube"
  },
  {
    "question": "Which platform has a higher rate of engagement? ",
    "answer": "instagram"
  },
  {
    "question": "What platform is the best at driving leads? ",
    "answer": "linkedin"
  },
  {
    "question": "Which type of media drives the most engagement on Facebook and Instagram? ",
    "answer": "video"
  },
  {
    "question": "On average, what is the best day for brand accounts to post on Instagram? ",
    "answer": "thursday"
  }

]

// loop through object 
for (var i = 0; i < questions.length; i++) {

  play(questions[i].question, questions[i].answer);
}
