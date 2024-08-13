document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris",
                d: "Rome"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is the current President of the United States?",
            answers: {
                a: "Joe Biden",
                b: "Donald Trump",
                c: "Barack Obama",
                d: "George Bush"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the smallest prime number?",
            answers: {
                a: "1",
                b: "2",
                c: "3",
                d: "5"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
