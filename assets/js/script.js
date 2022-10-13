const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const takeCont = document.getElementById('takeBtn');
const takeQuizBtn = document.getElementById('takeQuiz');
const questH1 = document.getElementById('questionH1');
const questP = document.getElementById('questionP');
const questCont = document.getElementById('aboutQuiz');
// local storage items
    var userScore = localStorage.getItem("userScore");
    var userInitials = localStorage.getItem("userInitials");
// question pool
    const questions = [
        {
            question: 'q1',
            a: 'HTML',
            b: 'CSS',
            c: 'JQuery', 
            d: 'JavaScript',
            correctAnswer: 'a'
        },
        {
            question: 'q2',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'b'
        },
        {
            question: 'q3',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'c'
        },
        {
            question: 'q4',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'd'
        },
        {
            question: 'q5',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'a'
        },
        {
            question: 'q6',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'b'
        },
        {
            question: 'q7',
            a: '2',
            b: '6',
            c: '4',
            d: '8',
            correctAnswer: 'c'
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

const quizLength = questions.length;
let numQuestion = 0;
let numCorrect = 0;
var secondsTimer = 10;

var quizTimer = () => {
    var timerInterval = setInterval(function() {
        secondsTimer--;
        timeLeft.textContent = secondsTimer + " seconds left";
    
        if(secondsTimer === 0) {
            quizEnd();
        }
    
      }, 1000);
}
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
const quizStart = () => {
    questH1.textContent = questions[numQuestion].question;
    aText.textContent = questions[numQuestion].a;
    bText.textContent = questions[numQuestion].b;
    cText.textContent = questions[numQuestion].c;
    dText.textContent = questions[numQuestion].d;
}
const getAnswer = () => {
    let selectedAnswer = false;
    for (let i = 0; i < 4; i++){
        if (answerList.children[i].children[0].checked == true){
            selectedAnswer = answerList.children[i].children[0].id;
        }
    }
    return selectedAnswer;  
}
const uncheckNext = () => {
    for (let i = 0; i < 4; i++){
        answerList.children[i].children[0].checked = false;
    }
}
const quizEnd = () => {
    questCont.remove();
    answerSection.remove();
    nextCont.remove();
    timeCont.remove();
    mainCont.append(displayCont);
    mainCont.append(submitCont);
    numScore.textContent = 'Congratulations! You scored ' + numCorrect + ' out of ' + quizLength + '! Enter your intials below to save your score for the highscores list on the home screen.';
}
takeQuizBtn.addEventListener('click', () => {
    quizTimer();
    quizBuild();
    quizStart();
    takeCont.remove();
})
nextBtn.addEventListener('click', () => {
    let selectedAnswer = getAnswer();
    let answerCorrect = questions[numQuestion].correctAnswer;
     if (numQuestion < questions.length - 1){
        if(selectedAnswer == answerCorrect){
            numCorrect++;
            uncheckNext();
            numQuestion++;
            quizStart();
            console.log(secondsTimer);
        }else{
            uncheckNext();
            numQuestion++;
            quizStart();
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
})
submitBtn.addEventListener('click', () => {
})




// Unchecks all before moving to next question
// const uncheckNext = () => {
//     for (let i = 0; i < 3; i++){
//         answerList.children[i].children[0].checked = false;
//     }
// }
// function to add elements when quiz starts
// const elementQuiz = () => {
//     highScores.remove();
//     mainCont.append(answerSection);
//     mainCont.insertBefore(answerSection, takeCont);
//     takeQuizBtn.value = 'Next';
//     questH1.textContent = 'Question 1';
//     questP.textContent = questions[numQuestion].question;
//     aText.textContent = questions[numQuestion].a;
//     bText.textContent = questions[numQuestion].b;
//     cText.textContent = questions[numQuestion].c;
//     dText.textContent = questions[numQuestion].d;
// }
// function for checking if correct answer was selected, then adding to numCorrect
// const checkCorrect = () => {
//     for (let i = 0; i < 3; i++){
//         if (answerList.children[i].children[0].checked && answerList.children[i].children[0].id == answerCheck){
//             numCorrect++;
//             console.log(numCorrect);
//             return numCorrect;
//         }else{
//             numCorrect = numCorrect + 0;
//         }
//     }     
// }




// ref
// 