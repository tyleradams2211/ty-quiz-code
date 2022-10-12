const mainCont = document.getElementById('main-container');
const highScores = document.getElementById('highScores');
const takeCont = document.getElementById('takeBtn');
const takeQuizBtn = document.getElementById('takeQuiz');
const questH1 = document.getElementById('questionH1');
const questP = document.getElementById('questionP');
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
// next button container
const nextCont = document.createElement('section');
nextCont.id = 'nextCont';
nextCont.classList = 'nextCont';
// start button
const nextBtn = document.createElement('input');
nextBtn.type = 'button';
nextBtn.value = 'Next';
nextBtn.classList = 'startBtn';
nextBtn.id = 'startBtn';
// append startBtn to startCont
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

const quizLength = questions.length;

let numQuestion = 0;
let numCorrect = 0;
let score = 0;

const quizBuild = () => {
    highScores.remove();
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
takeQuizBtn.addEventListener('click', () => {
    quizBuild();
    quizStart();
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
        }else{
            uncheckNext();
            numQuestion++;
            quizStart();
        }  
     }else{
        if(selectedAnswer == answerCorrect){
            numCorrect++;
            alert('done' + numCorrect);
            console.log(numCorrect);
            window.location = 'index.html'; 
        }else{
            alert('done' + numCorrect);
            console.log(numCorrect);
            window.location = 'index.html';
        }    
    }   
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