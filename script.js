const quizData = [
    {
        question: 'Resolving errors in a program is known as...',
        a: 'Debugging',
        b: 'Error Checking',
        c: 'Refixing',
        d: 'Problem Solving',
        correct: 'a'
    }, {
        question: 'What is the most used programming language in 2021',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'C++',
        correct: 'b'
    }, {
        question: 'What does IDE stand for?',
        a: 'Integrated Debugging Equipment',
        b: 'Integrated Debugging Environment',
        c: 'Integrated Development Equipment',
        d: 'Integrated Development Environment',
        correct: 'd'
    },
    {
        question: 'A good algorithm must be',
        a: 'replacable',
        b: 'open-ended',
        c: 'simple',
        d: 'detailed',
        correct: 'd'
    }, {
        question: 'A computer program is best described as a series of ___________.',
        a: 'Instructions',
        b: 'Questions',
        c: 'Answers',
        d: 'Numbers',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) { score++; }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}questions.</h2>`;
        }
    }
});