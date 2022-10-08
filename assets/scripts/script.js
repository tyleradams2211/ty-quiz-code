const takeQuizBtn = document.getElementById('takeQuiz');
const mainCont = document.getElementById('main-container');

takeQuizBtn.addEventListener('click', event => {
    alert('quiz has started');
    mainCont.remove();
    
})