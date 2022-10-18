const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const takeCont = document.getElementById('takeBtn');
const takeQuizBtn = document.getElementById('takeQuiz');
const questH1 = document.getElementById('questionH1');
const questP = document.getElementById('questionP');
const questCont = document.getElementById('aboutQuiz');
// below will be removed after map method used
const hScore1 = document.getElementById('hScore1');
const hScore2 = document.getElementById('hScore2');
const hScore3 = document.getElementById('hScore3');
const hScore4 = document.getElementById('hScore4');
const hScore5 = document.getElementById('hScore5');
const hInit1 = document.getElementById('hInit1');
const hInit2 = document.getElementById('hInit2');
const hInit3 = document.getElementById('hInit3');
const hInit4 = document.getElementById('hInit4');
const hInit5 = document.getElementById('hInit5');
// local storage items
    const userScore = JSON.parse(localStorage.getItem("userScore")) || [];
// question pool
    const questions = [
        {
            question: 'Which of the following is a third-party API?',
            a: 'HTML',
            b: 'CSS',
            c: 'JQuery', 
            d: 'JavaScript',
            correctAnswer: 'c'
        },
        {
            question: 'Which method allows access to a part of an array without modifying it?',
            a: 'splice()',
            b: 'push()',
            c: 'slice()',
            d: 'map()',
            correctAnswer: 'c'
        },
        {
            question: 'method changes the contents of an array by removing or replacing existing elements and/or adding new elements in its place?',
            a: 'splice()',
            b: 'push()',
            c: 'slice()',
            d: 'map()',
            correctAnswer: 'a'
        },
        {
            question: 'Which method adds one or more elements to the end of an array and returns the new length of the array?',
            a: 'splice()',
            b: 'push()',
            c: 'slice()',
            d: 'map()',
            correctAnswer: 'b'
        },
        {
            question: 'Which method creates a new array populated with the results of calling a provided function on every element in the calling array?',
            a: 'splice()',
            b: 'push()',
            c: 'slice()',
            d: 'map()',
            correctAnswer: 'd'
        },
        {
            question: 'What does CSS stabnd for?',
            a: '2',
            b: '',
            c: 'Cascading Style Sheets',
            d: '8',
            correctAnswer: 'b'
        },
        {
            question: 'Which of the following is your best friend when working with JavaScript?',
            a: 'console.log()',
            b: 'A Wrist Brace',
            c: 'GUNNER Gaming Glasses',
            d: 'Quadruple nested if statements',
            correctAnswer: 'a'
        }
    ]
// score display container
    const displayCont = document.createElement('section');
    displayCont.id = 'displayCont';
    displayCont.classList = 'displayCont';
// Display list
    const displayList = document.createElement('ul');
    const displayScore = document.createElement('li');
    const displayInitials = document.createElement('li');
// adding display list to container
    displayCont.append(displayList);
    displayList.append(displayScore);
    displayList.append(displayInitials);
    // elements for displayScore
        const numScore = document.createElement('p');
        numScore.id = 'numScore';
        numScore.classList = 'numScore';
    // elements for display initials
        const textInitials = document.createElement('input');
        textInitials.type = 'text';
        textInitials.placeholder = 'Enter your initials';
        textInitials.id = 'textInitials';
        textInitials.classList = 'textInitials';
        textInitials.maxLength = 3;
// appending html elements to display
    displayScore.append(numScore);
    displayInitials.append(textInitials);

// submit button container
    const submitCont = document.createElement('section');
    submitCont.id = 'submitCont';
    submitCont.classList = 'submitCont';
// submit button
    const submitBtn = document.createElement('input');
    submitBtn.type = 'button';
    submitBtn.value = 'Submit';
    submitBtn.classList = 'submitBtn';
    submitBtn.id = 'submitBtn';
// append submit to submit container
    submitCont.append(submitBtn);
// next button container
    const nextCont = document.createElement('section');
    nextCont.id = 'nextCont';
    nextCont.classList = 'nextCont';
// next button
    const nextBtn = document.createElement('input');
    nextBtn.type = 'button';
    nextBtn.value = 'Next';
    nextBtn.classList = 'startBtn';
    nextBtn.id = 'startBtn';
// append nextBtn to nextCont
    nextCont.append(nextBtn);
// answer section
    const answerSection = document.createElement('section');
    answerSection.id = 'answerSection';
    answerSection.classList = 'answerSection';
// answer section list
    const answerList = document.createElement('ul');
    const aListItem = document.createElement('li');
    const bListItem = document.createElement('li');
    const cListItem = document.createElement('li');
    const dListItem = document.createElement('li');
// adding lists to answer section
    answerList.append(aListItem);
    answerList.append(bListItem);
    answerList.append(cListItem);
    answerList.append(dListItem);
    answerSection.append(answerList);
// answer input and label
    answerList.classList = 'answerList';
    answerList.id = 'answerList';
    // settings for a
        const answerA = document.createElement('input');
        answerA.type = 'radio';
        answerA.name = 'answers';
        answerA.id = 'a';
        const aText = document.createElement('label');
        aText.htmlFor = 'a';
    // settings for b
        const answerB = document.createElement('input');
        answerB.type = 'radio';
        answerB.name = 'answers';
        answerB.id = 'b';
        const bText = document.createElement('label');
        bText.htmlFor = 'b';
    // settings for c
        const answerC = document.createElement('input');
        answerC.type = 'radio';
        answerC.id = 'c';
        answerC.name = 'answers';
        const cText = document.createElement('label');
        cText.htmlFor = 'c';
    // settings for d
        const answerD = document.createElement('input');
        answerD.type = 'radio';
        answerD.id = 'd';
        answerD.name = 'answers';
        const dText = document.createElement('label');
        dText.htmlFor = 'd';
// adding answers to answer section
    aListItem.append(answerA);
    aListItem.append(aText);
    bListItem.append(answerB);
    bListItem.append(bText);
    cListItem.append(answerC);
    cListItem.append(cText);
    dListItem.append(answerD);
    dListItem.append(dText);
// Time left container
    var timeCont = document.createElement('section');
    timeCont.id = 'timeCont';
    timeCont.classList = 'timeCont';
// Time left para
    var timeLeft = document.createElement('p');
    timeLeft.id = 'timeLeft';
    timeLeft.classList = 'timeLeft';
// adding timeLeft to timeCont
    timeCont.append(timeLeft);
// num variables
const quizLength = questions.length;
let numQuestion = 0;
let numCorrect = 0;
var secondsTimer = 60;
let scoreSeconds = 0;
let trueScore = 0;
const userScoreLength = 5;
// function for the countdown
var quizTimer = () => {
    var timerInterval = setInterval(function() {
        secondsTimer--;
        timeLeft.textContent = secondsTimer + " seconds left";
        if(secondsTimer === 0) {
            quizEnd();
        }
      }, 1000);
}
// initializing the quiz layout
const quizBuild = () => {
    highScores.remove();
    mainCont.append(timeCont);
    mainCont.insertBefore(timeCont, questCont);
    mainCont.append(nextCont);
    mainCont.append(answerSection);
    mainCont.insertBefore(nextCont, takeCont);
    mainCont.insertBefore(answerSection, nextCont);
    questP.remove();
}
// gets questions and answers from our questions object
const quizStart = () => {
    questH1.textContent = questions[numQuestion].question;
    aText.textContent = questions[numQuestion].a;
    bText.textContent = questions[numQuestion].b;
    cText.textContent = questions[numQuestion].c;
    dText.textContent = questions[numQuestion].d;
}
// gets the answer the user selected
const getAnswer = () => {
    let selectedAnswer = false;
    for (let i = 0; i < 4; i++){
        if (answerList.children[i].children[0].checked == true){
            selectedAnswer = answerList.children[i].children[0].id;
        }
    }
    return selectedAnswer;  
}
// unchecks all inputs before showing the next question
const uncheckNext = () => {
    for (let i = 0; i < 4; i++){
        answerList.children[i].children[0].checked = false;
    }
}
// ends the quiz, calculates the users true score and displays the score with an area to input initials
const quizEnd = () => {
    questCont.remove();
    answerSection.remove();
    nextCont.remove();
    timeCont.remove();
    mainCont.append(displayCont);
    mainCont.append(submitCont);
    trueScore = Math.round((numCorrect * 5)*(1 + (scoreSeconds / 100))*100);
    console.log(trueScore);
    numScore.textContent = 'Congratulations! You scored ' + numCorrect + ' out of ' + quizLength + ' with ' + scoreSeconds + ' seconds left which gives you a total score of ' + trueScore + '. Enter your intials below to save your score for the highscores list on the home screen.';
}
// gets the trueScore and initials from the display score screen
const getHighScore = () => {
    hScore1.textContent = userScore[0].quizScore;
    hInit1.textContent = userScore[0].initials;

// console.log(userScore[0].quizScore);
}
// event for "Take Quiz" button
takeQuizBtn.addEventListener('click', () => {
    quizTimer();
    quizBuild();
    quizStart();
    takeCont.remove();
});
// event for "Next" Button
nextBtn.addEventListener('click', () => {
    let selectedAnswer = getAnswer();
    let answerCorrect = questions[numQuestion].correctAnswer;
    // checks if question amount has been reached
     if (numQuestion < questions.length - 1){
        // checks if correct answer was selected
        if(selectedAnswer == answerCorrect){
            numCorrect++;
            uncheckNext();
            numQuestion++;
            quizStart();
            scoreSeconds = secondsTimer;
        }else{
            secondsTimer -= 5;
            uncheckNext();
            numQuestion++;
            quizStart();
            scoreSeconds = secondsTimer;
        }  
     }else{
        if(selectedAnswer == answerCorrect){
            numCorrect++;
            alert('done' + numCorrect);
            quizEnd();
        }else{
            alert('done' + numCorrect);
            quizEnd();
        }    
    }   
});
// disables submit button if there is no value in the text field for initials
textInitials.addEventListener('keydown', () => {
    submitBtn.disabled = !textInitials.value;
});
// event for "submit" Button.
submitBtn.addEventListener('click', () => {
    const scoreList = {
        initials: textInitials.value,
        quizScore: trueScore
    };
    // forces new object into array userScore, sorts by trueScore with a limit of 5
    userScore.push(scoreList);
    userScore.sort((a, b) => {
        return b.quizScore - a.quizScore;
    });
    userScore.splice(userScoreLength);
    // sets local storage for the 5 objects in userScore
    localStorage.setItem('userScore', JSON.stringify(userScore));
    getHighScore();
    // sends back to default index
    location.reload();
});
// Current score board ************Needs to be changed to map()*************
hScore1.textContent = userScore[0].quizScore;
hInit1.textContent = userScore[0].initials;

hScore2.textContent = userScore[1].quizScore;
hInit2.textContent = userScore[1].initials;

hScore3.textContent = userScore[2].quizScore;
hInit3.textContent = userScore[2].initials;

hScore4.textContent = userScore[3].quizScore;
hInit4.textContent = userScore[3].initials;

hScore5.textContent = userScore[4].quizScore;
hInit5.textContent = userScore[4].initials;