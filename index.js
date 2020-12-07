var readlineSync = require("readline-sync");
var chalk = require("chalk");
var log = console.log;

var score = 0;

var userName = readlineSync.question(chalk.blue.bold("What is your Name? "));

log("________________________________________");
log(chalk`Welcome {green ${userName}} To The  Ultimate GIT Quiz`);
log(`Lets See How Much You Know About GIT`)
log("________________________________________");

var questionBank = [{
  question: `1. Which of the following is the correct way to initialize a new Git repository?
    a)git add
    b)git init
    c)git commit \n`,
  answer: "b"
}, {
  question: `2. Which of the following commands will stage your entire directory and every non-empty directory inside your current directory?
    a)git status all
    b)git add
    c)git commit all \n`,
  answer: "b"
}, {
  question: `3. We've just created a new file called index.html. Which of the following will stage this one file so we can commit it??
    a)git add index.html
    b)git add new
    c)git commit index.html \n`,
  answer: "a"
}, {
  question: `4. What's the git command that downloads your repository from GitHub to your computer?
    a)git push
    b)git fork
    c)git clone \n`,
  answer: "c"
}, {
  question: `5. How do you supply a commit message to a commit??
    a)git message "I'm coding"
    b)git commit "I'm coding"
    c)git commit -m "I'm coding" \n`,
  answer: "c"
}, {
  question: `6. What comes first, staging with git add . or committing with git commit
    a)staging with git add
    b)committing with git commit
    c)none of the above \n`,
  answer: "a"
}];

// highscore list
var highScores = [{
  name: "Rushab",
  score: "5"
}, {
  name: "bavesh",
  score: "4"
}];

// quiz logic
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    log(chalk.bgCyanBright.black.bold(chalk`You Are Correct {red ${answer} } Is The Correct Answer !`));
    score++
  } else {
    log(chalk.bgWhiteBright.red.bold(chalk`You Are Wrong {blue ${answer} } Is The correct Answer !`));
  }
  log(chalk `Your Score Is   {green.underline ${score} } `);
  log("________________________________________");
}

// iteration through questionBank

for (var i = 0; i < questionBank.length; i++) {
  var currentQuestion = questionBank[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
// highscore check
for (var i = 0; i < highScores.length; i++) {
  var currentPlayer = highScores[i];
  if (currentPlayer.score < score) {
    log(chalk.bold.bgBlackBright.whiteBright(`You have beaten ${currentPlayer.name}'s highscore`));
    log(`send me the screenshot to win to claim your prize @rkjain119@gmail.com`)
  }
}