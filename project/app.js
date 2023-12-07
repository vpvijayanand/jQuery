$(document).ready(function () {
    const topics = ["Python", "Java", "PHP", "C++", ".Net"];
    let currentTopic = "";
    let questions = [];
    let currentQuestion = 0;
    let correctAnswers = 0;

    const wheel = $('.wheel');
    const spinBtn = $('#spin-btn');
    const questionContainer = $('.question-container');
    const questionDiv = $('.question');
    const choicesDiv = $('.choices');
    const nextBtn = $('#next-btn');
    const resultContainer = $('.result-container');
    const resultDiv = $('.result');

    // Load questions from data.json
    function loadQuestions(topic) {
        $.getJSON('data.json', function (data) {
            questions = data[topic];
            loadQuestion(currentQuestion);
        });
    }

    // Load a question and choices
    function loadQuestion(index) {
        if (index < questions.length) {
            questionDiv.text(questions[index].question);
            choicesDiv.empty();
            questions[index].choices.forEach(function (choice, i) {
                choicesDiv.append(`<input type="radio" id="choice${i}" name="choice" value="${choice}"><label for="choice${i}">${choice}</label><br>`);
            });
            nextBtn.prop('disabled', true);
        } else {
            showResult();
        }
    }

    // Check the selected answer
    function checkAnswer() {
        const selectedChoice = $("input[name='choice']:checked").val();
        if (selectedChoice === questions[currentQuestion].answer) {
            correctAnswers++;
            resultDiv.addClass('correct').text('Correct!');
        } else {
            resultDiv.addClass('incorrect').text('Incorrect. Correct answer: ' + questions[currentQuestion].answer);
        }
        nextBtn.prop('disabled', false);
    }

    // Show the result after all questions
    function showResult() {
        resultDiv.removeClass('correct incorrect');
        resultDiv.text(`You got ${correctAnswers} out of ${questions.length} questions correct.`);
        resultContainer.show();
        currentQuestion = 0;
        correctAnswers = 0;
    }

    // Spin the wheel and select a topic
    spinBtn.click(function () {
        if (!wheel.hasClass('spinning')) {
            wheel.addClass('spinning');
            currentTopic = topics[Math.floor(Math.random() * topics.length)];
            setTimeout(function () {
                wheel.removeClass('spinning');
                loadQuestions(currentTopic);
                questionContainer.show();
            }, 4000); // Adjust the duration of spinning as needed
        }
    });

    // Load the next question
    nextBtn.click(function () {
        checkAnswer();
        currentQuestion++;
        loadQuestion(currentQuestion);
    });
});
