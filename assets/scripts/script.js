const takeQuizBtn = document.getElementById('takeQuiz');
const mainCont = document.getElementById('main-container');
const quizCont = document.createElement('div');
const questions = {
    twoPlusTwo: {
        question: 'What is 2 + 2?',
        a1: '2',
        a2: '0',
        a3: '4*',
        a4: '8'
    }
}

quizCont.className += 'quizCont';

console.log(questions.twoPlusTwo.question);

takeQuizBtn.addEventListener('click', event => {
    alert('quiz has started');
    mainCont.remove();
    let quizQues = document.createTextNode(questions.twoPlusTwo.question);
    quizCont.appendChild(quizQues);
    const currentE = document.getElementById('scriptBot');
    document.body.insertBefore(quizCont, currentE);
})