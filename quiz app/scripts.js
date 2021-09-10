const questions = [
    {
        question: 'how old is the universe?',
        a: '3 billion years old',
        b: '1000 years old',
        c: '1 million years old',
        d: '14 billion years old',
        answer: 'a'
    },
    {
        question: 'who is your daddy',
        a: 'Raddles',
        b: 'Abe lincoln',
        c: 'Howie Mandell',
        d: 'Mr. Bean',
        answer: 'a'
    },
    {
        question: 'what does html stand for',
        a: 'hypertext markup language',
        b: 'javascript',
        c: 'internet explorer',
        d: 'webpage markup language',
        answer: 'a'
    },
    {
        question: 'what is the capital of canada',
        a: 'toronto',
        b: 'winnipeg',
        c: 'ottawa',
        d: 'montreal',
        answer: 'c'
    }
];

let question = document.getElementById('question')
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let submit = document.getElementById('submit');
let quiz = document.getElementById('quiz')

let quizCounter = 0;
let score = 0;
var answerElements = document.getElementsByName('answer');


function loadQuiz() {
    deSelect();
    let currentData = questions[quizCounter];
    question.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

loadQuiz();

submit.addEventListener("click", () => {
    const answer = selected();  //selected returns the value of the checked radio button (or undefined if nothing checked)

    if(answer && answer === questions[quizCounter].answer){
        score++
    }
    quizCounter++;

    if (quizCounter < questions.length){
    loadQuiz();
    }else{
        quiz.innerHTML = `

        <h2> you answered correctly at ${score}/${questions.length} questions.</h2>
        <button onclick = "location.reload()">Reload</button>

        `;
    }
})


//this function returns the selected radio button. If none selected undefined is returned.
function selected() {
    let answer = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id
        }

    });
    return answer;
}

selected();


function deSelect() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    })
}

deSelect();