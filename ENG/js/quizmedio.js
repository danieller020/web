const quizData = [
    {
        question: "Mention adverbs of place ending in -where",
        a: "Everywhere, nowhere, anyplace, anywhere",
        b: "Upwards, Downwards, Backwards",
        c: "Elsewhere, Outwardly, Nowhere",
        //d: "Be",
        correct: "a",
    },
    {
        question: "Mention adverbs of place ending in -wards",
        a: "Everywhere, nowhere, anyplace, anywhere",
        b: "Upwards, Downwards, Backwards",
        c: "Elsewhere, Outwardly, Nowhere",
        correct: "b",
    },
    {
        question: "When indicating the location of a person or object is used?",
        a: "In front of,  Under, Between",
        b: "Out, along,  Of, back",
        c: "For, Since",
        correct: "a",
    },
    {
        question: "When indicating the direction in which an object is moving is used?",
        a: "In front of,  Under, Between",
        b: "For, Since",
        c: "Through,  Into, To",
        //d: "Doggies",
        correct: "c",
    },
{
    question: "When do you use the ¨like to¨?",
    a: "The verb “gustar”.",
    b: "The verb “necesitar”.",
    c: "The verb “tener”",
   // d: "Both are plural",
    correct: "a",
},
{
    question: "Which of the following words is used when pointing to many things that are far away?",
    a: "These",
    b: "Those",
    c: "This",
    //d: "Is going",
    correct: "b",
},
{
    question: "How does the present continuous differ?",
    a: "“S“ or “ES“ is used in the third person.",
    b: "Will is used before the verb",
    c: "The verb is used with Ing",
  //  d: "Where is the nearest restaurant?",
    correct: "c",
},
{
    question: "Point out which words are being comparative:",
    a: "Taller, Fatter, bigger",
    b: "Biggest, saddest",
    c: "Happier, Simplest, Busiestr",
   // d: "Yesterday",
    correct: "a",
},
//3
{
    question: "They are used to indicate non-specific quantities.",
    a: "this (esto), these (estos), that (eso), those (esos).",
    b: "Many (mucho/s), any (alguno, ninguno), much (mucho),",
    c: "My (mi), your (tu), her (de ella), his (de él)",
   // d: "beautifully",
    correct: "c",
},
{
    question: "Indicate which verbs are irregular",
    a: "Began, Bet, Bid, Broke",
    b: "Danced, Played, Came",
    c: "Did,  Has, Arose, Drew",
   // d: "Stunning",
    correct: "a",
},
{
    question: "What is the structure affirmative of the continuous past?",
    a: "Subject + auxiliary verb (to be) + main verb in gerund (-ing) + complement.",
    b: "Subject + main verb in gerund (-ing) + complement.",
    c: "Subject + verb with “ed” + complement.",
   // d: "There are, there's",
    correct: "a",
},
{
    question: "With what subjects is the auxiliary verb -does- used?",
    a: "I, He, She",
    b: "He, She, It",
    c: "I, You, We, They",
 //   d: "Be",
    correct: "b",
},

{
    question: "What are some modals verbs?",
    a: "Do, Have, Was",
    b: "Could, May, Might",
    c: "Will, Could, Was",
    //d: "Where are you from?",
    correct: "b",
},
{
    question: "Indicates which are the addition connectors",
    a: "And, Actually, Anyway, Such as",
    b: "But, However, Nor",
    c: "C)	In other matters, Still, Anyway",
   // d: "A",
    correct: "a",
},
{
    question: "Indicate which word goes in the blank space____boy walks on the park",
    a: "An",
    b: "A",
    c: "The",
   // d: "children",
    correct: "b",
},
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
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
