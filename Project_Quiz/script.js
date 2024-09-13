const quizzes = {
    1: [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the capital of Spain?", answer: "Madrid" }
    ],
    2: [
        { question: "What is the largest planet?", answer: "Jupiter" },
        { question: "What is the capital of Italy?", answer: "Rome" },
        { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" }
    ],
    3: [
        { question: "What is the atomic number of Hydrogen?", answer: "1" },
        { question: "What is the boiling point of water?", answer: "100" },
        { question: "What element has the symbol 'O'?", answer: "Oxygen" }
    ]
};

let currentQuestionIndex = 0;
let timer = 0;
let interval;
let quizId = new URLSearchParams(window.location.search).get('quiz'); //will discuss in class
let questions = quizzes[quizId];

// Event listener for when the user clicks the "Submit Answer" button,will discuss in class
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// Event listener for when the page finishes loading, starting the quiz, will discuss in class
document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
    // Start the timer by setting an interval to call the updateTimer function every second.

    // Display the first question by calling a function to handle this.
}

function displayNextQuestion() {
    // Check if there are more questions left in the array.
    // If there are, update the question element to show the next question.
    // Clear the answer input field so the user can enter a new answer.
    // If there are no more questions, call the endQuiz function.
}

function checkAnswer() {
    // Get the user's input from the answer field.
    // Compare it with the correct answer from the questions array.
    // If the answer is correct, increment the currentQuestionIndex and display the next question.
    // If the answer is incorrect, alert the user to try again.
}

function updateTimer() {
    // Increment the timer variable by 1 to track the seconds.
    // Update the timer display on the page with the current time elapsed.
}

function endQuiz() {
    // Stop the timer by clearing the interval.
    // Hide the question and answer input elements and display the result.
    // Show the final result including how long it took to complete the quiz.
    // Make the "Back to Home" button visible so the user can return to the landing page.
}
