const quizData = [
    {
        question: "Choose the correct form of to be for the following sentence: ´I _____ a student.´",
        a: "Am",
        b: "Is",
        c: "Are",
        d: "Be",
        correct: "a",
    },
    {
        question: "How do you ask for someone's name in English?",
        a: "What are you?",
        b: "What is your name?",
        c: "How are you?",
        d: "What do you like?",
        correct: "b",
    },
    {
        question: "Which article should be used before a singular noun that starts with a consonant sound?",
        a: "The",
        b: "An",
        c: "A",
        d: "These",
        correct: "c",
    },
    {
        question: "What is the plural form of 'dog´ ?",
        a: "Dogs",
        b: "Doges",
        c: "Dogies",
        d: "Doggies",
        correct: "a",
    },
{
    question: "Which of the following is the correct use of ´this´ and ´these´?",
    a: "This is singular, these is plural",
    b: "These is singular, this is plural",
    c: "Both are singular",
    d: "Both are plural",
    correct: "a",
},
{
    question: "Fill in the blank with the correct form of the verb: ´I usually _____ to the gym on Mondays.´",
    a: "Goes",
    b: "Go",
    c: "Going",
    d: "Is going",
    correct: "b",
},
{
    question: "How do you ask about the frequency of an action in English?",
    a: "How do you do?",
    b: "What is your favorite color?",
    c: "How often do you...?",
    d: "Where is the nearest restaurant?",
    correct: "c",
},
{
    question: "Choose the correct adverb of frequency for the sentence: ´He _____ goes to the library.´",
    a: "Always",
    b: "Sometimes",
    c: "Never",
    d: "Yesterday",
    correct: "b",
},
//3
{
    question: "Which of the following is a quantifier?",
    a: "quickly",
    b: "happily",
    c: "many",
    d: "beautifully",
    correct: "c",
},
{
    question: "What is the opposite of ´beautiful´?",
    a: "Pretty",
    b: "Ugly",
    c: "Handsome",
    d: "Stunning",
    correct: "b",
},
{
    question: "Which form of ´there´ is used for singular nouns, and which is used for plural nouns?",
    a: "There's, there are",
    b: "There are, there is",
    c: "There is, there's",
    d: "There are, there's",
    correct: "c",
},
{
    question: "The correct form of ´to be´ for the following sentence: ´You _____ my best friend.´",
    a: "Am",
    b: "Is",
    c: "Are",
    d: "Be",
    correct: "c",
},

{
    question: "How do you ask for someone's age in English?",
    a: "How are you?",
    b: "What age are you?",
    c: "How old are you?",
    d: "Where are you from?",
    correct: "c",
},
{
    question: "Which article should be used before a singular noun that starts with a vowel sound?",
    a: "These",
    b: "The",
    c: "An",
    d: "A",
    correct: "c",
},
{
    question: "What is the plural form of ´child´?",
    a: "childs",
    b: "childes",
    c: "childies",
    d: "children",
    correct: "d",
},
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        let resultText = `<h2>Tu RESPUESTAS CORRECTAS FUERON ${score}/${quizData.length} preguntas correctamente</h2>`;
        if (score >= 11) {
            resultText += `<button onclick="redirectToNextLevel()">Siguiente Nivel</button>`;
           
        }
        `<h2>Intentalo De nuevo Suerte en la proxima</h2>`;
        resultText += `<button onclick="location.reload()">Reload</button>`;
        quiz.innerHTML = resultText;
    }
}
});

function redirectToNextLevel() {
// Redirigir a la página del siguiente nivel
window.location.href = 'home.html';
}



