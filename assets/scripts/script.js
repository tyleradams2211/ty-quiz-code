const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const takeCont = document.getElementById('takeBtn');
const takeQuizBtn = document.getElementById('takeQuiz');
const questH1 = document.getElementById('questionH1');
const questP = document.getElementById('questionP');

let numQuestion = "0";

// question pool
const questions = [
    {
        question: 'What is an ecample of a third-party API?',
        a: 'HTML',
        b: 'CSS',
        c: 'JQuery',
        d: 'JavaScript',
        correctAnswer: 'c'
    },
    {
        question: 'What is 4 + 2?',
        a: '2',
        b: '6',
        c: '4',
        d: '8',
        correctAnswer: 'b'
    }
]
// cancel button
const cancelBtn = document.createElement('input');
cancelBtn.type = 'button';
cancelBtn.value = 'Cancel';
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
// adding lists to section
answerList.append(aListItem);
answerList.append(bListItem);
answerList.append(cListItem);
answerList.append(dListItem);
answerSection.append(answerList);
// answer input and label
answerList.classList = 'answerList';
answerList.id = 'answerList';
    // a
const answerA = document.createElement('input');
answerA.type = 'radio';
answerA.name = 'answers';
answerA.id = 'a';
const aText = document.createElement('label');
aText.htmlFor = 'a';
    // b
const answerB = document.createElement('input');
answerB.type = 'radio';
answerB.name = 'answers';
answerB.id = 'b';
const bText = document.createElement('label');
bText.htmlFor = 'b';
    // c
const answerC = document.createElement('input');
answerC.type = 'radio';
answerC.id = 'c';
answerC.name = 'answers';
const cText = document.createElement('label');
cText.htmlFor = 'c';
    // d
const answerD = document.createElement('input');
answerD.type = 'radio';
answerD.id = 'd';
answerD.name = 'answers';
const dText = document.createElement('label');
dText.htmlFor = 'd';

// adding answer selection to answer section
aListItem.append(answerA);
aListItem.append(aText);
bListItem.append(answerB);
bListItem.append(bText);
cListItem.append(answerC);
cListItem.append(cText);
dListItem.append(answerD);
dListItem.append(dText);
//remove highscores
cancelBtn.addEventListener('click', event => {
    // takes window back to original index.html
    window.location = 'index.html'; 
})
// quiz function
const takeQuiz = () => {
    
}
const uncheckNext = () => {
    for (let i = 0; i < 3; i++){
        answerList.children[i].children[0].checked = false;
    }
}
// function to add elements when quiz starts
const elementQuiz = () => {
    highScores.remove();
    mainCont.append(answerSection);
    mainCont.insertBefore(answerSection, takeCont);
}
// event for starting the quiz
takeQuizBtn.addEventListener('click', event => {
    elementQuiz();
    questH1.textContent = 'Question 1';
    questP.textContent = questions[numQuestion].question;
    aText.textContent = questions[numQuestion].a;
    bText.textContent = questions[numQuestion].b;
    cText.textContent = questions[numQuestion].c;
    dText.textContent = questions[numQuestion].d;
    mainCont.append(cancelBtn);
    takeQuizBtn.value = 'Next';
    numQuestion++;
    uncheckNext();
})

console.log(answerList.children[3].children[0]);