const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const takeCont = document.getElementById('takeBtn');
const takeQuizBtn = document.getElementById('takeQuiz');
const questH1 = document.getElementById('questionH1');
const questP = document.getElementById('questionP');
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
// answer section
const answerSection = document.createElement('section');
answerSection.id = 'answerSection';
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
    // a
const answerA = document.createElement('input');
answerA.type = 'radio';
answerA.id = 'a';
const aText = document.createElement('label');
aText.for = 'a';
aText.textContent = 'testing a';
    // b
const answerB = document.createElement('input');
answerB.type = 'radio';
answerB.id = 'b';
const bText = document.createElement('label');
bText.for = 'b';
bText.textContent = 'testing b';
    // c
const answerC = document.createElement('input');
answerC.type = 'radio';
answerC.id = 'c';
answerC.name = 'c'
const cText = document.createElement('label');
cText.for = 'c';
cText.textContent = 'testing c';
    // d
const answerD = document.createElement('input');
answerD.type = 'radio';
answerD.id = 'b';
const dText = document.createElement('label');
dText.for = 'b';
dText.textContent = 'testing d';
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
    questP.textContent = questions.twoPlusTwo.question;
    mainCont.append(cancelBtn);
})