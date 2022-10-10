const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const currentE = document.getElementById('scriptBot');


const takeQuizBtn = document.getElementById('takeQuiz');

const questH1 = document.getElementById('questH1');
const questP = document.getElementById('questP');

const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');


// question pool
const questions = {
    twoPlusTwo: {
        question: 'What is 2 + 2?',
        A: '2',
        B: '6',
        C: '4',
        D: '8',
        coorectAnswer: 'c'
    },
    fourPlusTwo: {
        question: 'What is 2 + 2?',
        A: '2',
        B: '6',
        C: '4',
        D: '8',
        coorectAnswer: 'b'
    }
}
// cancel button
const cancelBtn = document.createElement('input');
cancelBtn.type = 'button';
cancelBtn.value = 'Cancel';

//remove highscores


cancelBtn.addEventListener('click', event => {
    // takes window back to original index.html
    window.location = 'index.html'; 
})
// elements to create and destroy during event


// classes and other values added to elements


// event for starting the quiz
takeQuizBtn.addEventListener('click', event => {
    questH1.textContent = 'Question 1';
    questP.textContent = questions.twoPlusTwo.question;
    mainCont.append(cancelBtn);
})



// ref

{/* 
<label for=""><input type="checkbox">Test</label> 

highScores.remove();




*/}