const quizData = [
    {
        question: "What is the definition of the verb to 'need' in English?",
        a: "Desire something strongly",
        b: "Require or want something because it is important or necessary",
        c: "Prefer something",
        d: "Feeling aversion towards something",
        correct: "b",
    },
    {
        question: "What is the correct conjugation of the verb 'to wish' in the simple past for the first person singular?",
        a: "I wished",
        b: "I wish",
        c: "I will wish",
        d: "I will wish",
        correct: "a",
    },
    {
        question: "Which of the following is an example of an intransitive phrasal verb?",
        a: "Put off",
        b: "Take out",
        c: "Look after",
        d: "Hold on",
        correct: "d",
    },
    {
        question: "What are indefinite pronouns in English?",
        a: "Pronouns that refer to things or people without specifying who they are.",
        b: "Pronouns that refer to something or someone specific.",
        c: "Pronouns that are only used in formal situations.",
        d: "Pronouns that are always accompanied by proper names.",
        correct: "a",
    },
{
    question: "What is the difference between the active voice and the passive voice in English?",
    a: "The active voice emphasizes the action of the subject, while the passive voice emphasizes the object.",
    b: "The active voice emphasizes the object, while the passive voice emphasizes the subject.",
    c: "The active voice always uses the verb to be while the passive voice does not.",
    d: "The active voice is always longer than the passive voice.",
    correct: "a",
},
{
    question: "What is reported speech?",
    a: "Repeat exactly the words of another person.",
    b: "Express what someone has said using your own words, maintaining the original meaning.",
    c: "Modify someone else's words to change their meaning.",
    d: "Ignore what someone has said.",
    correct: "b",
},
{
    question: "What is an example of a non-restrictive relative clause in English?",
    a: "I like the book that you recommended",
    b: "My friend, who is a doctor, recommended a great book",
    c: "The book that I am reading is very interesting",
    d: "She has a dog whose tail is very fluffy",
    correct: "b",
},
{
    question: "In the sentence She watched the movie, which was directed by Steven Spielberg, what type of relative clause is used for which was directed by Steven Spielberg?",
    a: "He said that he had never seen such a beautiful sunset.",
    b: "He said that he has never seen such a beautiful sunset.",
    c: "He said that he was never seeing such a beautiful sunset.",
    d: "He said that he had never seen such a beautiful sunset.",
    correct: "b",
},
//3
{
    question: "What is the correct way to change the following verb to the future perfect in the third person singular? She will have finished her homework.",
    a: "She will has finished her homework..",
    b: "She will had finished her homework.",
    c: "She will have finished her homework.",
    d: "She will have finishing her homework.",
    correct: "d",
},
{
    question: "In the sentence The cake, which was baked by my grandmother, was delicious, what type of relative clause is used for which was baked by my grandmother?",
    a: "Restrictive relative clause",
    b: "Non-restrictive relative clause",
    c: "Passive relative clause",
    d: "Active relative clause",
    correct: "b",
},
{
    question: "Which of the following is an example of an intransitive verb that cannot function as a transitive verb under any circumstances?",
    a: "Fail",
    b: "Grow",
    c: "Swim",
    d: "Run",
    correct: "a",
},
{
    question: "What is the correct way to change the following sentence to indirect reported speech? She said, 'I will be visiting my parents next weekend",
    a: "She said that she was visiting her parents the next weekend.",
    b: "She said that she will be visiting her parents next weekend.",
    c: "She said that she would be visiting her parents the next weekend.",
    d: "She said that she is visiting her parents next weekend.",
    correct: "c",
},

{
    question: "Which of the following sentences uses a modal verb in the correct form?",
    a: "I must finish the project by tomorrow.",
    b: "She can speak three languages fluently",
    c: "They may go to the party later if they finish their work.",
    d: "We should study for the exam tonight.",
    correct: "d",
},
{
    question: "In the sentence The book, which was written by a famous author, became a bestseller, what type of relative clause is used for which was written by a famous author?",
    a: "Restrictive relative clause",
    b: "Non-restrictive relative clause",
    c: "Passive relative clause",
    d: "Active relative clause",
    correct: "b",
},
{
    question: "What is the correct way to change the following sentence to reported speech? He said, 'I have never seen such a beautiful sunset.",
    a: "He said that he had never seen such a beautiful sunset.",
    b: "He said that he has never seen such a beautiful sunset.",
    c: "He said that he was never seeing such a beautiful sunset.",
    d: "He said that he had never seen such a beautiful sunset.",
    correct: "a",
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



