const quizData = [
    {
        question: "My boyfriend doesn't really enjoy ___(go) to parties.",
        a: "went",
        b: "Gone",
        c: "Goin",
        d: "Go",
        correct: "c",
    },
    {
        question: "Are you looking for the bags of shopping? ___ already in the kitchen.",
        a: "There",
        b: "Their",
        c: "They´re",
        d: "Those",
        correct: "c",
    },
    {
        question: "They are a lot of ____ in the park",
        a: "Threes",
        b: "Trees",
        c: "Tees",
        d: "Thresh",
        correct: "b",
    },
    {
        question: "I ___all the food by the time you arrived ",
        a: "Eat",
        b: "Eated",
        c: "Had eaten",
        d: "Had ate",
        correct: "c",
    },
{
    question: "She ____ in Colombia until she met him and moved to San Francisco",
    a: "Had been living.",
    b: "Was living.",
    c: "Been living.",
    d: "Does living.",
    correct: "a",
},
{
    question: "I ____ French before, but I really can't speak it",
    a: "Has study.",
    b: "Was study",
    c: "Have studied",
    d: "Have studying.",
    correct: "c",
},
{
    question: "He has ____ talking about you all day, please just call him",
    a: "Is",
    b: "Was",
    c: "Still",
    d: "Been",
    correct: "b",
},
{
    question: "For what we use the future Will at diference of shall and going to?",
    a: "plans that 100% will happen.",
    b: "its only used with the first-person pronouns.",
    c: "c)	future events that are probable.",
    d: "A,B and C",
    correct: "c",
},
//3
{
    question: "For what we use the future going to at diference of shall and will?",
    a: "its only used with the first-person pronouns.",
    b: "plans that 100% will happen.",
    c: "Future events that are probable.",
    d: "Events that are unexpected",
    correct: "b",
},
{
    question: "My /Your /Her /His/ Its/Our /Their. What type of possession are these?",
    a: "Possessive apostrophes.",
    b: "Possessive adjectives",
    c: "Reflexive pronouns.",
    d: "Personal pronouns.",
    correct: "b",
},
{
    question: "What is a reflexive pronoun?",
    a: "Help us to express who owns something or to whom this or that belongs.",
    b: "To indicate possession. ",
    c: "the same person is the subject and object of the action.",
    d: "A,B and C",
    correct: "c",
},
{
    question: "What is the structure of the past perfect simple?",
    a: "Subject + had + Past Participle + Sentence.",
    b: "Subject + Past Participle + had + Sentence",
    c: "Subject + Sentence + had + Past Participle.",
     d: "Subject + was + verb + ing + Past Participle.",
    correct: "a",
},

{
    question: "Subject + had + been + Present Participle + Sentence. What type of verb ",
    a: "Present simple",
    b: "Past perfect continouos.",
    c: "Perfect past simple",
    d: "Present perfect simple.",
    correct: "b",
},
{
    question: "Subject + have/has + Past Participle + Sentence. What type of verb time is this?",
    a: "Present simple",
    b: "Past perfect continouos.",
    c: "Perfect past simple",
    d: "Present perfect simple.",
    correct: "d",
},
{
    question: "“Also” what type of connector is this?",
    a: "Contrasting",
    b: "Comparing",
    c: "Concession ",
    d: "Addition ",
    correct: "d",
},
{
    question: "“Instead” what type of connector is this?",
    a: "Sequencing ",
    b: "Cause",
    c: "Contrasting",
    d: "Result ",
    correct: "c",
},
{
    question: "“Also” what type of connector is this?",
    a: "Contrasting",
    b: "Comparing",
    c: "Concession ",
    d: "Addition ",
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
        if (score >= 13) {
            resultText += `<button onclick="redirectToNextLevel()">Next Level</button>`;
           
        }
        resultText += `<button onclick="location.reload()">Reload</button>`;
        quiz.innerHTML = resultText;
    }
}
});

function redirectToNextLevel() {
// Redirigir a la página del siguiente nivel
window.location.href = 'home.html';
}
